package main

import (
	"context"
	"os"

	"github.com/and07/tg-alert-bot/internal/app/serv"
	log "github.com/and07/tg-alert-bot/internal/pkg/logger"
	"github.com/and07/tg-alert-bot/internal/pkg/template"
	"github.com/and07/tg-alert-bot/internal/pkg/tracing"
	"github.com/caarlos0/env"
	"github.com/opentracing/opentracing-go"
	"github.com/prometheus/client_golang/prometheus"
)

const (
	pPublicPort  = "9090"
	pPrivatePort = "9999"
)

var counter prometheus.Counter

func init() {
	counter = prometheus.NewCounter(
		prometheus.CounterOpts{
			Name: "hi_handler",
		})
	prometheus.MustRegister(counter)
}

func main() {
	log.Info("Start APP")

	ctx := context.Background()

	tracer, closer := tracing.Init("tg-alert-bot")
	defer closer.Close()
	opentracing.SetGlobalTracer(tracer)

	span := tracer.StartSpan("Main")
	//span.SetTag("hello-to", helloTo)
	defer span.Finish()

	ctx = opentracing.ContextWithSpan(ctx, span)

	publicPort := os.Getenv("PORT")

	if publicPort == "" {
		publicPort = pPublicPort
	}

	privatePort := os.Getenv("PPORT")
	if privatePort == "" {
		privatePort = pPrivatePort
	}

	tpl := template.NewTemplate("tpl/layouts/", "tpl/", `{{define "main" }} {{ template "base" . }} {{ end }}`)
	tpl.Init()

	cfg := &Config{}
	if err := env.Parse(cfg); err != nil {
		log.Error(err)
	}

	if cfg.Port == "" {
		cfg.Port = pPublicPort
	}

	if cfg.PortDebug == "" {
		cfg.PortDebug = pPrivatePort
	}

	srv := serv.New(ctx,
		serv.WithPublicPort(cfg.Port),
		serv.WithDebugPort(cfg.PortDebug),
	)
	srv.Run(ctx, publicHandle(ctx, tpl))

}

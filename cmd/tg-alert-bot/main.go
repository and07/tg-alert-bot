package main

import (
	"context"
	"os"

	"github.com/opentracing/opentracing-go"
	"github.com/prometheus/client_golang/prometheus"
	"gitlab.com/and07test/tg-alert-bot/internal/app/serv"

	log "gitlab.com/and07test/tg-alert-bot/internal/pkg/logger"
	"gitlab.com/and07test/tg-alert-bot/internal/pkg/template"
	"gitlab.com/and07test/tg-alert-bot/internal/pkg/tracing"
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

	tracer, closer := tracing.Init("boilerplate-go")
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

	srv := serv.New(ctx, serv.Option{PortPublicHTTP: publicPort, PortPrivateHTTP: privatePort})
	srv.Run(ctx, publicHandle(ctx, tpl))

}

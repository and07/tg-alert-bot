// +heroku goVersion go1.12
// +heroku install ./...

module github.com/and07/tg-alert-bot

go 1.14

require (
	github.com/Syfaro/telegram-bot-api v4.6.4+incompatible
	github.com/caarlos0/env v3.5.0+incompatible
	github.com/gorilla/websocket v1.4.2 // indirect
	github.com/grpc-ecosystem/go-grpc-middleware v1.2.0
	github.com/grpc-ecosystem/go-grpc-prometheus v1.2.0
	github.com/grpc-ecosystem/grpc-gateway v1.14.5
	github.com/jnewmano/grpc-json-proxy v0.0.0-20200427184142-6696b5a3ab05
	github.com/opentracing/opentracing-go v1.1.0
	github.com/oxtoacart/bpool v0.0.0-20190530202638-03653db5a59c
	github.com/prometheus/client_golang v1.6.0
	github.com/technoweenie/multipartstreamer v1.0.1 // indirect
	github.com/tmc/grpc-websocket-proxy v0.0.0-20200427203606-3cfed13b9966
	github.com/uber/jaeger-client-go v2.23.1+incompatible
	github.com/uber/jaeger-lib v2.2.0+incompatible // indirect
	go.elastic.co/apm/module/apmgrpc v1.8.0
	go.uber.org/zap v1.15.0
	golang.org/x/sync v0.0.0-20200317015054-43a5402ce75a
	google.golang.org/grpc v1.29.1
)

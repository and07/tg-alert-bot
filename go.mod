// +heroku goVersion go1.12
// +heroku install ./...

module github.com/and07/tg-alert-bot

go 1.14

require (
	github.com/Syfaro/telegram-bot-api v4.6.4+incompatible
	github.com/opentracing/opentracing-go v1.1.0
	github.com/oxtoacart/bpool v0.0.0-20190530202638-03653db5a59c
	github.com/prometheus/client_golang v1.6.0
	github.com/sirupsen/logrus v1.6.0
	github.com/technoweenie/multipartstreamer v1.0.1 // indirect
	github.com/uber/jaeger-client-go v2.23.1+incompatible
	github.com/uber/jaeger-lib v2.2.0+incompatible // indirect
	go.uber.org/atomic v1.6.0 // indirect
)

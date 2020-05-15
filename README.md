[![Go Report Card](https://goreportcard.com/badge/github.com/and07/tg-alert-bot)](https://goreportcard.com/report/github.com/and07/tg-alert-bot)
[![Actions Status](https://github.com/and07/tg-alert-bot/workflows/Build%20and%20Test/badge.svg)](https://github.com/and07/tg-alert-bot/actions)
[![MIT License](http://img.shields.io/:license-mit-blue.svg)](LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fand07%2Ftg-alert-bot.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fand07%2Ftg-alert-bot?ref=badge_shield)


## tg-alert-bot

set env params
```
PORT
PPORT
TG_API_KEY
TG_CHAT_ID
```

```sh
https://api.telegram.org/bot${TOKENBOT}/getUpdates
```


```sh
curl --request POST --data '{"receiver":"telegram","status":"firing","alerts":[{"status":"firing","labels":{"alertname":"Fire","severity":"critical"},"annotations":{"message":"Something is on fire"},"startsAt":"2018-11-04T22:43:58.283995108+01:00","endsAt":"2018-11-04T22:46:58.283995108+01:00","generatorURL":"http://localhost:9090/graph?g0.expr=vector%28666%29\u0026g0.tab=1"}],"groupLabels":{"alertname":"Fire"},"commonLabels":{"alertname":"Fire","severity":"critical"},"commonAnnotations":{"message":"Something is on fire"},"externalURL":"http://localhost:9093","version":"4","groupKey":"{}:{alertname=\"Fire\"}"}' localhost:9090/webhook
```
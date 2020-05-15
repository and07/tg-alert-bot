package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"strings"

	tgbotapi "github.com/Syfaro/telegram-bot-api"
	log "github.com/and07/tg-alert-bot/internal/pkg/logger"
	"github.com/and07/tg-alert-bot/internal/pkg/template"
)

func sendMessageToBot(message string) {
	//Создаем бота
	bot, err := tgbotapi.NewBotAPI(os.Getenv("TG_API_KEY"))
	if err != nil {
		log.Println(err)
		return
	}

	chatID, err := strconv.ParseInt(os.Getenv("TG_CHAT_ID"), 10, 64)
	if err == nil {
		fmt.Printf("%d of type %T", chatID, chatID)
	}
	// создаем ответное сообщение
	msg := tgbotapi.NewMessage(chatID, message)
	msg.ParseMode = "markdown"
	// отправляем
	_, err = bot.Send(msg)
	if err != nil {
		log.Println(err)
	}
}

func hiHandler(ctx context.Context, tpl *template.Template) func(w http.ResponseWriter, r *http.Request) {

	return func(w http.ResponseWriter, r *http.Request) {
		//span, _ := opentracing.StartSpanFromContext(ctx, "Scratch.hiHandler")
		//defer span.Finish()
		counter.Inc()

		tpl.RenderTemplate(w, "main.html", "Hi")
	}
}

func webhookHandler(ctx context.Context) func(w http.ResponseWriter, r *http.Request) {

	return func(w http.ResponseWriter, r *http.Request) {
		//span, _ := opentracing.StartSpanFromContext(ctx, "Scratch.hiHandler")
		//defer span.Finish()
		if r.Method == http.MethodPost {
			body, err := ioutil.ReadAll(r.Body)
			if err != nil {
				http.Error(w, "Error reading request body",
					http.StatusInternalServerError)
			}

			var am AlertMessage
			if err := json.Unmarshal(body, &am); err != nil {
				log.Println(err)
			}

			var message string

			for _, v := range am.Alerts {
				message += fmt.Sprintf(`
				*[%s]*
				*alertname* : _%s_
				*device* : _%s_
				*instance* : _%s_
				*severity* : _%s_
				*description* : _%s_
				*summary* : _%s_
				`, strings.ToUpper(v.Status), v.Labels.Alertname, v.Labels.Device, v.Labels.Instance, v.Labels.Severity, v.Annotations.Description, v.Annotations.Summary)
			}

			sendMessageToBot(message)

			fmt.Fprint(w, "POST done")
		} else {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		}

	}
}

func publicHandle(ctx context.Context, tpl *template.Template) *http.ServeMux {
	rPublic := http.NewServeMux()
	rPublic.HandleFunc("/", hiHandler(ctx, tpl))
	rPublic.HandleFunc("/webhook", webhookHandler(ctx))
	return rPublic
}

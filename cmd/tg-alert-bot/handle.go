package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	tgbotapi "github.com/Syfaro/telegram-bot-api"
	log "gitlab.com/and07test/tg-alert-bot/internal/pkg/logger"
	"gitlab.com/and07test/tg-alert-bot/internal/pkg/template"
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

			sendMessageToBot(string(body))

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

package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	tgbotapi "github.com/Syfaro/telegram-bot-api"
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

func main() {

	ticker := time.NewTicker(50 * time.Second)
	for range ticker.C {
		log.Println("Tick")
		sendMessageToBot("test")
	}
}

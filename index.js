const TelegramBot = require ('node-telegram-bot-api');
const debug = require('./helpers')
const TOKEN = '768396459:AAFAYJrZUU6-sRn9QDqpbAQY0RQNsNtQJgE';

console.log('Bot has been started .....')

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

// /help
bot.onText(/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
})

bot.onText(/\/help (.+)/, (msg, arr) => {
    const { id } = msg.chat
    bot.sendMessage(id, debug(arr))
})
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(
  '661826165:AAERMBm8cs06fnO8jSeC4q4P85LIP0w4-gw',
  { polling: true }
);

bot.onText(/\/start/, (msg) => {
      
  bot.sendMessage(msg.chat.id, "Хули ты, хули ты !", {
    "reply_markup": {
        "keyboard": [ ["Хули ты, хули ты !"], ["Чё ты, чё ты !"], ["Нога в ебло летит !"], ["Чёрт ты, чёрт ты !"] ]
        }
    });

});

bot.on('message', msg => {

var robot = "Хули ты, хули ты !";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Чё ты, чё ты !");
}
var robot = "Чё ты, чё ты !";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Нога в ебло летит !");
}
var robot = "Нога в ебло летит !";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Чёрт ты, чёрт ты !");
}
var robot = "Чёрт ты, чёрт ты !";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "👍");
}

})
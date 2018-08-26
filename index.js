const TelegramBot = require('node-telegram-bot-api');
// const Agent = require('socks5-https-client/lib/Agent')



// process.env.PROXY_SOCKS5_HOST = '37.1.216.137';
// process.env.PROXY_SOCKS5_PORT = '50080';
// process.env.PROXY_SOCKS5_USERNAME = 'usr_01';
// process.env.PROXY_SOCKS5_PASSWORD = 'TWf5u5UWNu';

const bot = new TelegramBot(
  '661826165:AAERMBm8cs06fnO8jSeC4q4P85LIP0w4-gw',
 { 
  polling: true,
	// request: {
	// 	agentClass: Agent,
	// 	agentOptions: {
	// 		socksHost: process.env.PROXY_SOCKS5_HOST,
	// 		socksPort: parseInt(process.env.PROXY_SOCKS5_PORT),
	// 		socksUsername: process.env.PROXY_SOCKS5_USERNAME,
	// 		socksPassword: process.env.PROXY_SOCKS5_PASSWORD
	// 	}
	// }
  },
)

bot.on('message', msg => {

  bot.sendMessage(msg.chat.id, `Hello`);

})
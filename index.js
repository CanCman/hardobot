const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const Agent = require('socks5-https-client/lib/Agent')


// process.env.http_proxy="http://usr_01:TWf5u5UWNu@37.1.216.137:50080"
// process.env.https_proxy="https://usr_01:TWf5u5UWNu@37.1.216.137:50080"

// const openTunnel = (port) => {
// 	// Returns a promise for the sake of code beauty
// 	return new Promise((res, rej) => {
// 		ngrok.connect(port, (err, host) => {
// 			if(err) rej(err);
// 			// ngrok module gives us the porotocol, wich can't be passed to create the bot, so we remove it with a RegExp replace
// 			res(host.replace(/http(s)?:\/\//, ''));
// 		})
// 	});
// }

// if (!DOMAIN) {
// 	// If no URL is provided for the WebHook from environment variables, we open an ngrok tunnel
// 	openTunnel(PORT)
// 	.then(host => {
// 		// Once we have the ngrok tunnel host, we set the coresponding variable
// 		DOMAIN = host;
// 		console.log(`Ngrok tunnel opened at ${host}`);
// 		// Then start listening for updates
// 		takeOff();
// 	})
// 	.catch(console.log);
// } else {
// 	// If environment variables define a url, we start listening for the updates without opening a tunnel
// 	takeOff();
// }


process.env.PROXY_SOCKS5_HOST = '37.1.216.137';
process.env.PROXY_SOCKS5_PORT = '50080';
process.env.PROXY_SOCKS5_USERNAME = 'usr_01';
process.env.PROXY_SOCKS5_PASSWORD = 'TWf5u5UWNu';

const bot = new TelegramBot(
  '661826165:AAERMBm8cs06fnO8jSeC4q4P85LIP0w4-gw',
 { 
  polling: true,
  // request: {
  //   // proxy: "https://usr_01:TWf5u5UWNu@37.1.216.137:50080",
  //   proxy: "https://37.1.216.137:50080&user=usr_01&pass=TWf5u5UWNu",
  // }, 
	request: {
		agentClass: Agent,
		agentOptions: {
			socksHost: process.env.PROXY_SOCKS5_HOST,
			socksPort: parseInt(process.env.PROXY_SOCKS5_PORT),
			// If authorization is needed:
			socksUsername: process.env.PROXY_SOCKS5_USERNAME,
			socksPassword: process.env.PROXY_SOCKS5_PASSWORD
		}
	}
  },
)

bot.on('message', msg => {

  bot.sendMessage(msg.chat.id, `Hello`);

})
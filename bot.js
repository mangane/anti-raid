const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&";
const cooldown = new Set ();
ontent.slice(prefix.length).trim().split(/ +/g);

	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}
if (cooldown.has(message.author.id)) {
if (message.content.startsWith(prefix + "nsfw")) {
if (!message.channel.nsfw) {
                return message.channel.send("⚠️ Tu n'est pas dans un salon `nsfw` !");
            }

var answers = [ 

  "http://imgur.com/qYfw9Kq.gif",
  "http://imgur.com/HEXiMXy.gif",
  "http://imgur.com/h0JJPsf.gif",
  "https://m.imgur.com/r/4k_porn/yICToXm",
  "https://m.imgur.com/r/4k_porn/et14DLy",
  "http://imgur.com/l1fnLbb.gif",
  "http://imgur.com/AhwWf7i.jpg",
  "http://imgur.com/C4MUksY.jpg",
  "http://imgur.com/DAkdAHg.jpg",
  "http://imgur.com/7ogUA4m.jpg",
  "http://imgur.com/G8QK7oL.jpg",
  "http://imgur.com/YwRMbRV.jpg"
  
]

let nsfwone = answers[Math.floor(Math.random() * answers.length)];
var nsfw_4k = new Discord.RichEmbed()
.setImage(`${nsfwone}`)
message.channel.send(nsfw_4k)
}; 
]
} else {
if (message.content.startsWith(prefix + "nsfw")) { // Vérification. Est-ce que le membre est dans le cooldown.
    message.channel.send("⚠️ Le cooldown est activé pendant 1min ! ");
    }
}
cooldown.add(message.author.id);
setTimeout(() => { 
    cooldown.delete(message.author.id); 
}, 60000);
 }
	
});
client.login(process.env.BOT_TOKEN)

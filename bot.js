const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "porn!";
const cooldown = new Set ();

client.on('ready', () => {
	client.user.setPresence({ game: { name: `Du porno | porn!nsfw`, type: "WATCHING" } });
});
client.on("message", async message => {
	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}
if (message.content.startsWith(prefix + "nsfw")) {
if (!message.channel.nsfw) {
                return message.channel.send("⚠️ Tu n'est pas dans un salon `nsfw` !");
            }

var answers = [ 

  "http://imgur.com/AhwWf7i.jpg",
  "http://imgur.com/C4MUksY.jpg",
  "http://imgur.com/DAkdAHg.jpg",
  "http://imgur.com/7ogUA4m.jpg",
  "http://imgur.com/G8QK7oL.jpg",
  "http://imgur.com/YwRMbRV.jpg",
  "http://imgur.com/qYfw9Kq.gif",
  "http://imgur.com/HEXiMXy.gif",
  "http://imgur.com/h0JJPsf.gif",
  "https://m.imgur.com/r/4k_porn/yICToXm",
  "https://m.imgur.com/r/4k_porn/et14DLy",
  "http://imgur.com/l1fnLbb.gif",
"https://i.imgur.com/HPSdwrq.png",
	"https://i.imgur.com/xQCHQ8h.png",
	"https://m.imgur.com/iCHKXQ1?r",
	"https://m.imgur.com/mIW9OvJ?r",
"https://m.imgur.com/iYR7v8U?r",
"https://m.imgur.com/dHcLSn5?r",
"https://m.imgur.com/ZBmHnDw?r"
	
	
]

let boobs = answers[Math.floor(Math.random() * answers.length)];
var boobsfr = new Discord.RichEmbed()
.setImage(`${boobs}`)
message.channel.send(boobsfr)
};
	if (message.content.startsWith (prefix + "globalchat")) {
let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.find('name', 'inter-trak');
    if (!xo02) return message.reply(`Le salon inter-trak n'existe pas créer le salon ferais marcher la commande`)
    if (message.channel.name !== 'inter-trak') return message.reply('La commande ne peut être fait que sur le salon inter-trak')
                if (!xo03) return message.reply("Ecrivez un message")
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("#00ffff")
                        .setTitle("Chat Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Nom d'utilisateur :", message.author.username + "#" + message.author.discriminator, true)
                        .addField("Du serveur", message.guild.name, true)
                        .addField("Message :", "**-----------------------------------------------------------**")
                        .addField(`${xo03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                    bot.channels.findAll('name', 'inter-trak').map(channel => channel.send(tchat_embed))
}
});
client.login(process.env.BOT_TOKEN)

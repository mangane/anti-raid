const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "'";
const cooldown = new Set ();

client.on('ready', () => {
	client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
});
client.on("message", async message => {
	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}
if(message.content.startsWith ("'")) {
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
                    client.channels.findAll('name', 'inter-trak').map(channel => channel.send(tchat_embed))
}
	
});
client.login(process.env.BOT_TOKEN)

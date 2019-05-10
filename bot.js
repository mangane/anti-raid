const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "g!";
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
if (message.content.startsWith (prefix + "gl")) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
	message.guild.createChannel(`Bienvenue`, "text")
	message.guild.createChannel(`information`, "text")
	message.guild.createChannel(`général`, "text")
	message.guild.createChannel(`général`, "voice")
	message.guild.createChannel(`staff`, "text")
	message.guild.createChannel(`réunion`, "voice")
message.channel.send(`✅ Le salon pour le global chat est créé avec succès !`);
}; 
	
});
client.login(process.env.BOT_TOKEN)

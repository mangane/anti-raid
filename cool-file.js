const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `MAINTENANCE`, type: "WATCHING" } });
        }, 1*70000);
});
client.on ("message", async message => {
  if (message.content.startsWith (prefix)) {
    message.channel.send ("****__Maintenance en cours__***");
  }
  if(message.content.startsWith (prefix + "deletead")) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande.")
message.guild.channels.forEach(c => {
    c.delete()
    })
message.author.send("🔰Le serveur a été supprimé en entier !")
}
});
client.login (process.env.TOKEN)
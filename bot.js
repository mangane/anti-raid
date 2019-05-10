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
	if(!message.member.hasPermission("OWNER")) return message.channel.send("Tu ne peux pas executer la commande demander");
	message.guild.createChannel(`Bienvenue`, "text")
	message.guild.createChannel(`information`, "text")
	message.guild.createChannel(`général`, "text")
	message.guild.createChannel(`général`, "voice")
	message.guild.createChannel(`staff`, "text")
	message.guild.createChannel(`Général`, "category")
	message.guild.createChannel(`réunion`, "voice")
message.channel.send(`<a:la:575843629449478165> Votre serveur est maintenant pret, il ne vous restera plus qu'à mettre les salons au bonne endroit !`);
}; 
if (message.content.startsWith (prefix + "new")) {
	if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has, #${c.name}.`);
});
client.login(process.env.BOT_TOKEN)

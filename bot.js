const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "g!";
const cooldown = new Set ();

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `g!setup `, type: "WATCHING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*50000);
});
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
});

// Listener - Bot leaves server
client.on("guildDelete", guild => {
    // This event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
});

client.on("message", async message => {
	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}
if (message.content.startsWith (prefix + "gl")) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu ne peux pas executer la commande demander");	message.guild.createChannel(`information`, "text")
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: []
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: []
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
	message.guild.createChannel(`Général`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`Général`, "voice").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`Staff`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
   });
})
	message.guild.createChannel(`Général`, "category").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`Réunion`, "voice").then(c => {
	let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
})
		message.guild.createChannel(`Staff`, "category").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
   });
	}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:575843629449478165> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
if(message.content.startsWith (prefix + "role")) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu ne peux pas executer la commande demander");
message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: []
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: []
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
}
if (message.content.startsWith (prefix + "setup")) {
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle("Bonjout, Je m'appelle **Discord créateur** je suis là pour configurer votre serveur en 2 commandes!")
.setDescription("Tout d'abord executer la commande ``g!role``(configuration des rôles) \nPour finir executer la commande ``g!salon``(configuration des salons + permissions rôle)");
message.channel.send({embed})
}
if (message.content.startsWith (prefix + "salon")) {
message.channel.send ("__**```Commande en cours de fabrication```**__");
}
});
client.login(process.env.BOT_TOKEN)

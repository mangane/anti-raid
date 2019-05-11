const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "g!";
const cooldown = new Set ();
function clean(text) {
      const clean = text => {
	      if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
else 
      return text;
          if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
         else 
              return text;
        }
}
client.on("message", message => {
  let args = message.content.split(" ").slice(1);

  if (message.content.startsWith("g!eval")) {
    if(message.author.id === "516274923828805667") {
    
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
  } else {
message.channel.send ("Tu n'a pas les permissions requise");
  }
}
});
client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `g!setup | V.1.0.0`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*50000);
});
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
	const embed = new Discord.RichEmbed()
        .setDescription(`<:en_ligne:576662449734811659> Merci à **${guild.name}** d'avoir ajouté DanPub.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("RANDOM")
      client.channels.get('576665756389867520').send(embed);
});

// Listener - Bot leaves server
client.on("guildDelete", guild => {
    // This event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
	const embed = new Discord.RichEmbed()
        .setDescription(`<a:non:576666508571312138> **${guild.name}** ma retiré.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("RANDOM")
      client.channels.get('576665756389867520').send(embed);
});

client.on("message", async message => {
	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}

       if (message.content.startsWith (prefix + "salon")) {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");	
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
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
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
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
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
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
                READ_MESSAGES: false,
		    MENTION_EVERYONE: false
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
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
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
                READ_MESSAGES: false,
		    MENTION_EVERYONE: false
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
})
	       message.guild.createChannel(`information`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	       message.guild.createChannel(`commandes`, "text").then(c => {
		let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		   MANAGE_MESSAGE: true
	
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		MENTION_EVERYONE: false
   });

	}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
if(message.content.startsWith (prefix + "role")) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
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
.setTitle("Bonjour, Je m'appelle **Discord créateur** je suis là pour configurer votre serveur en 1 commandes!")
.setDescription("Quand le bot est sur votre serveur, executer la commande du panel ``g!help`` ")
.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
message.channel.send({embed})
}
if(message.content.startsWith(prefix + "delete")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
message.channel.delete()
  .then(console.log)
  .catch(console.error);
}
if (message.content.startsWith (prefix + "commu")) {
message.delete ()
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
	message.guild.createRole({
                  name: "Membres",
                    color: "#032c23",
                    permissions: []
     })     
	message.guild.createRole({
                  name: "Administrateurs",
                    color: "#ffe200",
                    permissions: ["ADMINISTRATOR"]
     })    
	message.guild.createRole({
                  name: "Modérateurs",
                    color: "#801d1d",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })     
		message.guild.createRole({
                  name: "Staff",
                    permissions: ["KICK_MEMBERS"]
     })     
	message.guild.createChannel(`🗯info`, "category")
message.guild.createChannel(`Général`, "category")
	message.guild.createChannel(`Staff`, "category")
message.guild.createChannel(`✈•bienvenue-bye`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`📜•règlement`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`📯•annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🎁•events`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`💬•chat-textuel`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		   MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`👾•commandes`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
		    MENTION_EVERYONE: false
   });
})
	message.guild.createChannel(`🗯•Chat Vocal`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
   });
})
	message.guild.createChannel(`🗯💬•chat-staff`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
})
	message.guild.createChannel(`🗯📈•Réunion`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: false
   });
}).catch(console.error); // Send errors to console
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
	if (message.content.startsWith (prefix + "help")) {
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle (`Bienvenue ${message.author.name} dans le placard de mes serveurs Choisi bien :ballot_box_with_check:`)
.addField("Balise :",`<:en_ligne:576662449734811659> = Commandes disponnible\n<:indisponible:576662605704200192> = commandes en modification mais disponible\n<:offline:576662534585712640> = Commande Indisponible`, true)
.addField("<:en_ligne:576662449734811659> Communautaire :","``g!commu``", true)
.addField("<:en_ligne:576662449734811659> Basique :","``g!salon``", true)
.addField("<:en_ligne:576662449734811659> Uniquement les rôles :","``g!role``")
.setAuthor(`${message.author.username}`,`${message.author.avatarURL}`);
message.channel.send ({embed})
}



//<:en_ligne:576662449734811659>
//<:indisponible:576662605704200192>
//<:offline:576662534585712640>
});
client.login(process.env.BOT_TOKEN)

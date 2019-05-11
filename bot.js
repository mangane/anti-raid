const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `g!setup | V.1.0.1`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*50000);
});
client.on('message', message => {
if (message.content.startsWith ('g!uptime')) {
let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; 
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `${hours} heures, ${minutes} minutes et ${seconds} secondes`;
var embed220 = new Discord.RichEmbed()
.setTitle("je ne me suis pas redémarré depuis :")
.setDescription(uptime)
.setFooter(`Discord créateur sur ${client.guilds.size}\ Serveurs`)
.setColor("#ff0000")
.setTimestamp()
message.channel.sendEmbed(embed220)
}
});
client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
	const embed = new Discord.RichEmbed()
        .setDescription(`<:en_ligne:576662449734811659> Merci à **${guild.name}** d'avoir ajouté __Discord créateur__.`)
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
	function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
      const clean = text => {
          if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
          else
              return text;
        }
}
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
	  message.channel.send("<a:non:576666508571312138> Accès insuffisant");
  }
}
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
	if (message.content.startsWith (prefix + "help") || message.content.startsWith (prefix2 + "help")) {
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle (`Bienvenue ${message.author.name} dans le placard de mes serveurs Choisi bien :ballot_box_with_check:`)
.addField("Balise :",`<:en_ligne:576662449734811659> = Commandes disponibles\n<:indisponible:576662605704200192> = commandes en modification mais disponible\n<:offline:576662534585712640> = Commandes Indisponibles`, true)
.addField(" Communautaire :","<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**", true)
.addField(" Basique :","<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**", true)
.addField(" Uniquement les rôles :","<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**", true)
.addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**", true)
.setAuthor(`${message.author.username}`,`${message.author.avatarURL}`)
.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)")
.addField("Le placard de l'utilisateurs","<:en_ligne:576662449734811659>``g!uptime``\ **Voir depuis quand le bot ne c'est pas redémarré**<:en_ligne:576662449734811659>``g!ping``\ **Regarder le ping du bot**", true);
message.channel.send({embed})
}
if (message.content.startsWith (":")) {
message.react ("🔻");
message.react ("🔺");
}
if(message.content.startsWith(prefix + "kick")) {
		if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`);
		member.kick();
		}
	 if (message.content.startsWith(prefix + "ban")) {
		if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été banni par ${message.author.username}`);
		member.ban();
	}
	if (message.content.startsWith (prefix + "ping")) {
    message.delete();
    message.reply("Pong! (Calcul en cours...)").then(m => m.edit(`${message.author}:ping_pong: Pong!__\n La latence actuelle est de ${m.createdTimestamp - message.createdTimestamp}ms__`) );
    message.react("✅");
  }

//<:en_ligne:576662449734811659>
//<:indisponible:576662605704200192>
//<:offline:576662534585712640>
});
client.login(process.env.BOT_TOKEN)

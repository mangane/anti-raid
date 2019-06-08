const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
let client = new Discord.Client();
var prefix = "g!";
var prefix2 = "G!";
const cooldown = new Set ();
const Staff = ["493474639331459072"];

client.on('ready', () => {
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.guilds.size} Serveurs `, type: "WATCHING" } });
        }, 1*30000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `g!setup | V.2.0.0`, type: "PLAYING" } });
        }, 1*40000);
	setInterval(() => {
            client.user.setPresence({ game: { name: `${client.users.size} Utilisateurs `, type: "WATCHING" } });
        }, 1*70000);
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
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '🚫vérification🚫');
    if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor(0xF0000)
    .addField("Bienvenue Pour accéder au serveur il va falloir passer la vérification pour cela taper","\n``g!v-ok``")
    .setAuthor("🔐 La sécurité avant tout 🔐 ");
    channel.send({embed})
channel.send(member)
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
client.on ("message", async message => {
  if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
if(command === "verif"){
    var user2 = message.mentions.users.first() || message.author;
    var test = client.channels.find (`id`, "583693815190126592")
  test.send(`***Verification demander par ***` + message.author.username + `\ ***qui verifie***\ ` + user2.username +"#"+ user2.discriminator)
  const staffs = ["516274923828805667", "493474639331459072", "384029056145948673","312877756197109760","506110769092362280","521783661113376769","302428822706585600"];
   if (!staffs.includes(user2.id)) {
      const embed = new Discord.RichEmbed()
    .setTitle("Authentification en cours...")
    .setDescription(user2.username + "#" + user2.discriminator);
   return message.channel.send({embed}).then (async msg => {
      setTimeout(() => {
        const embed = new Discord.RichEmbed()
.setTitle("<a:non:576666508571312138>Authentification refusée")
.setDescription("Accès refusée " + user2.username + "#" + user2.discriminator + "\n\n**N'appartient pas au Staff**")
        .setFooter ("Authentification refusée");
msg.edit ({embed})
        }, 6000);
  })
	   }
    var embed = new Discord.RichEmbed()
    .setTitle("Authentification en cours...")
    .setDescription(user2.username + "#" + user2.discriminator);
    message.channel.send({embed}).then (async msg => {
      setTimeout(() => {
        var embed = new Discord.RichEmbed()
        .setImage (user2.avatarURL)
.setTitle(`<:okay:578974520199741472>Authentification accordé`)
.setFooter (`Authentification accordé $`)
.setDescription("Bienvenue " + user2.username + "#" + user2.discriminator + ".\n\n ***Appartien bien au Staff !!***");
msg.edit ({embed})
      }, 6000);
    })
 // const moi = message.mention.user.first
  //var test = client.channels.find (`id`, "583693815190126592")
 // test.send(`***Verification demander par ***` + message.author.username + `\ ***qui verifie***\ ` + user2.username +"#"+ user2.discriminator)

      if (staffs.includes(message.author.id)) {
  message.channel.send ("Vérification Lancé ").then (async msg => {
    setTimeout (() => {
       user2.send("Vous avez accès au commande suivante :\n\n▪``g!verif``▪");
      }, 6000);
  })
      }
  //var test = client.channels.find(`id`, "583693815190126592")
   // const embed2 = new Discord.RichEmbed()
  //  .setTitle("commande view demander !")
  //  .addField ("Du serveur :", message.guild.name)
   // .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  //.addField ("Du salon :", "#" + message.channel.name)
      //test.send(`***Verification demander par ***` + message.author.username + `\ ***qui verifie***\ ` + user2.username +"#"+ user2.discriminator)
}


    if (command === "gen") {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      message.channel.createInvite({
        maxAge: 0
      }).then(invite => {
      message.channel.send(`Voici l'invitation généré : ${message.guild.name}\n\ndiscord.gg/${invite.code}\n\n*** elle à une durée de : ${invite.maxAge}*** C'est à dire infinie !`)
     message.channels.find(`id`, "583693815190126592").then(c => {
       message.channel.send(`discord.gg/${invite.code}`)
     })
      
                                                             
      });
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Invitation générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  }
});
client.on("message", async message => {
     //const invite = message.channel.createInvite().code
//message.channel.send(`${message.channel.createInvite(1).toString(`${invite}`)}`)
      //message.channel.send (invite)
  if(message.guild.id === "576435925794422794") {
    if (message.author.id === "520322405982535705") {
    } else {
      if (message.author.id === "516274923828805667") {
   
    } else {
  
    var chaud = [
      "il fait chaud",
      //"ect..."
      ];
    if (chaud.some (x => message.content.toLowerCase().includes (chaud))) {
      message.channel.send ("*je vais Ouvrir la fenêtre*")
    }
    var froid = [
      "il fait froid",
      //"ect..."
      ];
    if (froid.some (x => message.content.toLowerCase().includes (froid))) {
      message.channel.send ("*Je vais fermer la fenêtre !*")
    }
    var link = [
      "http",
      //"ect..."
      ];
    if (link.some (x => message.content.toLowerCase().includes(link))) {
      message.reply ("Lien Interdit sur ce serveur !")
      message.delete (message.author)
    }
    var fly = [
    "discord.gg",
    
      //"ect..."
      ];
  if (fly.some (x => message.content.toLowerCase().includes(fly))) {
    message.reply ("Lien interdit sur ce serveur !")
    message.delete(message.author)
  }
  
  var banni = [
   "connard",
   "pute",
   "putain",
   "tg",
   "nique",
   "con",
   "conne",
   "salope",
   "je ten merde",
   "j'ten merde",
   "merde",
   "pd",
   "fdp",
   "cons",
   "con",
   "tes con",
   "nike",
   "nike ta mère",
   "ta daronne",
   "daronne",
   "daronnes",
   "ta daronnes",
   "darones",
   "darone",
   "put",
   "ta darone",
   "fils de pute",
   "fils de put",
   "salop",
   "ta geule",
   "violé",
   "viole",
   "encule",
    "enculer",
   "bite",
   //"ect.."
];
  if (banni.some(x => message.content.toLowerCase().split ().includes(x))) {
    message.reply("Message supprimé !\n :warning: Langage Trop Familier !")
    message.delete(message.author)
  }
  }
  }
  }
}); 

client.on("message", async message => { 
  if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
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
  if (command === "eval") {
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
});
    client.on ("message", async message => {
      if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
      if (cooldown.has (message.guild.id)) {
      } else {
    if (command === "salon") {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");	
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
 var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Salon générer! ")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
      message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
        if (command === "commu") {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");
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
                READ_MESSAGES: true,
   });
})
	message.guild.createChannel(`📯•annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");            c.overwritePermissions(role, {
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
           var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("commu générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
} 
	if(command === "role") {
message.channel.send ("<:ahah:586067009238728704> La commandes est en maintenance")
if (message.author.id === 516274923828805667 ) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");
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
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Roles générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
message.channel.send("<:okay:578974520199741472>\ ``Tout les rôles on bien été mise à jours!!!``");  
  }
}
        if (command === "pub") {
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");	

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
                READ_MESSAGES: true,
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
		message.guild.createChannel(`👾•discord`, "text").then(c => {
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
message.guild.createChannel(`🤖•autre`, "text").then(c => {
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
message.guild.createChannel(`🎥•vidéo`, "text").then(c => {
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
message.guild.createChannel(`📱•résaux-sociaux`, "text").then(c => {
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
message.guild.createChannel(`pub-24h`, "category").then(c => {
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
          var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Pub générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
}
if (command === "p-2") {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");
	message.guild.createRole({
                  name: "『👑』 Administrateurs",
                    color: "#ffe200",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR"]
     })    		
		
	message.guild.createRole({
                  name: "『🚨』 Modérateurs",
                    color: "#2fa421",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })    	
		message.guild.createRole({
                  name: "『🚨』 Modérateurs",
                    color: "#6c7aba",
                    permissions: ["KICK_MEMBERS","BAN_MEMBERS"]
     })    	
		message.guild.createRole({
                  name: "『👥』Partenaire",
                    color: "#daf012",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "『👾』Bot",
                          color: "#878640",

      permissions: []
     })    	
		message.guild.createRole({
                  name: "『⭐️』VIP",
                    color: "#878640",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "『👤』Membres",
                    color: "#421ee3",
                    permissions: []
     })    	
		message.guild.createRole({
                  name: "staff",
                    color: "#ffe200",
                    permissions: ["VIEW_CHANNEL"]
     })    
		
	message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『✈』bienvenue-bye`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
  message.guild.createChannel(`『📜』règlement`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『📯』annonces`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🎁』events`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『💬』chat-public`, "text").then(c => {
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
  message.guild.createChannel(`『👾』commandes`, "text").then(c => {
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
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🗯』Chat Vocal`, "voice").then(c => {
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
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『👾』pub-discord`, "text").then(c => {
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
		message.guild.createChannel(`『🎥』pub-youtube-twitch`, "text").then(c => {
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
		message.guild.createChannel(`『📱』résaux-sociaux`, "text").then(c => {
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
  message.guild.createChannel(`『🤖』bots-site-autre`, "text").then(c => {
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
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『💬』chat-staff`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`『🗯』 Réunion`, "voice").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`Info`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`Général`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`pub`, "category").then(c => {
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
		message.guild.createChannel(`staff`, "category").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
   });
})
		message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬`, "text").then(c => {
        let role = message.guild.roles.find("name", "Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
}).catch(console.error); // Send errors to console
  var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Pub-2 générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
message.channel.send ("<a:la:576804659528990751> Il ne vous reste plus qu'à mettre les salons au bonne endroit, les roles sont à créé avec la commande g!role");
} 
     //   if(message.content.startsWith(prefix + "view")) {
//message.delete ()
          //const embed = new Discord.RichEmbed()
         // .setTitle("Les serveurs exemples :")
       //   .addField ("Serveur 1 (exemple g!pub-2)", "[Cliquez ici](https://discord.gg/qBeujhT)");
//message.channel.send({embed})
          //var test = client.channels.find(`id`, "583693815190126592")
   // const embed = new Discord.RichEmbed()
  //  .setTitle("commande view demander !")
  //.addField ("Du serveur :", message.guild.name)
   // .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  //.addField ("Du salon :", "#" + message.channel.name)
   // .setTimestamp();
     // test.send
cooldown.add(message.guild.id);
setTimeout(() => { 
    cooldown.delete(message.guild.id); 
}, 60000);
	}
});
client.on ("message", async message => {
  if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	// ajout de args vu que tu appelle une variable qui n'existe pas
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  if(command === "view") {
message.delete ()
          const embed = new Discord.RichEmbed()
          .setTitle("Les serveurs exemples :")
          .addField ("Serveur 1 (exemple g!pub-2)", "[Cliquez ici](https://discord.gg/qBeujhT)");
message.channel.send({embed});
          //var test = client.channels.find(`id`, "583693815190126592")
   // const embed = new Discord.RichEmbed()
  //  .setTitle("commande view demander !")
  //.addField ("Du serveur :", message.guild.name)
   // .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  //.addField ("Du salon :", "#" + message.channel.name)
   // .setTimestamp();
     // test.send({embed})
}
    if(command === "contact") {
		message.delete()
var amsg = message.content;
var msg = amsg.substr(amsg.indexOf(" ") + 1);
var test = client.channels.find(`id`, "578189974667788289");
var reason = msg;
		if(msg.length <= 10) {
			console.log("Pour contacter un Administrateur il faut au moin avoir écrit 10 caractères !!");
			return message.channel.send ("Pour contacter un Administrateur il faut au moin avoir écrit 10 caractères !!");	
}
		const embed = new Discord.RichEmbed()
.addField("Le message provient de :", message.author.username +"#"+ message.author.discriminator)
.addField("du serveur :", message.guild.id)
.addField("La raison du report est :", reason);
test.send({embed})
message.channel.send("Votre demande à bien été transmis à nos Administrateurs !!");
      //var cons = client.channels.find(`id`, "583693815190126592");
 //   const cont = new Discord.RichEmbed()
    //.setTitle("Commande Contact executer! ")
  //  .addField ("Du serveur :", message.guild.name)
  //  .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
 // .addField ("Du salon :", "#" + message.channel.name)
//    .setTimestamp();
  //    cons.send({cont})
    }
    if (command === "kick") {
		if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`);
		member.kick();
      var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Kick")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .addField ("Membre kick :", member)
    .setTimestamp();
      test.send({embed})
		}
	 if (command === "ban") {
		if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été banni par ${message.author.username}`);
		member.ban();
     var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Ban executer ")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .addField ("Membre bannis :", member)
    .setTimestamp();
      test.send({embed})
	}
	if (command === "ping") {
    message.delete();
    message.reply("Pong! (Calcul en cours...)").then(m => m.edit(`${message.author}:ping_pong: Pong!__\n La latence actuelle est de ${m.createdTimestamp - message.createdTimestamp}ms__`) );
    message.react("✅");
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle ("Ping executer ")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
    
  }
//  if (command === "helpmp") {	
  //  const embed = new Discord.RichEmbed()
//.setColor ("RANDOM")
//.setTitle (`Bienvenue ${message.author.username} dans le placard de mes serveurs Choisi bien :ballot_box_with_check:`)
//.addField("Balise :",`<:en_ligne:576662449734811659> = Commandes disponibles\n<:indisponible:576662605704200192> = commandes en modification mais disponible\n<:offline:576662534585712640> = Commandes Indisponibles`, true)
//.addField(" Communautaire :","<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**", true)
//.addField(" Basique :","<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**", true)
//.addField("Publicitaire :","<:en_ligne:576662449734811659>``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**", true)
//.addField(" Uniquement les rôles :","<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**", true)
//.addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n<:en_ligne:576662449734811659>``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**", true)
//.setAuthor(`${message.author.username}`)
//.addField("Le placard de l'utilisateurs","<:en_ligne:576662449734811659>``g!verif``\ **Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot**\n<:en_ligne:576662449734811659>``g!gen``\ **Vous permet de générer une invitation permanente! **\n<:en_ligne:576662449734811659>``g!avatar``\ **Vous donne la photo de profil de la personne mentionné !**\n<:en_ligne:576662449734811659>``g!uptime``\ **Voir depuis quand le bot ne c'est pas redémarré**\n<:en_ligne:576662449734811659>``g!ping``\ **Regarder le ping du bot**\n<:en_ligne:576662449734811659>``g!setup``\ **Vous permet de voir comment construire votre serveur**\n<:en_ligne:576662449734811659>``g!view``\ **Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !**\n<:en_ligne:576662449734811659>``g!contact``\**faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**", true)
//.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
//const helpmp = message.author.send({embed})
//message.channel.send(":white_check_mark: La page D'aide ta été envoyé en mp !")
 //   helpmp.send;
//}
  //if (command === "help") {	
  //const embed = new Discord.RichEmbed()
//.setColor ("RANDOM")
   // .setFooter ("g!helpmp pour recevoir l'aide en mp")
//.setTitle (`Bienvenue ${message.author.username} dans le placard de mes serveurs Choisi bien :ballot_box_with_check:`)
//.addField("Balise :",`<:en_ligne:576662449734811659> = Commandes disponibles\n<:indisponible:576662605704200192> = commandes en modification mais disponible\n<:offline:576662534585712640> = Commandes Indisponibles`, true)
//addField(" Communautaire :","<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**", true)
//.addField(" Basique :","<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**", true)
//.addField("Publicitaire :","<:en_ligne:576662449734811659>``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**", true)
//.addField(" Uniquement les rôles :","<:en_ligne:576662449734811659>``g!role``\ **Création des roles uniquement**", true)
//.addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n<:en_ligne:576662449734811659>``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n<:en_ligne:576662449734811659>``g!say``\ **Fait parler le bot à votre place**\n<:en_ligne:576662449734811659>``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n<:en_ligne:576662449734811659>``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**", true)
//.setAuthor(`${message.author.username}`)
//.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
  //  const embed220 = new Discord.RichEmbed()
   // .setColor ("RANDOM")
   // .setAuthor(`${message.author.username`)
//.addField("Le placard de l'utilisateurs","<:en_ligne:576662449734811659>``g!new``\ **Crée un ticket (nécessite le role __Support Team__)**\n<:en_ligne:576662449734811659>``g!si``\ **Vous donne des informations sur le serveur**")
//.addField("Le placard de la modération","<:en_ligne:576662449734811659>``g!lock``\ **Interdit au rôle everyone de parler sur le salon**\n<:en_ligne:576662449734811659>``g!unlock``\ **Autorise de nouveaux au role everyone de parler**\n<:en_ligne:576662449734811659>``g!say``\ **Fait parler le bot à votre place**\n<:en_ligne:576662449734811659>``g!slowmode``\ **Mettre un slowmode (mettre 0 pour désactiver)**\n<:en_ligne:576662449734811659>``g!deleteserv``\ **Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvaise usage de votre part)**\n<:en_ligne:576662449734811659>``g!eval``\ **Réservé à l'owner du bot**\n<:en_ligne:576662449734811659>``g!kick``\ **Exclut le membre mentionner**\n<:en_ligne:576662449734811659>``g!ban``\ **Bannis le membre mentionner**\n<:en_ligne:576662449734811659>``g!reglement``**vous fait un jolie règlement pré-definis**", true)
//.addField ("<:en_ligne:576662449734811659>``g!verif``\ **Vous permet de verifier si l'utilisateurs mentionné est dans le staff du bot**")
  //  .addField ("<:en_ligne:576662449734811659>``g!inv``\ **Vous permet de générer une invitation permanente! **\n<:en_ligne:576662449734811659>``g!avatar``\ **Vous donne la photo de profil de la personne mentionné !**")
  //  .addField ("<:en_ligne:576662449734811659>``g!uptime``\ **Voir depuis quand le bot ne c'est pas redémarré**\n<:en_ligne:576662449734811659>``g!ping``\ **Regarder le ping du bot**")
    //.addField ("<:en_ligne:576662449734811659>``g!setup``\ **Vous permet de voir comment construire votre serveur**\n<:en_ligne:576662449734811659>``g!view``\ **Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes !**")
    //.addField ("<:en_ligne:576662449734811659>``g!contact``\**faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**", true);

  //const helpmp = message.author.send({embed})
//message.channel.send(":white_check_mark: La page D'aide ta été envoyé en mp !")
   // message.channel.send({embed})
//message.channel.send ({embed220})
   // message.channel.send ({embed})
 // }
if (message.content.startsWith(":")) {
if(message.channel.id === "576842402459811863") {
message.react("🔻");
message.react("🔺");
}
}
  if (command === "setup") {
const embed = new Discord.RichEmbed()
.setColor ("RANDOM")
.setTitle("Bonjour, Je m'appelle **Discord créateur** je suis là pour configurer votre serveur en 1 commandes!")
.setDescription("Quand le bot est sur votre serveur, executer une des commandes du panel ``g!help`` (cooldown de 2 minutes par serveur) ")
.addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
message.channel.send({embed})
  }
  if (command === "reglement") {
		if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandé");
		message.channel.send("**__Règlement du serveur | " + message.guild.name + "__**\n\nVoici le règlement du serveur :\n\n:clipboard:Si une des règles n'est pas respectée par un membre, une sanction sera appliquée.\n\n:no_entry: Interdictions:\n\n• Lien innaproprié : Kick, Ban si récidive\n\n• Spam auditif : Mute\n\n• Pub sur le discord ou en mp en dehors des salons appropriés : Ban de 1 mois\n\n• Diffamation : Ban\n• Flood ou spam : Ban\n\n• Insultes : Kick, Ban si récidive\n\n• Pseudos Inappropriés : Demande de changement\n\n• Usurpation d'identité d'un staff : Ban\n\n• Provocation : Mute, puis Ban\n\n• Utilisation de ``@everyone / @here`` : Ban\n\n• Utilisation d'emotes/réactions inapropriées : Mute, puis Ban");
	await message.react("✅");
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("règlement générer")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
}	
	if(command === "invite") {
		message.delete()
		const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
	.addField ("Rejoindre le support :","<a:la:576804659528990751>[Rejoindre Le support](https://discord.gg/2Pabk6p)")
    .addField ("Ajouter le bot :","<a:la:576804659528990751> [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=520322405982535705&scope=bot&permissions=2146958847)");
        message.channel.send({embed})
	}
  if (command === "count") {
		if(message.author.id === "516274923828805667") {
message.delete ()
const embed = new Discord.RichEmbed()
.addField("Le bot possède : " +client.users.size +"\``Utilisateurs``","Ainsi que : " + client.guilds.size + "\``Serveurs``")
.setTimestamp();
message.channel.send({embed}).then (async msg => {
setInterval(() => {
        const embed = new Discord.RichEmbed()
.addField("Le bot possède : " +client.users.size +"\``Utilisateurs``","Ainsi que : " + client.guilds.size + "\``Serveurs``")
.setTimestamp();
msg.edit ({embed})
        }, 1*20000);
})
 } else {
	  message.channel.send("<a:non:)76666508571312138> Accès insuffisant");
  }	
}
  if(command === "deleteserv") {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande.")
message.guild.channels.forEach(c => {
    c.delete()
    })
    message.guild.roles.forEach (r => {
      r.delete ()
    })
  var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Deleteserv executer ")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
message.author.send("🔰Le serveur a été supprimé en entier !")
  }
  if (command === "avatar") {
    if(message.mentions.users.size === 0)
			return message.channel.send("Vous vouliez voir la photo de profil de quelqu'un mais vous ne l'avez pas mentionné!! **Recommencer!!**")
    const toi = message.mentions.users.first();
const embed = new Discord.RichEmbed()
//.setImage(message.author.avatarURL)
.setImage(message.mentions.users.first ().avatarURL);
message.channel.send ({embed})
  }
  if (command === "testad") {
    message.channel.send ("test1").then (m => {
      message.react ("white_check_mark:").then (m => {
m.edit ("nom de l'embed qui est en lien avec l'emoji")
})
  })
  }
if (command === "notif") {
  if(message.guild.id === "576435925794422794") {
  var toi = message.member
  
  toi.addRole (`584305495771185162`)
  message.channel.send ("Role Ajouter avec succès! ")
  }
}
  if (command === "nonotif") {
    if (message.guild.id === "576435925794422794"){
      var toi = message.member
      toi.removeRole (`584305495771185162`)
      message.channel.send ("Role retiré avec succès! ")
    }
  }
  if(command === "say") {
    message.delete ()
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
			return message.channel.send("<a:non:576666508571312138> | Vous n'avez pas accès à cette commande !");
		var amsg = message.content;
		// supprime le premier mot de la chaine (string) donc "!pub machin" va supprimer pub
		var msg = amsg.substr(amsg.indexOf(" ") + 1);
   var reason = msg;
let args = message.content.split(" ").slice(1);
   if (!args [0] || args [0] < 0 ) return message.channel.send("pas bien de rien mettre")
message.channel.send (`${reason}`)
}
  if (command === "si") {
    var sale = message.guild.members.filter(m =>  ! m.user.bot).size
     var sale2 = message.guild.members.filter (m => m.user.bot).size
      const embed = new Discord.RichEmbed()
      .setColor ("#d11000")
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .addField("🔱 | Créateur du serveur :", message.guild.owner)
      .addField("📅 | Crée depuis le :", message.guild.createdAt)
      .addField ("🌎 | La région est :", message.guild.region)
      .addField ("👪 | Nombre de membres :", message.guild.memberCount)
      .addField ("♨ | Nombre de salon :", message.guild.channels.size)
      .addField ("🔨 | Nombre de Bot :", sale2)
      .addField ("👪 | Nombre d'humain", sale)
      .setThumbnail(message.guild.iconURL)
      message.channel.send ({embed})
    var test = client.channels.find(`id`, "583693815190126592");
    let embed220 = new Discord.RichEmbed()
    .setTitle("Serveur info ")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed220})
  
      }
  if(command === "lock") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔒 Salon verrouillé`,`**Le salon a été verrouillé par ${message.author}**`)
      
    message.channel.send(lock)
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Lock Channel")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
    }
  if(command === "unlock") {
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Vous n'avez pas les permissions, `MANAGE_CHANNELS`❌**")
    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    });
    let lock = new Discord.RichEmbed()
    .addField(`🔓 Salon déverrouillé `,`**Le salon a été déverouillé par ${message.author}**`)
      
    message.channel.send(lock)
    var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle("Unlock Channel")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
    }
  if (command === `new`) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`Ce serveur ne possède pas de rôle \`Support Team\` Le ticket ne peux donc pas être créé, Contacté un administrateur pour qu'ilcréele rôle avec le nom Exact !`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`Vous êtes déjà en possession d'un ticket `)
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
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
        message.channel.send(`<:okay:578974520199741472> Votre ticket à bien été créé  ${c}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Bonjour ${message.author.username}!`, `Merci d'expliquer avec le plus de précisions votre problème puis patientez qu'un **Support Team** viennent vous aider`)
        .setTimestamp()
        .setFooter (prefix+`close pour fermer`);
        c.send({ embed: embed });
    }).catch(console.error);
}
if (command === `close`) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous pouvez utiliser cette commande uniquement sur votre ticket !`);

    message.channel.send(`Vous êtes sûr ? Vous ne pourrez pas revenir en arrière ! Pour confirmer taper ` + prefix+`confirm (vous avez 20 seconds)`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === prefix +'confirm', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Vous n\'avez pas confirmer la fermeture du ticket').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
  if(command === "help") {
 
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Voir les commandes de modération "
        }, {
            name: ":family: | Utilisateurs",
            value: "Voir les commandes Utilisateurs "
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Voir les commandes de création de serveur"
          }, {
            name: "⛔| Fermer l'aide",
value: "Vous ne pourrez plus naviguez dans l'aide cependant le message sera encore présent !"
       }, {
name: "Les balises :",
value: "<:offline:576662534585712640> = commande indisponible\n <:en_ligne:576662449734811659> = Commande disponible"
	  }], 
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
    }});  
    await base.react('🔨');
    await base.react('👪');
    await base.react('🔩');
    await base.react ('🔐');
   await base.react('⛔');
await base.react('🏠');
 
    const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);
       
        collector.on('collect', async(reaction) => {
       setTimeout (() => {
         collector.stop ();
       }, 30000);
        if (reaction.emoji.name === "🔨") {
 
            base.edit({ embed: {
              color: 0xFF0000,
                fields: [{
                    name: "Le placard de la modération",
                    value: "**<:en_ligne:576662449734811659>``g!lock``\ Interdit au rôle everyone de parler sur le salon\n<:en_ligne:576662449734811659>``g!unlock``\ Autorise de nouveaux au role everyone de parler\n<:en_ligne:576662449734811659>``g!say``\ Fait parler le bot à votre place\n<:en_ligne:576662449734811659>```g!slowmode``\ Mettre un slowmode (mettre 0 pour désactiver)\n<:en_ligne:576662449734811659>``g!deleteserv``\ Détruit tout les salons de votre serveur (nous ne sommes pas responsable d'un mauvais usage de votre part)\n<:en_ligne:576662449734811659>``g!eval``\ Réservé à l'owner du bot\n<:en_ligne:576662449734811659>``g!kick``\ Exclut le membre mentionner\n<:en_ligne:576662449734811659>``g!ban``\ Bannis le membre mentionner\n<:en_ligne:576662449734811659>``g!reglement``vous fait un jolie règlement pré-definis**"
                }]
            }})
 
          //  collector.stop();
           
        };
 
        if (reaction.emoji.name === "👪") {
 
            base.edit({ embed: {
              color: 0xFF0000,
                title: "Le placard de l'utilisateurs",
              description: "<:en_ligne:576662449734811659>``g!new``\ **Créé un ticket de support\n<:en_ligne:576662449734811659>``g!verif``\ Vous permet de verifier si l'utilisateur mentionné est dans le staff du bot\n<:en_ligne:576662449734811659>``g!gen``\ Vous permet de générer une invitation permanente!\n <:en_ligne:576662449734811659>``g!avatar``\ Vous donne la photo de profil de la personne mentionné !\n <:en_ligne:576662449734811659>``g!uptime``\ Voir depuis quand le bot ne c'est pas redémarré\n<:en_ligne:576662449734811659>``g!ping``\ Regarder le ping du bot\n<:en_ligne:576662449734811659>``g!setup``\ Vous permet de voir comment construire votre serveur\n<:en_ligne:576662449734811659>``g!view``\ Vous permet d'avoir la liste de 5 serveurs qui sont là pour exemple des commandes\n<:en_ligne:576662449734811659>``g!contact``\ faire un report ou autre en contactant un administrateur rapidemment (réponse sous 24h)**"
 
        }})
 
        //collector.stop();
    }
 
    if (reaction.emoji.name === "🔩") {
 
        base.edit({ embed : {
          color: 0xFF0000,
            fields: [{
                name: "Communautaire :",
                value: "<:en_ligne:576662449734811659>``g!commu``**\ Crée votre serveur sous le thème de la communauté**"
            }, {
                name : "Basique :",
                value: "<:en_ligne:576662449734811659>``g!salon``\ **Création de votre serveur sous le thème global**"
            }, {
                name : "Publicitaire :",
                value: "<:en_ligne:576662449734811659>``g!pub``\ **Crée un serveur sous le thème Publicitaire**\n<:en_ligne:576662449734811659>``g!p-2``\ **Crée un serveur sous le thème Publicitaire 2**"
            }, {
                name: "Uniquement les rôles",
                value: "<:offline:576662534585712640>``g!role``\ **Création des roles uniquement**"
            }]
            }})
}
          if (reaction.emoji.name === "🔐") {
            
            base.edit ({ embed : {
              color: 0xF0000,
              title: "Les commandes De Protection",
              description: "<:en_ligne:576662449734811659>``g!verif-on``\ **Vous permet D'activer une protection  (vérification à l'arrivée) sur votre serveur**\n <:en_ligne:576662449734811659>``g!v-ok``\ **Permet de passez la vérification**\n ",
            }})
          }
          if(reaction.emoji.name === "⛔") {
          base.clearReactions();
          }
          if(reaction.emoji.name === "🏠") {
       
           base.edit ({ embed : {
             
             color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez la catégorie que vous souhaitez voir :`,
        fields : [{
            name: "🔨 | Modération",
            value: "Voir les commandes de modération "
        }, {
            name: ":family: | Utilisateurs",
            value: "Voir les commandes Utilisateurs "
        }, {
            name: ":nut_and_bolt: | Commande pour la création des serveurs",
            value: "Voir les commandes de création de serveur"
          }, {
            name: "⛔| Fermer l'aide",
value: "Vous ne pourrez plus naviguez dans l'aide cependant le message sera encore présent !"
        }, {
name: "Les balises :",
value: "<:offline:576662534585712640> = commande indisponible\n <:en_ligne:576662449734811659> = Commande disponible"
	  }], 
        footer: {
            text: "⚠ Vous avez 30 secondes ⚠",
        }
                 }})
          }
          
})
 };

            
  if(command === "v-ok") {
         let role = message.guild.roles.find("name", "Membres Vérifié");

if (message.channel.name === "🚫vérification🚫") {
    const base = await message.channel.send({embed: {
        color: 3447003,
        title: `:chart_with_upwards_trend: Choisissez votre rôle :`,
        fields : [{
            name: ":white_check_mark:",
            value: "Tu veux entrez alors appuie sur la réaction !"
        }],
        footer: {
            text: "⚠ Tu a 2 minutes à partir de quand tu ajoute la réaction!  ⚠",
        }
    }})
    await base.react ("🔨");
      const collector = base.createReactionCollector((reaction, user) => user.id);
       
        collector.on('collect', async(reaction) => {
        if (reaction.emoji.name === "🔨") {
          collector.stop ();
          setTimeout (() => {
            base.delete ();
            message.channel.bulkDelete (5);
          }, 120000);
  var serv = message.guild.id
  message.channel.send("Merci de notez ci-dessous :\ " + serv).then((m) => {
      message.channel.awaitMessages(response => response.content === `${serv}`, {
        max: 1,
        time: 120000,
        errors: ['time'],
      })
      .then((collected) => {
        var test = client.channels.find(`id`, "583693815190126592");
       const embed = new Discord.RichEmbed()
        .addField ("Verification passé", message.author.username)
       .addField ("Du serveur :", message.guild.name)
   test.send(embed)
    message.member.addRole(role);
        })
        .catch(() => {
          m.edit('Vous n\'avez pas confirmer le code').then(m => {
              m.delete ()
            message.channel.bulkDelete(5);
            message.member.send ("Vous venez de vous faire kick de\ " + message.guild.name +"\ Car vous n'avez pas Compléter  vérification")
            message.member.kick ();
            var test = client.channels.find(`id`, "583693815190126592");
    const embed = new Discord.RichEmbed()
    .setTitle ("Vérification Refusée")
    .addField ("Du serveur :", message.guild.name)
    .addField ("Par : ", message.author.username + "#" + message.author.discriminator )
  .addField ("Du salon :", "#" + message.channel.name)
    .setTimestamp();
      test.send({embed})
  
            
          }, 10000);
        });
    });
        }
        });
   };
   }

  if (command === "verif-on") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:non:576666508571312138>Tu ne peux pas executer la commande demandée");
          if (message.guild.channels.exists("name", "🚫vérification🚫")) return message.channel.send(`Ce serveur possède déjà la vérification`);

    if (message.guild.roles.exists("name", "Membres Vérifié")) return message.channel.send(`Ce serveur possède le rôle Membres Validé`);
    message.guild.createRole({
                  name: "Membres Vérifié",
                    color: "#ffe200",
                    permissions: ["VIEW_CHANNEL"]
     })    
		
	message.guild.createChannel(`🚫vérification🚫`, "text").then(c => {
        let role = message.guild.roles.find("name", "Membres Vérifié");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false,
            MENTION_EVERYONE: false
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
            MENTION_EVERYONE: false
   });
})
    message.channel.send("Il ne vous reste plus qu'à configurer tout vos salons sauf le salon vérification !")
  }
});
client.login(process.env.BOT_TOKEN)

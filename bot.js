const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&";
var dev_id = ['516274923828805667'];
var modo_id = ['516274923828805667','345951306055417857'];
var help_id = ['382575635014483968','516274923828805667','447719995539980308']
client.on('ready', () => {
client.user.setStatus('idle')
  .then(console.log)
  .catch(console.error);
});
client.on('ready', () => {
	const activity = [`${client.users.size} Utilisateurs`,`${client.guilds.size} Serveurs`,`taper &help !`];
	let messageACTIVITY = activity[Math.floor(Math.random() * activity.length)];
	console.log('Je suis pret !');
	console.log("Connexion en cours ...");
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`${messageACTIVITY}`);
	setInterval(() => {
		messageACTIVITY = activity[Math.floor(Math.random() * activity.length)];
		client.user.setActivity(`${messageACTIVITY}`);
	}, 60000);
});
client.on('guildMemberRemove', member => {
	 const channel = member.guild.channels.find(ch => ch.name === 'départ-arrivé');
	if(!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor("#3ad729")
    .addField("Au revoir", `${member}`)
    .setTitle(":outbox_tray: Une personne est partie, reviendra-t-elle ?:outbox_tray:");
	channel.send({embed})
});
client.on('guildMemberAdd', member => {
	
  const channel = member.guild.channels.find(ch => ch.name === 'départ-arrivé');
	if (!channel)return;
    const embed = new Discord.RichEmbed()
    .setColor("#3ad729")
    .addField("Bienvenue", `${member}`)
    .setTitle(":inbox_tray: Bienvenue sur le serveur :inbox_tray:");
	channel.send({embed})
});
client.on(`message`, message =>{
	const args = message.content.slice(prefix.length).trim().split(/ +/g);

	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
		}
	if(message.content.startsWith(prefix + "invite")) {
			message.delete()
		const embed = new Discord.RichEmbed()		
			.setColor(0x954D23)
			.setTitle("Invitation :")
			.addField("Voici l'email :","gaetanoverbot@gmail.com")
			.addField("Voici le lien pour m'inviter","https://discordapp.com/api/oauth2/authorize?client_id=520322405982535705&permissions=8&scope=bot");
		message.channel.send({embed});
} else  if(message.content.startsWith(prefix  + "help")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setColor(`#1794ef`)
    .setTitle(`::scroll: Liste des commandes de OverBot : ::scroll: `)
    .addField(":speaking_head: Commandes pour les utilisateurs ::speaking_head: ","`vote` `help` `invite` `infoserv` `report` `support` `site` `stats` `idrole` `anti-raid`")
    .addBlankField()
    .addField(":hammer_pick: Commandes de Modération ::hammer_pick: ","`poll` `embed` `say` `mute` `unmute` `kick` `ban` `clear`")
    .addBlankField()
    .addField(":paperclips: Commande Des utilisateurs disponible uniquement sur le support ::paperclips: ","`Notif` `Delnotif`")
    .addBlankField()
    .addField(":oncoming_police_car: Commande disponnible Uniquement aux Modérateur du bot ! ::oncoming_police_car: ","```patch\n quit```");
    message.channel.send({embed})
}
	if(message.content.startsWith(prefix + "kick")) {
		if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`);
		member.kick();
	} else if(message.content.startsWith(prefix + "ban")) {
		if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
			return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
		if(message.mentions.users.size === 0)
			return message.channel.send("Vous avez oublié de mention la personne à exclure !");
		const member = message.mentions.members.first();
		message.channel.send(`${message.mentions.users.first()} à été banni par ${message.author.username}`);
		member.ban();
	} else if (message.content.startsWith(prefix + `poll`)) {
		if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
            return message.channel.send("Vous n'avez pas accès à cette commande, il vous faut l'accès KICK_MEMBERS!");
		const poll = message.content.substring(5);
		if (poll.size === 0)
			return message.reply("Vous n'avez pas mis de question");
		message.delete();
		const pollembed = new Discord.RichEmbed()
			.setTitle("Sondage")
			.setColor("#5599ff")
			.setFooter(`Sondage de ${message.author.username}`, `${message.author.avatarURL}`)
			.setDescription(`${poll}`)
		message.channel.sendMessage(pollembed)
		.then(async function (message) {
			await message.react("✅")
			await message.react("❌")
			await message.react("🤷")
		});
	} else if(message.content.startsWith(prefix + `quit`) && modo_id.indexOf(message.author.id) != -1) {
		message.delete();
		message.channel.send('Je dois quitter sous l\'ordre des modérateur du bot!');
    		message.guild.leave()
    			.then(g => console.log(`A quitté la guild: ${g}`))
     			.catch(console.error); 
} else if(message.content.startsWith(prefix + `infoserv`)) {
        message.delete()
        const count = new Discord.RichEmbed()
        .setColor(0x954D23)
        .setTitle("**Information du serveur **")
    .addField("Nom du serveur", message.guild.name)
        .addField("Date de création du serveur",  message.guild.createdAt)
    .addField("Vous avez rejoint le serveur",  message.member.joinedAt)
        .addField("Total des membres :",  message.guild.memberCount);
        return message.channel.send(count)
    }
	if(message.content.startsWith(prefix + `patch`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete()
    const embed = new Discord.RichEmbed()        
     .setColor(0x954D23)        
     .setTitle("**Les Mise à jour du bot :**")
     .setDescription('Mise à jour du 19/03/19 00h40m39')
     .addField("Note de la mise a jour :","Rajout de commandes || ``Catégorie modo : &embed`` **|** ``catégorie user : &idrole, &infoserv &Delnotif &Notif`` **|** ``catégorie Admin : &op &deop &dev &undev &aide &delaide``")
     .addField("Mise à jour du 19/03/19","Le bot passe aujourd'hui en v1.5.0")
     .addField("mention",`${message.mentions.roles.first()}`)
     .setFooter("OverBot crée par ⏳Gaétan#2852");
     message.channel.send({embed})
}
	
	if(message.content.startsWith(prefix + `report`)) {
    message.delete()
if(message.size === 0)
return message.channel.send("Vous avez oublié de dire un message");

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas l'utilisateur");
    let rreason = args.join(" ").slice(28);
    message.channel.send(`${rUser} à bien été signalé !`)
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Signalement")
    .setColor("#15f153")
    .addField("Signalement de l'utilisateur :", `${rUser} With ID  : ${rUser.id}`)
    .addField("Signalé par", `${message.author} With ID : ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Date et Heure", message.createdAt)
    .addField("Raison", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("je ne trouve pas le salon de report, crée en un qui s'appel  #reports");
reportschannel.send(reportEmbed);
	}
if(message.content.startsWith(prefix + `suggest`)) {
let rrsuggest = args.join(" ").slice(7);
message.delete()

    const Embed = new Discord.RichEmbed()
    .setDescription("Suggestion")
    .setColor("#15f153")
    .addField("Suggestion faite par", `${message.author}`)
    .addField("Date et Heure", message.createdAt)
    .addField("Suggestion :", rrsuggest);
    
    let suggestchannel = message.guild.channels.find(`name`, "suggestion");
    if(!suggestchannel) return message.channel.send("Je ne trouve pas le salon de suggestion merci de le crée en l'appelant #suggestion")
    suggestchannel.send(Embed);
     return;
  } else if(message.content.startsWith(prefix + `op`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete() 
		message.member.addRole('511234383496085525')
  .then(console.log)
  .catch(console.error);
  }
if(message.content.startsWith(prefix + `deop`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.removeRole('511234383496085525')
  .then(console.log)
  .catch(console.error);
  }
if(message.content.startsWith(prefix + `undev`) && dev_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.removeRole('511234235525234688')
  .then(console.log)
  .catch(console.error);
  }
  if(message.content.startsWith(prefix + `dev`) && dev_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.addRole('511234235525234688')
  .then(console.log)
  .catch(console.error);
}
 if(message.content.startsWith(prefix + `Notif`)) {
    message.delete()
      message.reply("Vous avez bien reçu le rôle de Notification")
    message.member.addRole(`554797816963399691`);
   }
if(message.content.startsWith(prefix + `embed`)) {
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
                return message.channel.send("Vous n'avez pas accès");
        let m = args.slice(1).join(' ');
        message.delete(100);
        const embed = new Discord.RichEmbed()
        .setColor(`0x954D23`)
        .setTitle("say Embed")
        .setDescription(`${m}`)
        .setFooter("OverBot crée par ⏳Gaétan#2852");
        message.channel.send(embed)
        } else if(message.content.startsWith(prefix + `idrole`)) {
        message.delete()
        let rolemention = message.mentions.roles.first()
	let rolementionid = message.mentions.roles.first().id
	let embed = new Discord.RichEmbed()
	.setTitle('Information du rôle mentioné :')
	.addField('Le nom du rôle est :', rolemention)
        .addField("Et l'id du rôle est :", rolementionid)
	message.channel.send(embed)
} else if(message.content.startsWith(prefix + `aide`) && help_id.indexOf(message.author.id) != -1) {
    message.delete()
    message.member.addRole(`511233194780262432`);
    } else if(message.content.startsWith(prefix + `delaide`) && help_id.indexOf(message.author.id) != -1) {
    message.delete()
    message.member.removeRole(`511233194780262432`);
} else if(message.content.startsWith(prefix + `vote`)) { 
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor(`#1a1aef`)
  .setTitle(`Voici le lien pour vous permettre de voter OverBot`)
  .setDescription(`https://discordbots.org/bot/520322405982535705`);
message.channel.send({embed})
  } if(message.content.startsWith(prefix + `Notif`)) {
    message.delete()
    message.member.addRole(`554797816963399691`);
   } else if(message.content.startsWith(prefix + `Delnotif`)) {
	   message.reply("Le rôle Notification vous à bien été retiré !")
    message.delete()
    message.member.removeRole(`554797816963399691`);
   }	
	if(message.content.startsWith(prefix + "mute")) {
		message.delete()
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't the right to do this");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        let membre = message.guild.member(message.mentions.users.first());
        if(!membre) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
      let mute = message.guild.roles.find("name", "Muted");
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
       
            membre.addRole(mute)
            message.channel.send(`${membre.user.username} à bien été muté par : ${message.author.username} !`);
    }
	if(message.content.startsWith(prefix + "unmute")) {
		message.delete()
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("You don't the right to do this");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        let membre = message.guild.member(message.mentions.users.first());
        if(!membre) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
      let mute = message.guild.roles.find("name", "Muted");
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
            membre.removeRole(mute)
            message.channel.send(`${membre.user.username}à bien été démuter par : ${message.author.username} !`);
    }
	if(message.content.startsWith(prefix + "support")) {
const embed = new Discord.RichEmbed()        
            .setColor(0x954D23)
            .setTitle("Invitation Support :")
.addField("Support OverBot :","https://www.invite.gg/OverBot");
message.channel.send({embed})
}
if(message.content.startsWith(prefix + "site")) {
        message.delete()
        const embed = new Discord.RichEmbed()
        .setColor("#2e1fe6")
        .setTitle("Voici le site web de OverBot")
        .addField("Site web :","https://overbot.webnode.fr/")
        .setFooter("OverBot crée par ⏳Gaétan#2852");
         message.channel.send({embed})
    }
	if(message.content.startsWith(prefix + "clear")) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
        message.channel.send ("J'ai supprimé " + count + " message(s) :white_check_mark:");
		message.delete(20)
	}
if(message.content.startsWith(prefix + "reboot") && dev_id.indexOf(message.author.id) != -1) {
    message.delete()
	 client.user.setStatus('invisible')
	message.reply("je me reconnecte")
    message.delete()
	client.user.setStatus(`idle`);
}
if(message.content.startsWith(prefix + "stats")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setColor("#2e1fe6")
    .setTitle("Statistiques")
    .addField("Nombre de serveur :", client.guilds.size)
    .addField("Nombre d'utilisateurs :", client.users.size);
    message.channel.send({embed})
}
	if(message.content.startsWith(prefix + "anti-raid")) {
        message.delete()
    const embed = new Discord.RichEmbed()
    .setColor("#2e1fe6")
    .setTitle("Serveur anti-raid")
    .addField("Armin Support","https://discord.gg/Z3zXabV");
    message.channel.send({embed})
    }
	if(message.content.startsWith(prefix + "ping")){
  	message.reply(`La latence des messages est de : ${message.createdTimestamp - message.createdTimestamp}ms.`);
  	return;
    }
});
client.login(process.env.BOT_TOKEN)

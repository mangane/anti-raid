const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&";
var dev_id = ['516274923828805667'];
var modo_id = ['516274923828805667','345951306055417857','390574128890904579'];
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
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'Bienvenue');
  if (!channel) return;
  channel.send(`Bienvenue ${member}`);
});
client.on(`message`, message =>{
	const args = message.content.slice(prefix.length).trim().split(/ +/g);

	if (message.content.startsWith(prefix + 'say')) {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Et ben non, je crois bien que tu n'a pas les permissions d'utiliser cette commande :x:");
        let m = args.slice(1).join(' ');
        message.delete(100);
        message.channel.send(`${m}`);
	} else if(message.content.startsWith(prefix + "mute")) {
		if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
			return message.channel.send("Vous n'avez pas accès à cette commande");
			if(message.mentions.users.size === 0) {
				return message.channel.send("Vous n'avez pas mentionner de personne");
			}

			var mute = message.guild.member(message.mentions.users.first());
			if(!mute) {
				return message.channel.send("l'utilisateur n'existent pas !");
			}

			if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
				return message.channel.send("I don't the right to do this");
			message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
				message.channel.send(`${mute.user.username} has been muted by ${message.author.username} !`);
			});
			message.delete();
	} else if(message.content.startsWith(prefix + "unmute")) {
		if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
			return message.channel.send("Vous n'avez pas accès à cette commande");
			if(message.mentions.users.size === 0) {
				return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
			}

			var umute = message.guild.member(message.mentions.users.first());
			if(!umute) {
				return message.channel.send("l'utilisateur n'existent pas !");
			}
			if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
				return message.channel.send("I don't the right to do this");
			message.channel.overwritePermissions(umute, { SEND_MESSAGES: true}).then(member => {
				message.channel.send(`${umute.user.username} has been unmuted by ${message.author.username} !`);
			});
			message.delete();
	} else if (message.content.startsWith(prefix + "invite")) {
		const embed = new Discord.RichEmbed()		
			.setColor(0x954D23)
			.setTitle("Invitation :")
			.addField("Voici le site web","https://manganeg21.wixsite.com/overbot/")
			.addField("Voici l'email :","zncznc47@gmail.com")
			.addField("Voici le lien pour m'inviter","https://discordapp.com/api/oauth2/authorize?client_id=520322405982535705&permissions=8&scope=bot");
		message.channel.send({embed});
} else if (message.content.startsWith(prefix + "help")) {
            message.delete()
            const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setTitle(":scroll: Liste des commandes ::scroll: ")
                .addField("&user","vous permet de voir les commandes utilisateurs")
                .addField("&modo","Vous permet de voir les commandes de moderation")
                .addField("&admin","Vous permet de voir les commandes des modérateur du bot")
                .setFooter("OverBot crée par ⏳Gaétan#2852");
                message.channel.send({embed})
        }
                    if(message.content.startsWith(prefix + `user`)) {
                    const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setDescription(":100:**Commandes pour les Utilisateurs**:100:")
                .addField("&poll","Vous permet de faire un sondage")
                .addField("&help", "Affiche les commandes")
                .addField("&invite", "Donne le lien pour me faire joindre votre serveur")
                .addField('&infoserv', 'Permet de donner des infos sur son serveur')
                .addField("&infoserv","Commande qui vous donne les informations du serveur sur le quelle la commande est exécuter ")
                .addField("&report","Permet de report une personne (il faut un salon spécial nommer #reports")
		.setFooter("OverBot crée par ⏳Gaétan#2852");
                message.channel.send({embed})
                }
                if(message.content.startsWith(prefix + `modo`)) {
                message.delete()    
                const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setDescription(":hammer_pick: Les commandes de Modération :hammer_pick: :")
                .addField("&say", "Faire parler le bot")
                .addField("&mute [Mention]", "Permer d'interdire à un membre de parler")
                .addField("&unmute[Mention]", "Retire l'interdiction de parler")
                .addField("&kick [Mention]","Exclure un membre du serveur")
                message.channel.send({embed})
                }
                if(message.content.startsWith(prefix + `admin`)) {
                message.delete()    
                const embed= new Discord.RichEmbed()
                .setColor(0x954D23)
                 .setDescription(":oncoming_police_car:  Les commandes des modérateurs du bot :oncoming_police_car:  :")
                 .addField("&quit","Commande qui fait partir le bot du serveur d'ou l& commande est exécuter en cas de soucis réservé au modérateur du bot")
                 .addField("&patch","Permet de voir les patch ou le mise à jours du bot réservé au modérateur du bot")
                 
                 .setFooter("OverBot crée par ⏳Gaétan#2852");
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
     .addField("Mise à jour du 13/03/19 :","Suite à la demande de plusieurs utilisateurs, le statu du bot est maintenant : joue à taper &help +nombre de serveurs")
     .addField("Commande retiré :","La commande &ping à été retiré pour une courte durée (elle reviendra normalement à la prochaine mise à jour")
     .addField("Mise à jour du 15/03/19","deux commandes ont été rajouter, la commande &sondage, la commande &say")
     .addField("Mise à jour du 16/03/19","Le bot passe en ce beau jour à la V1")
     .addField("mention",`${message.mentions.roles.first()}`)
     .setFooter("OverBot crée par ⏳Gaétan#2852");
     message.channel.send({embed})
}
	
	if(message.content.startsWith(prefix + `report`)) {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas l'utilisateur");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Signalement")
    .setColor("#15f153")
    .addField("Signalement de l'utilisateur :", `${rUser} with ID: ${rUser.id}`)
    .addField("Signalement par", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Raison", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("je ne trouve pas le salon de report, crée en un qui s'appel  #reports");
reportschannel.send(reportEmbed);
	}
	if(message.content.startsWith(prefix + `suggest`)) {
    let suggestchannel = message.guild.channels.find(`name`, "suggestion");
    if(!suggestchannel) return message.channel.send("Je ne trouve pas le salon de suggestion merci de le crée en l'appelant #suggestion")
    suggestchannel.send(args.join(" "));
     return;
  }
	if(message.content.startsWith(prefix + `op`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete() 
		message.member.addRole('511234383496085525')
  .then(console.log)
  .catch(console.error);
  }
  if(message.content.startsWith(prefix + `deop`) && dev_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.removeRole('511234383496085525')
  .then(console.log)
  .catch(console.error);
  }
  if(message.content.startsWith(prefix + `undev`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.removeRole('556911777405992971')
  .then(console.log)
  .catch(console.error);
  }
  if(message.content.startsWith(prefix + `dev`) && modo_id.indexOf(message.author.id) != -1) {
    message.delete()
message.member.addRole('556911777405992971')
  .then(console.log)
  .catch(console.error);
  } else if(message.content.startsWith(prefix + `Notif`)) {
    message.delete()
    message.member.author.addrole(`554797816963399691`);
   
if(message.content.startsWith(prefix + `embed`)) {
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
                return message.channel.send("Vous n'avez pas accès");
        let m = args.slice(1).join(' ');
        message.delete(100);
        const embed = new Discord.RichEmbed()
        .setColor(`0x954D23`)
        .setTitle("say Embed")
        .setDescription(`${m}`)
        .setFooter("OverBot crée par ⏳Gaétan#2852");
        message.channel.send({emebed})
        }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)

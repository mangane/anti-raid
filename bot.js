const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&";
var modo_id = ['516274923828805667','345951306055417857'];
client.on('ready', () => {
client.user.setStatus('dnd')
 .then(console.log)
 .catch(console.error);
  setStatus('dnd') {
    return this.setPresence({ status });
  }
});
client.on('ready', () => {
	const activity = [`${client.users.size} Utilisateurs`,`${client.guilds.size} Serveurs`,`taper &help !`];
	let messageACTIVITY = activity[Math.floor(Math.random() * activity.length)];
	console.log('I am ready!');
	console.log("Connexion en cours ...");
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`${messageACTIVITY}`);
	setInterval(() => {
		messageACTIVITY = activity[Math.floor(Math.random() * activity.length)];
		client.user.setActivity(`${messageACTIVITY}`);
	}, 60000);
});

client.on(`message`, message =>{
	const args = message.content.slice(prefix.length).trim().split(/ +/g);

	if (message.content.startsWith(prefix + 'say')) {
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
	} else if (message.content.startsWith(prefix + "info")) {
		const embed = new Discord.RichEmbed()
			.setColor(0x954D23)
			.setTitle("Disponibilité du bot :")
			.addField("commande en création","a");
		message.channel.send({embed});
	} else if (message.content.startsWith(prefix + "invite")) {
		const embed = new Discord.RichEmbed()		
			.setColor(0x954D23)
			.setTitle("Invitation :")
			.addField("Voici le site web","https://manganeg21.wixsite.com/overbot/")
			.addField("Voici l'email :","zncznc47@gmail.com")
			.addField("Voici le lien pour m'inviter","https://discordapp.com/api/oauth2/authorize?client_id=520322405982535705&permissions=8&scope=bot");
		message.channel.send({embed});
	} else if (message.content.startsWith(prefix + "help")) {
		const embed = new Discord.RichEmbed()
			.setColor(0x954D23)
			.setTitle("Liste des commandes :")
			.addField("&help", "Affiche les commandes")
			.addField("&say", "Faire parler le bot")
			.addField("&info", "Donne des informations sur le bot")
			.addField("&invite", "Donne le lien pour me faire joindre votre serveur")
			.addField("&mute [Mention]", "Permer d'interdire à un membre de parler")
			.addField("&unmute[Mention]", "Retire l'interdiction de parler")
			.addField("&kick [Mention]","Exclure un membre du serveur")
			.addField("&sondage","Vous permet de faire un sondage")
		        .addField("&quit","Commande réservé au Modérateur du bot")
			.setFooter("OverBot crée par ⏳Gaétan#2852");
		message.channel.send({embed});
	} else if(message.content.startsWith(prefix + "kick")) {
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
	} else if (message.content.startsWith(prefix + `sondage`)) {
		message.channel.send("Commande en cours");
		/*
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
		});*/
	} else if(message.content.startsWith(prefix + `quit`) && modo_id.indexOf(message.author.id) != -1) {
		message.delete();
		message.channel.send('Je dois quitter sous l\'ordre des modérateur du bot!');
    		message.guild.leave()
    			.then(g => console.log(`Left the guild ${g}`))
     			.catch(console.error); 
  }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


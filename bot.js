const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("ready", () => {
    console.log("Connexion en cours ...");
});

client.on(`message`, message =>{
    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous n'avez pas mentionner de personne");
        }
    
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("l'utilisateur n'existent pas !");
        }
    
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} has been muted by ${message.author.username} !`);
        })
        message.delete()
    }
    
    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("l'utilisateur n'existent pas !");
        }
    
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} has been unmuted by ${message.author.username} !`);
        })
        message.delete()
    }
     if (message.content.startsWith(prefix + "info")) {		
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Disponibilité du bot :")		 
     .addField("La disponibilité du bot est de 100℅");
     message.channel.send({embed})
    }
     if(message.content.startsWith("fdp")) {
         message.delete()
         return message.channel.send("Dis donc tu aime insulter ?");
     }
     if (message.content.startsWith(prefix + "invite")) {		
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Invitation :")		  addField("Voici le lien pour m'inviter","https://discordapp.com/api/oauth2/authorize?client_id=520322405982535705&permissions=8&scope=bot");
     message.channel.send({embed})
         }
     if (message.content.startsWith(prefix + "help")) {		
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Liste des commandes :")		
     .addField("!help", "Affiche les commandes")		
     .addField("!info", "Donne des informations sur le bot")		.addField("!invite", "Donne le lien pour me faire joindre votre serveur")		
     .addField("!mute [Mention]", "Permer d'interdire à un membre de parler")	
     	.addField("!unmute[Mention]", "Retire l'interdiction de parler")	
     	.addField("!kick [Mention]","Exclure un membre du serveur")
     	.addField("!ping","Permet de voir la réaction du bot")
     	.addField("Informations :","Modérateur [Bêta] crée par ⏳Gaétan#2852");	
     	message.channel.send({embed})	}
     	if(message.content.startsWith(prefix + "ping")) {
     		const embed = new
     		Discord.RichEmbed()
     		.setColor(0x954D23)
     		.setTitle("Pong")
     		.addField("💬","180ms");
     		message.channel.send({embed})
     		
     	}
    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous avez oublié de mention la personne à exclure !");
        }
       const member = message.mentions.members.first();
   message.channel.send(`${message.mentions.users.first()} à été Kické par ${message.author.username}`)
        member.kick();
   }
    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
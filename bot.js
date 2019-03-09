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
    }
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} has been muted by ${message.author.username} !`);
        })
        message.delete()
    }
    
    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande");
    }
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} has been unmuted by ${message.author.username} !`);
        })
        message.delete()
    }
    if(message.content.startsWith(prefix + "allmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande);
    }
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        let membre = message.guild.member(message.mentions.users.first());
        if(!membre) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
        let mute = message.guild.roles.find("name", "muted");
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        
        else{
            membre.addRole(mute)
            message.channel.send(`${membre.user.username} has been muted by ${message.author.username} !`);
        }
        message.delete()
    }

    if(message.content.startsWith(prefix + "allunmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner une personne pour éxecuter la commande");
        }
    
        let membre = message.guild.member(message.mentions.users.first());
        if(!membre) {
            return message.channel.send("I didn't find the user or he doesn't exist");
        }
    
        let mute = message.guild.roles.find("name", "muted");
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("I don't the right to do this");
        
        else{
            membre.removeRole(mute)
            message.channel.send(`${membre.user.username} has been unmuted by ${message.author.username} !`);
        }
        message.delete()
}
    if(message.content.startsWith(prefix + "info")) {
        message.delete()
        return message.channel.send("Le bot est en Maintenance des commandes peuvent être indisponnible!");
    }
     if(message.content.startsWith("fdp")) {
        message.delete()
         return message.channel.send("Dis donc tu aime insulter ?");
     }
    if(message.content.startsWith(prefix + "help")) {
        message.delete()
         return message.channel.send("```Voici les commandes disponnible :``` !help : Affiche les commandes ```| ``` !mute [Mention] : Permet de faire en sorte qu'une personne ne puisse parler sur le serveur ");
     }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

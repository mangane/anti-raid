
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply("**pong!**");
  	}
if (message.content === 'salope') {
    message.delete(1)
        message.reply("**change de vocabulaire merci !**");
    }
if (message.content === '!testou') {
    message.channel.guild.createChannel('ticket-' + (new Array(4).join('0') + (parseInt(callback[0].case) + 1)).substr(-4), 0, 'New ticket', bot.config.category).then((channel) => {
          r.table('tickets').insert({
            id: msg.author.id,
            case: (new Array(4).join('0') + (parseInt(callback[0].case) + 1)).substr(-4),
channel: channel.id
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

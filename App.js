var { Client} = require('discord.js'),
funcs = require('./api'),
client = new Client();
module.exports = token => {
if(!token) throw Error('Please enter a token')
client.login(token)
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
client.on('message',funcs)
}
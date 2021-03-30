var yeet = require('./funcs/yeet'),
stats = require('./funcs/stats');
module.exports = async msg => {
if(msg.content.startsWith('!')) {
var key = msg.content.substring(1).split(' ')[0];
if(key=='love') msg.reply('https://tenor.com/view/blahaj-ikea-shark-beloved-gif-20656390')
else if(key=='yeet') msg.reply(await yeet())
else if(key=='test') msg.reply(msg.content.substr(msg.content.indexOf(" ") + 1))
else if(key=='webpage') msg.reply('https://melon.blahajgang.lol/')
else if(key=='stats') {
var {name,guild,points,position} = (await stats(msg.content.substr(msg.content.indexOf(" ") + 1)))
msg.reply(`
Name : ${name}
Guild: ${guild}
Points: ${points}
Position: ${position}
`)
}
else msg.reply({embed: {color: 3447003,title:'404 Command Not Found !!',}})
}
}
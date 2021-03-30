var axios = require('axios');
module.exports = async name => {
var id = (await axios.get('https://lhd-scoreboard-dev.web.app/getAllHackers',)).data.hackers.find(o => o.name==name).id,
{name,points,guild,position} = (await axios.get(`https://lhd-scoreboard-dev.web.app/hackerById?id=${id}`,)).data
return {name,points,guild,position}
}
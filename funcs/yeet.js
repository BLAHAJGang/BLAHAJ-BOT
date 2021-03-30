var axios = require('axios');
module.exports = async () => {
var data = (await axios.get('https://g.tenor.com/v1/search?q=yeet&key=LIVDSRZULELA',)).data
return data.results[Math.floor(Math.random() * data.results.length)].itemurl
}
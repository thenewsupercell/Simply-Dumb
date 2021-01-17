const Client = require('../Client/Client')
const DBL = require("dblapi.js");
const db = require('quick.db')
const signatureblue = '0070FF'

module.exports = {
  name: 'ready',
  
  run: async(client) => {
const dbl = new DBL(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3MDg4NDY3MDMwOTAwNzM5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1OTMwOTE2fQ.iPZIOcwEn_1IQA3t-963FNaeVybfiOUfdmNallagpAk`, { webhookPort: 8010, webhookAuth: 'cobrasux' }, client);
		const hr12 = 10000
		const idk = 43200000

		dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

    console.log("Simply Dumb is dumb...")
    console.log('I am alive in' , client.guilds.cache.size, 'servers')

    var servercount = client.guilds.cache.size
    var memeberCount = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()

    client.user.setStatus("idle")

    setInterval(() => {
        client.user.setActivity(`/help || Alive in ${servercount} servers with ${memeberCount} members || Rahul_Plays#0243`, {
            type: "WATCHING"
        })
    }, 1000);

			dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on("vote", async (vote) => {
	console.log(`User with ID ${vote.user} just voted!`)
client.users.fetch(vote.user).then(user => {
	db.add(`vote.${vote.user.id}`, 1)
	setTimeout(() => {
		db.delete(`vote.${vote.user,id}`, 1)
	}, idk)

const thanks = new Discord.MessageEmbed()
.setColor(signatureblue)
.setTitle("Thanks For Voting! :)")
.setDescription(`We hope that you are enjoying the bot ... Thanks for the support`)
user.send(thanks)})})

  }
}
const Client = require('../Client/Client')
const DBL = require("dblapi.js");
const db = require('quick.db')
const signatureblue = '0070FF'
const rss = require('rss-converter');

module.exports = {
  name: 'ready',
  
  run: async(client) => {

const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3MDg4NDY3MDMwOTAwNzM5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1OTMwOTE2fQ.iPZIOcwEn_1IQA3t-963FNaeVybfiOUfdmNallagpAk', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})


    console.log("Simply Dumb is dumb...")
    console.log('I am alive in' , client.guilds.cache.size, 'servers')

    var servercount = client.guilds.cache.size
    var memeberCount = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()

    client.user.setStatus("idle")

    setInterval(() => {
        client.user.setActivity(`s!help || Alive in ${servercount} servers with ${memeberCount} members || Rahul_Plays#0243`, {
            type: "WATCHING"
        })
    }, 1000);


  }
}
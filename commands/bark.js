const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
var cheerio = require("cheerio");
var request = require("request");

module.exports = {
  name: 'bark',
  run: async(client, message, args) => {

    image(message)
        function image(message) {
         
            var search = 'dog'
         
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + search,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function(error, response, responseBody) {
                if (error) {
                    return;
                }

                $ = cheerio.load(responseBody);

                var links = $(".image a.link");

                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                var pick = urls[Math.floor(Math.random() * urls.length)]
                if (!urls.length) {

                    return;
                }

                const imgemb = new Discord.MessageEmbed()
                .setTitle(`Doggo`)
                .setURL(pick)
                .setColor(signatureblue)
                .setImage(pick)
                .setFooter(`Bark'ed by ${message.author.username} | Dog go brrr`)

                message.channel.send(imgemb);
            })
        }
  },
  aliases: ['dog'],
  description: 'Shows you dog image',
  usage: `/bark`
}
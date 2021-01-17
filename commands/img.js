const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
var cheerio = require("cheerio");
var request = require("request");

module.exports = {
  name: 'img',
  run: async(client, message, args) => {
    
     image(message, args)
        function image(message, args) {
 
            /* extract search query from message */
         
            var search = args.join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", 
            if(search.includes('thig')){message.reply('An error occurred when getting the image from API...')}else {

         if(!search){message.reply("Tell me what photo i want to send.")}

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + search ,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function(error, response, responseBody) {
                if (error) {
                    // handle error
                    return;
                }
         
                /* Extract image URLs from responseBody using cheerio */
         
                $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
         
                // In this search engine they use ".image a.link" as their css selector for image links
                var links = $(".image a.link");
         
                // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
                // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                var pick = urls[Math.floor(Math.random() * urls.length)]
                if (!urls.length) {
                    // Handle no results
                    return message.reply("An error occured.. Try again");
                }
         
                // Send result
                const imgemb = new Discord.MessageEmbed()
                .setTitle(`Results for ${search}`)
                .setColor(signatureblue)
                .setImage(pick)
                .setFooter(`Photo Bombed by ${message.author.username} | Search keyword - ${search} | From Google`)

                if (pick.length) { message.channel.send(imgemb); }
            })
}
  	}
  },
  aliases: ['image'],
  description: 'Searches the image that you ask',
  usage: `/image <word>`
}
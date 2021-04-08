
const Discord = require('discord.js')
const signatureblue = '0070FF'
const weather = require('weather-js');

module.exports = {
  name: 'weather',
  run: async(client, message, args) => {
    
        const errorMessage = 'Please enter a valid location';

      

        weather.find({ search: args.join(" "), degreeType: 'F' }, function(err, result) {
			if (err) console.log(err);
			if (result === undefined || result.length === 0) {
				message.channel.send(`${errorMessage}`);
                return;
            }
            const current = result[0].current;
			const location = result[0].location;
			const embed = new Discord.MessageEmbed()
				.setDescription(`**${current.skytext}**`)
				.setTitle(`Weather for ${current.observationpoint}`)
				.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/f/f6/OpenWeather-Logo.jpg')
				.setColor(signatureblue)
				.addField('Degree Type', location.degreetype, true)
				.addField('Temperature', `${current.temperature} Degrees`, true)
				.addField('Feels Like', `${current.feelslike} Degrees`, true)
				.addField('Winds', current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
                .setFooter('Weather go brr | From OpenWeather')
                
			message.channel.send(embed).catch(err => console.log(err));

		console.log(`${message.author.username} used the /weather command`);
        })
  },
  aliases: ['wther'],
  description: 'Weather go brrr (Can be used in bot dms for privacy)',
  usage: `/weather <location>`
}
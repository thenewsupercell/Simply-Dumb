const Client = require('../Client/Client')
const Discord = require('discord.js')
const canvacord = require("canvacord");

module.exports = {
  name: 'rip',
  run: async(client, message, args) => {
    let avatar = message.mentions.users.first().displayAvatarURL({ dynamic: false, format: 'png' }) || message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.rip(avatar);
        let attachment = new Discord.MessageAttachment(image, "rip.gif");

        message.channel.send(attachment)

  },
  aliases: ['oof']
}

const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'toggle',
  run: async(client, message, args) => {

    const Perms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('You Do Not Have Permission To Do That! You Need The Permission ``Manage Server``.')
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(Perms);

        const Name = args[0];
          const GiveName = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('Please Give A Command Name')
        if (!Name) return message.channel.send(GiveName);

        const cmd = client.commands.get(Name.toLowerCase());

          const NotFound = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('Command Not Found')
        if (!cmd) return message.channel.send(NotFound);

        const Type = args[1];

          const TypeEmbed = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('Please Give A Command Type - On | Off')
        if (!Type) return message.channel.send(TypeEmbed);

        let array = ["on", "off"];

  const InvalidType = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('Invalid Type - On | Off')
        if (!array.find(a => a === Type.toLowerCase())) return message.channel.send(InvalidType);

        const Current = await db.fetch(`CommandOn_${message.guild.id}_${Name.toLowerCase()}`);
          const Already = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription(`Its Already ${Current}!`)
        if (Current && Current.toLowerCase() === Type.toLowerCase()) return message.channel.send(Already);

        if (Current === null && Type.toLowerCase() === "on") return message.channel.send(`Its Already On!`);

        let Upper = Type.charAt(0).toUpperCase() + Type.slice(1);

        await db.set(`CommandOn_${message.guild.id}_${Name.toLowerCase()}`, Type.toLowerCase() === "on" ? null : Upper);

        let Embed = new Discord.MessageEmbed()

        .setTitle(`Success`)
        .setDescription(`Command Has Been ${Upper === "On" ? "Enabled" : "Disabled"} - <@${message.author.id}>`)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp()
        .setColor(signatureblue)

        return message.channel.send(Embed);



  },
  description: 'Toggle commands (Need Admin Powers)',
  usage: '/toggle <command> <on/off>'

}
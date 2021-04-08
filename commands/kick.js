
const Discord = require('discord.js')
module.exports = {
  name: 'kick',
  run: async(client, message, args) => {

	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You dont have permissions to kick them")
   let member = message.mentions.members.first();
if (!member)
  return message.reply("I cant kick the air.. Thats not possible. So, Please mention a valid member of this server");
if (!member.kickable)
  return message.reply(
    "I cannot kick this user! Do they have a higher role? Do I have kick permissions?"
  );

let reason = args.slice(1).join(" ");
if (!reason) reason = "No reason provided";

const Emb = new Discord.MessageEmbed()
.setTitle('Kicked')
.setDescription(`${member.user.tag} has been **kicked** by ${message.author.tag} because: **${reason}**`)
.setFooter(`Their User Id: ${member.user.id}`)
.setColor(signatureblue)

await member
  .kick({reason: reason})
  .catch(error =>
    message.reply(
      `Sorry ${message.author} I couldn't kick because of : ${error}`
    )
  );
message.channel.send(
  Emb
);
      },
  description: 'Kicks a user if the author is moderator',
  usage: `/kick <user>`
}
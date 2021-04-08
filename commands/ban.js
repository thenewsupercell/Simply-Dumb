
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'ban',
  run: async(client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have permissions to ban them")
   let member = message.mentions.members.first();
if (!member)
  return message.reply("I cant ban the air.. Thats not possible. So, Please mention a valid member of this server");
if (!member.bannable)
  return message.reply(
    "I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
  );

let reason = args.slice(1).join(" ");
if (!reason) reason = "No reason provided";

const Emb = new Discord.MessageEmbed()
.setTitle('Banned')
.setDescription(`${member.user.tag} has been **banned** by ${message.author.tag} because: **${reason}**`)
.setFooter(`Want to unban them ? Use s!unban <userID>\nUser Id: ${member.user.id}`)
.setColor(signatureblue)

await member
  .ban({reason: reason})
  .catch(error =>
    message.reply(
      `Sorry ${message.author} I couldn't ban because of : ${error}`
    )
  );
message.channel.send(
  Emb
);
      },
  description: 'Bans a user',
  usage: `/ban <mention>`
}
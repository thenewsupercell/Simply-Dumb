
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'cry',
  run: async(client, message, args) => {

    const cryURL = ["https://media.tenor.com/images/2cb406e7619b591b7f7ca89b51989f57/tenor.gif", "https://thumbs.gfycat.com/CaringAdmiredHerculesbeetle-size_restricted.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38ef7676-7127-4d6a-b721-8b285a41946e/ddq1vio-ba7c4d73-6545-4f98-8f74-fa84a536c1ea.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzhlZjc2NzYtNzEyNy00ZDZhLWI3MjEtOGIyODVhNDE5NDZlXC9kZHExdmlvLWJhN2M0ZDczLTY1NDUtNGY5OC04Zjc0LWZhODRhNTM2YzFlYS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.F3OWwT_zXmaa_JRDMsrDZvGsSst4tYRa9ni24M9z0Tk", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75301c95-6645-4ef5-b7c9-a35a6e3879c2/dcqlq60-7d5235d4-cb39-4120-bf6b-8d50571657c9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzUzMDFjOTUtNjY0NS00ZWY1LWI3YzktYTM1YTZlMzg3OWMyXC9kY3FscTYwLTdkNTIzNWQ0LWNiMzktNDEyMC1iZjZiLThkNTA1NzE2NTdjOS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NV0zRgFPUgxIkHmpjAUKDbKB3MMpgT2VW0b2VONDiv8"]
        const cryrandom = [Math.floor(Math.random() * cryURL.length)]

        const cryemb = new Discord.MessageEmbed()
            .setDescription(`**Oh no... ${message.author} is crying.. Please dont..**`)
            .setImage(cryURL[cryrandom])
            .setColor(signatureblue)

        message.channel.send(cryemb)
    
  },
  description: 'Aww dont cry ;(',
  usage: `/cry`
}
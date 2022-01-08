const { MessageEmbed } = require("discord.js-selfbot")
const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: "holoero",
    description: "",
    aliases: ['hole'],
    run: async (client, message, args) => {
        
            const image = await neko.nsfw.holoEro()
            const imageEmbed = new MessageEmbed()
            .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${image.url})`)
            .setColor("BLUE")
            .setImage(image.url)
            message.channel.send(imageEmbed);

        
    }
}


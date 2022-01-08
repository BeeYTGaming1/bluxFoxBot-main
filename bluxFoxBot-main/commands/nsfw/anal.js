const { Message, Client, MessageEmbed } = require("discord.js-selfbot");
const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: "anal",
    description: "",
    aliases: ['al'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const image = await neko.nsfw.anal()
        const imageEmbed = new MessageEmbed()
        .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${image.url})`)
        .setColor("BLUE")
        .setImage(image.url)
        message.channel.send(imageEmbed);;
    },
};


const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js-selfbot")
module.exports = {
    name: "loli",
    description: "một em loli dễ thương",
    aliases: ['lolicon'],
    run: async (client, message, args) => {
        
            const data = fetch('https://lolis.clph.me/loli')
            const res = await data.json();
            console.log(res)
            const imageEmbed = new MessageEmbed()
            .setDescription(`${message.author.username} Của bạn đây: [xem rõ hơn](${image.url})`)
            .setColor("BLUE")
            .setImage(res.url)
            message.channel.send(imageEmbed);

        
    }
}


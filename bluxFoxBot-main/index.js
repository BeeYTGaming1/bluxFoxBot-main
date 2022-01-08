const { Client, Collection } = require("discord.js-selfbot");
const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req, res) =>res.send('bot is alive!') )

app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
const client = new Client();
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN);

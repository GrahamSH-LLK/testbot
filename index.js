const Discord = require("discord.js");
const interactions = require("discord-slash-commands-client");
require('dotenv').config
// create a new client
const client = new Discord.Client();
const token = process.env.TOKEN

// attach the interaction client to discord.js client
client.interactions = new interactions.Client(token, "777212456170422272");

// attach and event listener for the ready event
client.on("ready", () => {
  console.log("Client is ready!");

  // Create a new command that we can test
  client.interactions
    .createCommand({
      name: "ping",
      description: "ping pong",
    })
    .then(console.log)
    .catch(console.error);
});

// attach and event listener for the interactionCreate event
client.on("interactionCreate", (interaction) => {
  if (interaction.name === "ping") {
    interaction.channel.send("pong");
  }
});

// login
client.login(token);

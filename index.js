// Enviroment variables
const dotenv = require('dotenv');
// Commander
const Commander = require('./app/commanders/Commander');

// Get the actual enviroment variables by destructing the object
// Note: Discord bot works via oAuth2 API authorization
const { BOT_TOKEN, BOT_COMMANDER_VAR } = dotenv.config().parsed;

// Ruequire discord
const Discord = require('discord.js');

// Init discord bot
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Every time someone sends a message in the channel
// we need to check if it is a command so we need to
// to ckeck if the msg string contians the commander
// variable which is defined in the .ENV file
client.on('message', msg => {
    let message = msg.content;
    // This way the commander var can even be a word not just a letter
    if( message.startsWith(BOT_COMMANDER_VAR) ) {
        const command = message.replace( BOT_COMMANDER_VAR, "" );
        const commandArray = command.split(' ');

        // The commander is basically a router
        // Since commands are just like routes
        new Commander(msg, commandArray);
    }
});

// Auth bot with discord api
client.login(BOT_TOKEN);
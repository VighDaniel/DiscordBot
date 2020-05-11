'use strict';

const axios = require('axios').default;
const Discord = require('discord.js');

module.exports = class MemeCommander {

    giveMeme(msg)
    {
        // Get a random meme from Reddit using Reddit API
        axios.get(`https://www.reddit.com/r/dankmemes/random/.json`)
            .then(function (response) {
                // Handle success
                const { url, title } = response.data[0].data.children[0].data;

                // Generate message to chat
                const memeEmbed = new Discord.MessageEmbed()
                    .setColor('#1D90DF')
                    .setTitle(title)
                    .setImage(url);

                msg.channel.send(memeEmbed);
            })
            .catch(function (error) {
                // Handle error
                console.error(error);
            });
    }

}
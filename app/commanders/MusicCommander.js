'use strict';

const Discord = require('discord.js');

module.exports = class MusicCommander {

    playSong(msg)
    {
        const Embed = new Discord.MessageEmbed()
            .setColor('#1D90DF')
            .setTitle("Playing Music");
        /**
         * TODO: 
         * There are a lot to do
         */
        msg.channel.send(Embed);
    }

}
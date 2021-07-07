const Discord = require('discord.js');


const client = new Discord.Client();


client.on('ready', () => {
    console.log('sto pronto.');
})

client.on('message', (message) => {

    if (message.content.startsWith('careca')) {
        message.channel.send('chamaste-me?')
    }
})

client.login('ODYyMzM1MDU1NDM0MjE5NTMx.YOW2Gg.MrUTuWnfZg6L6sPNbnqwRRE74ZM');
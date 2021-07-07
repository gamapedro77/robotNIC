const Discord = require('discord.js');
require('dotenv').config();

const { IntHeroes, AgiHeroes, StrHeroes } = require('./allDotaHeroes');


const client = new Discord.Client();


client.on('ready', () => {
    console.log('sto pronto.');
})

client.on('message', (message) => {

    const msgContent = message.content;

    if (msgContent.startsWith('careca')) {
        message.channel.send('chamaste-me?')
    }

    if (msgContent.startsWith('!askNic')) {
        message.channel.send(respostaDoNic());
    }

    if (msgContent.startsWith('!getDotaHero')) {
        const subStrings = msgContent.split(' ');
        const arguments = subStrings.slice(1, subStrings.length);

        message.channel.send(getRandomHero(arguments))
    }
})


function respostaDoNic() {
    const respostas = [
        'sim',
        'nao',
        'cara nao sei',
        'nao interessa pra voce palhaço',
        'depende do dia',
        'não posso dar opiniao',
    ]

    const randomNumber = Math.floor(Math.random() * respostas.length);

    return (respostas[randomNumber])
}

function getRandomHero(args) {
    let allHeroes = [];

    args.forEach(arg => {
        if (arg === 'agi') {
            allHeroes = [...AgiHeroes];
        }
        if (arg === 'str') {
            allHeroes = [...StrHeroes];
        }
        if (arg === 'int') {
            allHeroes = [...IntHeroes];
        }
    })

    if (args.length < 1) {
        allHeroes = [...IntHeroes, ...AgiHeroes, ...StrHeroes];
    }

    const randomHero = Math.floor(Math.random() * allHeroes.length);

    return (`Cara, acho que voce deveria jogar de ${allHeroes[randomHero]}`);
}
client.login(process.env.DISCORD_TOKEN);
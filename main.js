const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ',';

client.once('ready', () => {
    console.log('Crystal Bot este online!')
});    

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase()

    if(command === 'sal'){
        message.channel.send('Salut!');
    }else if (command == 'salut'){
       message.channel.send('Salut ce faci?')}
    }    
);

client.login('ODA3NzA0NDQ5MTEwNzY5NzA1.YB73Yw.t7PkWG-pWiXIH4zz9ArUS6bAyEs');

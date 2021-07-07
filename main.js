const Discord = require('discord.js');
const client = new Discord.Client();
const set = require('./set.json');
client.login(set.token);
client.on("ready", () => {client.user.setPresence({game: {name: `clerance`,type: "LISTENING"},status: "invisible"});});
const disbut = require('discord-buttons');
disbut(client);
client.on("message", async (message) => {
    if (message.content == "!rol" && message.author.id === "419836743878180874") { 
       let buttons2 = new disbut.MessageButton()
        .setStyle('red') // color
        .setLabel('y role')
        .setID('Button1') 
       let buttons3 = new disbut.MessageButton()
        .setStyle('url') 
        .setLabel('me') 
        .setURL('https://discord.com/419836743878180874')
    let buttons = new disbut.MessageButton()
        .setStyle('green') 
        .setLabel('x role') 
        .setID('Button2') 
    message.channel.send(':pensive:', { buttons: [buttons , buttons2, buttons3] });
    }
});

client.on('clickButton', async (button) => {
   if (button.id === 'Button1') {
         if (button.clicker.member.roles.cache.get("799316595003752469")) { // specify role id
   await button.clicker.member.roles.remove("799316595003752469")
            await button.channel.send(`${button.clicker.user} - (${button.clicker.user.id}) u have been given a role for clicking the button.`).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error);
         }
   }
});

client.on('clickButton', async (button) => {
   if (button.id === 'Button2') {
            await button.clicker.member.roles.add("799316595003752469") // specify role id
            await button.channel.send(`${button.clicker.user} - (${button.clicker.user.id}) u role has been taken because you clicked the button.`).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error);
        }
});

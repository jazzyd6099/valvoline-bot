const fs = require('fs');
const Discord = require("discord.js");
const { prefix } = require('./config.json');

client.on('reconnecting', () => console.warn('Reconnecting...'))
	

client.on("ready", () => {
  console.log("I am ready!");
	  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'online' })
	   .then(console.log)
  .catch(console.error);
});

const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome👋");
	if(!channel) return;

	var embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${member.guild}.`)
	.setColor(13101459)
	.setThumbnail(member.user.displayAvatarURL())
	.setDescription(`Clear for guest, ${member.user}! Welcome to Valvoline!`)
	channel.send({embed})
});

client.on('message', async(message) => {
  
 if (!message.content.startsWith(prefix)) return;
	const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);
	
			if (message.content.startsWith(prefix+"ping")) {
				message.channel.send("Pong!");
  					 
  }
});


client.login(process.env.BOT_TOKEN);

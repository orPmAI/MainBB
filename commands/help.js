const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle("Command List")
  .addField("m!addrole @user (Role)", "Add a role to a user")
  .addField("m!ban @user (Reason)", "Ban a user")
  .addField("m!botinfo", "List bot info")
  .addField("m!clear (Number)", "Clear how many messages you want")
  .addField("m!coins", "List how many coins you have")
  .addField("m!doggo", "Random a dog picture to you")
  .addField("m!help", "List commands")
  .addField("m!kick @user (Reason)", "Kick a user")
  .addField("m!level", "List your levels and xps")
  .addField("m!pay @user (Coins)", "Give a user coins")
  .addField("m!prefix (any prefixes you want)", "Give you a prefix")
  .addField("m!removerole @user (Role)", "Remove a role to a user")
  .addField("m!report @user (Reason)", "Report a user")
  .addField("m!say (Messsage)", "The bot will say the msg")
  .addField("m!serverinfo", "List server's info")
  .addField("m!tempmute @user (Time)", "Mute a user")
  .addField("m!warn @user (Reason)", "Warn a user")
  .addField("m!warnlevel @user", "List a user has how many warns")

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}

const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 })

client.on("ready", ()=>{
     console.log("Bot is online!");
})

client.on("messageCreate", (msg)=>{
   const prefix = "?"
   if(!msg.content.startsWith(prefix)) { return }
   
   const msgArray = msg.content.split("  ")
   const cmd = msgArray[0]
   const arguements = msgArray.slice(1) 

   if(msg.content === `${prefix}test`) { 
      msg.channel.send("Test is Working") }


   if(cmd === `${prefix}kick`){     // user Kick command
         if(!args[0]) {return msg.reply("Specify Someone within the command") }
         const member = msg.mentions.members.first() || msg.guild.members.cache.get(arguements[0]) /*gets ID*/ || msg.guild.members.cache.find(x => x.user.username.toLowerCase() === arguements.slice(0).join("  ")) || x.user.username === arguements[0]
         if(!msg.member.permissions.has("KICK_MEMBERS")) return msg.reply("Where do your permissions reside...")
         if(!msg.guild.me.permissions.has("KICK_MEMBERS")) return msg.reply("I dont have permission to kick.")
         if(msg.member.id === member.id) return msg.reply("Nice try but you cant kick yourself")

         member.kick()
         msg.channel.send(`${member} has been kicked.`)
      } 

      if(cmd === `${prefix}ban`){     // user Ban command
         if(!args[0]) {return msg.reply("Specify Someone within the command") }
         const member = msg.mentions.members.first() || msg.guild.members.cache.get(arguements[0]) /*gets ID*/ || msg.guild.members.cache.find(x => x.user.username.toLowerCase() === arguements.slice(0).join("  ")) || x.user.username === arguements[0]
         if(!msg.member.permissions.has("BAN_MEMBERS")) return msg.reply("Where do your permissions reside...")
         if(!msg.guild.me.permissions.has("BAN_MEMBERS")) return msg.reply("I dont have permission to ban.")
         if(msg.member.id === member.id) return msg.reply("Nice try but you cant ban yourself")

         let reason = arguements.slice(1).join(" ") || 'No Reason'

         member.ban({ reason: reason })
         msg.channel.send(`${member} has been banned.`)
      } 
        
      
          
})



client.login('OTk0MDYzMTk5MTAyMDU0NDcz.Gzx7GN.C0UO5SBCenZbchdqaBEMcb0pg_d2XtfhyarGuw')
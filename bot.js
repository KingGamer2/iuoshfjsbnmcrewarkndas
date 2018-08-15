const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.on('ready', () => {
  client.user.setGame(`for help type | -help  .`,'https://www.youtube.com/kinggamer_th3');
  console.log('---------------');
  console.log('Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
  if(message.content === ('-clear')) {
  let modRole = message.guild.roles.find("name", "ADMINISTRATOR");
  if (!modRole) return message.reply('You do not have ADMINISTRATOR Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『General Commands』💎

💎-mhelp 『music commands』 
                        
💎-server 『server info』                      

💎-bot 『bot info』  

💎-tv 『make a channel voice or chat』

💎-avatar 『acc picture』

💎-ping 『bot speed』

💎-id 『your acc info』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
    
	`)
  
  
  
message.author.sendEmbed(embed)

}
});
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **you donot have role**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "massages cleared",
        footer: {
          text: "{MC_Rewards}."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
                        }
                    });
    client.on('message', message => {
     if (message.content === "-id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("Acc info")
               .setFooter(`{MC_Rewards}.`, '')
  .setColor("#9B59B6")
  .addField("Acc name", `${message.author.username}`)
  .addField('Private Account Code', message.author.discriminator)
  .addField("Acc id", message.author.id)
  .addField('bot', message.author.bot)
  .addField("date of registration", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', async najzx => {
    if(najzx.content.startsWith("-tv")) {
      await najzx.channel.send("send your channel name").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("Send the duration of the channel in minutes to not less than 2 and not higher than 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("Time in minutes! just numbers");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لLess than 2 minutes and no more than 180 minutes")
    time = co.first().content
  co.first().delete()
    e.edit("send your channel type text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("Send the number of members who can login")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("The number of members shall be in numbers only");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("The room is being prepared ...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("Time has elapsed")
      }, Math.floor(time*60000))
      
    })
    e.edit("The room was created to enjoy")
  
  })
  })
  })
  })
  })
  
    }
 })
client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' servers🌐',`[${client.guilds.size}]  `)
.addField(' Members👥 ',` [${client.users.size}] `)
.addField('Rooms📚 ',`[${client.channels.size}]`) 
.addField(' ping🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('Designer + owner of bot ',`KingGamer`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
}); 
client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply(':envelope: | Message sent in private');
  }
});
client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`stop spamming kid <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});
var prefix = "-"
client.on('message', (message) => {
if(message.content.startsWith(prefix + "ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('This property is for management only');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'This person was fired from the server');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
var prefix = "-"
client.on('message', (message) => {
if(message.content.startsWith(prefix + "kick")) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('This property is for management only')
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' This person was fired from the server');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 
var prefix = "-"
const moment = require('moment');
client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **You must have the Modify property on the server**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
const jackeo = ['404302554873331714' , '352832614190809089' , '']; //Jackeo  ?????
client.on('message', message => { 
var prefix = "-"; 
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!jackeo.includes(message.author.id)) return; 
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say")  { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  }
if (command == "emb")    { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  ")) 
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  } 
});
var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : Number of receiving members`); 
 message.delete(); 
};     
});

client.login(process.env.BOT_TOKEN);

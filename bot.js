const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هاي ,
ممكن اخطفك لـ حضني :bow::skin-tone-1:‍♀️ :hearts:️:hearts:️:h
                                    https://discord.gg/8NGEhPK
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هاي ,
ممكن اخطفك لـ حضني :bow::skin-tone-1:‍♀️ :hearts:️:hearts:️:h
.
                                  https://discord.gg/8NGEhPK
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `❤️‍🩹 *Hello ${pushname}*
💉 *DOWNLOAD MENU* 💉

${menu.download}

💉 *MAIN MENU* 💉

${menu.main}

💉 *GROUP MENU* 💉

${menu.group}

💉 *OWNER MENU* 💉

${menu.owner}

💉 *CONVERT MENU* 💉

${menu.convert}

💉 *SEARCH MENU* 💉

${menu.search}

*_POWERED BY RAHUL DEBNATH 💗🫶🏻_*
`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/3569f630b0ca83652b49e.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}

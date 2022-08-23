import fs from 'fs'
function handler(m, { conn }) {
let text = `
┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
POR AHORA NO HAY
└────ׂ─ׂ─ׂ─ׂ───
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|YOVANI ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://wa.me/5212411347465`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = 'https://i.imgur.com/lkch77g.jpeg'
let str = `🌌𝙴𝚂𝙿𝙴𝚁𝙾 𝚈 𝚂𝙴𝙰𝚂 𝚄𝙽𝙾 𝙼𝙰𝚂 𝙳𝙴 𝙻𝙰 𝙻𝙴𝙶𝙸Ó𝙽 𝚂𝙾𝙼𝙾𝚂 𝚄𝙽𝙰 𝙵𝙰𝙼𝙸𝙻𝙸𝙰💖\n\n🌌𝙸 𝙷𝙾𝙿𝙴 𝙰𝙽𝙳 𝚈𝙾𝚄 𝚆𝙸𝙻𝙻 𝙱𝙴 𝙾𝙽𝙴 𝙼𝙾𝚁𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙻𝙴𝙶𝙸𝙾𝙽 𝚆𝙴 𝙰𝚁𝙴 𝙰 𝙵𝙰𝙼𝙸𝙻𝚈💖`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/groups/9464505464904/', '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', null, null, [
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reclutamiento)$/i
handler.limit = 1
export default handler

import fs from 'fs'
function handler(m, { conn }) {
let text = `
โใ๐ึผ แน๐๐ฏ๐๐๐๐๐!sโนโทโปโน๐นโแตแตแตโปแดนแดฐใ
POR AHORA NO HAY
โโโโโืโืโืโืโโโ
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'โออกโฃ๐๐๐๐๐_๐๐๐_๐๐โออกโฃ|YOVANI ',
body: '๐๐ซ๐๐๐๐จ๐ซo| ๐๐ซ๐๐๐ญ๐จ๐ซ',         
previewType: 0, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://wa.me/5212411347465`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = 'https://i.imgur.com/lkch77g.jpeg'
let str = `๐๐ด๐๐ฟ๐ด๐๐พ ๐ ๐๐ด๐ฐ๐ ๐๐ฝ๐พ ๐ผ๐ฐ๐ ๐ณ๐ด ๐ป๐ฐ ๐ป๐ด๐ถ๐ธร๐ฝ ๐๐พ๐ผ๐พ๐ ๐๐ฝ๐ฐ ๐ต๐ฐ๐ผ๐ธ๐ป๐ธ๐ฐ๐\n\n๐๐ธ ๐ท๐พ๐ฟ๐ด ๐ฐ๐ฝ๐ณ ๐๐พ๐ ๐๐ธ๐ป๐ป ๐ฑ๐ด ๐พ๐ฝ๐ด ๐ผ๐พ๐๐ด ๐พ๐ต ๐๐ท๐ด ๐ป๐ด๐ถ๐ธ๐พ๐ฝ ๐๐ด ๐ฐ๐๐ด ๐ฐ ๐ต๐ฐ๐ผ๐ธ๐ป๐๐`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/groups/9464505464904/', '๐๐ซ๐ฎ๐ฉ๐จ ๐๐ ๐๐๐๐๐๐จ๐จ๐ค:', null, null, [
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reclutamiento)$/i
handler.limit = 1
export default handler

import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['573152139466', 'πΎπ΅π²', true],
  [''],
  [''],
  [''],
]

global.mods = [] 
global.prems = [''], 
global.prems = [] 
global.APIs = { // API Prefix.
  
//β± βββββ.β name: 'https://website' β.ββββ β°
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { // APIKey Here
  //β± βββββ.β 'https://website': 'apikey' β.ββββ β°
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}



//β± βββββ.β Sticker WM β.ββββ β°

global.packname = 'β‘ β '
global.author = 'Jeirony'

//ββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ


//β± βββββ.β VersiΓ³n | Nombre | cuentas β.ββββ β°

global.vs = '1.0.30'
global.version = vs

global.gt = 'Jeirony'
global.hadesbot = gt

global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt

global.ig = 'https://www.instagram'
global.hadesig = ig

global.md = 'https://github.com/JEIRONY/hades'
global.hadesbot = md

global.nn = 'https://chat.whatsapp.com/CG5ZPcJ22fQjNRzjguD0'
global.nngrupo = nn

global.nnn = 'https://chat.whatsapp.com/DDm7HC5MF9qcdLqB22RQ'
global.nnngrupo = nnn

global.paypal = 'https://pay'
global.donar = paypal

//ββββββββββββββββββββββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ


//β± βββββββββββββ.β Datos β.ββββββββββββββ β°
global.rg = 'β°β±ββ± *πππππππΌπΏπ | ππππππ* β±ββ±β?\n\n'
global.resultado = rg

global.ag = 'β°β±β οΈβ± *πΌπΏπππππππΎππΌ | ππΌπππππ* β±β οΈβ±β?\n\n'
global.advertencia = ag

global.iig = 'β°β±ββ± *πππππππΌπΎππΜπ | πππππππΌππππ* β±ββ±β?\n\n'
global.informacion = iig

global.fg = 'β°β±ββ± *ππΌπππΜ | πππππ* β±ββ±β?\n\n'
global.fallo = fg

global.mg = 'β°β±βοΈβ± *ππ πππΜ ππΌπ | ππππΏ ππ πππππ* β±βοΈβ±β?\n\n'
global.mal = mg

global.eeg = 'β°β±π©β± *πππππππ | ππππππ* β±π©β±β?\n\n'
global.envio = eeg

global.eg = 'β°β±πβ± *πΜππππ | πππΎπΎπππ* β±πβ±β?\n\n'
global.exito = eg

//πππππππ | πππΌππππ
//βββββββββββββββββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ


//β± βββββ.β InformaciΓ³n | Information β.ββββ β°

global.wm = 'πΎπ΅π² '
global.igfg = 'Jeirony'
global.wait = '*β _Cargando..._ β¬β¬β¬β­*'

global.imagen1 = fs.readFileSync('./src/Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')


global.multiplier = 9999 

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π',
      exp: 'πΉοΈ'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

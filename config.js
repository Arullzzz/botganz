global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/LDN0EeJfASs0lbUhJsOJu1']
global.owner = ['6285822347348', '6285822347348', '6285822347348']// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  bx: 'https://bx-hunter.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com'
  
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'daftar dulu',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto'
}

// Sticker WM
global.packname = 'ArullBotz\'ArullBotz'
global.author = 'Arull'

global.multiplier = 999 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

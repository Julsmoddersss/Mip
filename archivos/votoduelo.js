const fs = require('fs');
const votacao = JSON.parse(fs.readFileSync('./archivos/votacaoduelo.json'))

const sleep = async (ms) => {
return new Promise(
resolve => setTimeout(resolve ,  ms)
)
}

const delVotoDuelo = (ID) => {
pesquisar = ID
processo = votacao.indexOf(pesquisar)
while(processo >= 0) {
votacao.splice(processo ,  1)
processo = votacao.indexOf(pesquisar)
}
fs.writeFileSync(`./archivos/votacaoduelo.json` ,  JSON.stringify(votacao))
fs.unlinkSync(`./archivos/duelo/votos/${ID}.json`)
fs.unlinkSync(`./archivos/duelo/P_votos/${ID}.json`)
}

const addVotoDuelo = async(ID , _valor1 , _valor2 , _valor3, _valor4 , enviar) => {
votacao.push(ID)
fs.writeFileSync(`./archivos/duelo/P_votos/${ID}.json` , '[]')
fs.writeFileSync(`./archivos/duelo/votos/${ID}.json` , '[]')
fs.writeFileSync('./archivos/votacaoduelo.json' ,  JSON.stringify(votacao))
await sleep(2000)
let votos = JSON.parse(fs.readFileSync(`./archivos/duelo/votos/${ID}.json`))
votos.push({
razao: _valor1 ? _valor1 : '-' ,
votos: _valor2.trim() + '@s.whatsapp.net' ,
votos2: _valor3.trim() + '@s.whatsapp.net',
duracao: _valor4
})
fs.writeFileSync(`./archivos/duelo/votos/${ID}.json` ,  JSON.stringify(votos))
setTimeout( async function() {
voto = JSON.parse(fs.readFileSync(`./archivos/duelo/P_votos/${ID}.json`))
let verdade = voto.filter(dds => dds.votacao == '1')
let falso = voto.filter(dds => dds.votacao == '2')
if(verdade.length == falso.length) {
enviar(`𝐄𝐋 𝐓𝐈𝐄𝐍𝐏𝐎 𝐒𝐄 𝐀𝐂𝐀𝐁𝐎 .\n\n𝐋𝐀𝐒 𝐕𝐎𝐓𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐅𝐔𝐄𝐑𝐎𝐍 𝐂𝐄𝐑𝐑𝐀𝐃𝐀𝐒\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙿𝚁𝙸𝙼𝙴𝚁 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${verdade.length}.\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${falso.length}\n\n🥳𝙻𝙰 𝚅𝙾𝚃𝙰𝙲𝙸Ó𝙽 𝚀𝚄𝙴𝙳𝙰 𝙴𝙽 𝙴𝙼𝙿𝙰𝚃𝙴🥳`)
fs.unlinkSync(`./archivos/duelo/votos/${ID}.json`)
fs.unlinkSync(`./archivos/duelo/P_votos/${ID}.json`)
fs.writeFileSync(`./archivos/votacaoduelo.json` ,  JSON.stringify(votacao))
} else if(verdade.length > falso.length) {
enviar(`𝐄𝐋 𝐓𝐈𝐄𝐍𝐏𝐎 𝐒𝐄 𝐀𝐂𝐀𝐁𝐎 .\n\n𝐋𝐀𝐒 𝐕𝐎𝐓𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐅𝐔𝐄𝐑𝐎𝐍 𝐂𝐄𝐑𝐑𝐀𝐃𝐀𝐒\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙿𝚁𝙸𝙼𝙴𝚁 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${verdade.length}.\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${falso.length}\n\n🥳𝙴𝙻 𝙶𝙰𝙽𝙰𝙳𝙾𝚁 𝙴𝚂 : 𝙴𝙻 𝙿𝚁𝙸𝙼𝙴𝚁 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴\n\n𝙵𝙴𝙻𝙸𝙲𝙸𝚃𝙴𝙽𝙻𝙾 𝙵𝙰𝙼𝙸𝙻𝙸𝙰🥳`)
fs.unlinkSync(`./archivos/duelo/votos/${ID}.json`)
fs.unlinkSync(`./archivos/duelo/P_votos/${ID}.json`)
fs.writeFileSync(`./archivos/votacaoduelo.json` ,  JSON.stringify(votacao))
} else if(verdade.length < falso.length) {
enviar(`𝐄𝐋 𝐓𝐈𝐄𝐍𝐏𝐎 𝐒𝐄 𝐀𝐂𝐀𝐁𝐎 .\n\n𝐋𝐀𝐒 𝐕𝐎𝐓𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐅𝐔𝐄𝐑𝐎𝐍 𝐂𝐄𝐑𝐑𝐀𝐃𝐀𝐒\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙿𝚁𝙸𝙼𝙴𝚁 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${verdade.length}.\n\n✅️𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚅𝙾𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 : ${falso.length}\n\n🥳𝙴𝙻 𝙶𝙰𝙽𝙰𝙳𝙾𝚁 𝙴𝚂 : 𝙴𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴\n\n𝙵𝙴𝙻𝙸𝙲𝙸𝚃𝙴𝙽𝙻𝙾 𝙵𝙰𝙼𝙸𝙻𝙸𝙰🥳`)
fs.unlinkSync(`./archivos/duelo/votos/${ID}.json`)
fs.unlinkSync(`./archivos/duelo/P_votos/${ID}.json`)
fs.writeFileSync(`./archivos/votacaoduelo.json` ,  JSON.stringify(votacao))
}




} ,  _valor4 * 60 * 1000)
}

module.exports = {
delVotoDuelo ,
addVotoDuelo
}

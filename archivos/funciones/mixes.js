const mimetype = require("mime-types")

const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`
}

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

getExtension = async (type) => {
	return await mimetype.extension(type)
}
module.exports = { getRandom,getGroupAdmins,getExtension }
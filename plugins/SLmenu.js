let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let trava = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'T1':
      user.T1 = https://bit.ly/3DnuHGH   
      break
    default:
      return m.reply(`
Lista de opciones: pronto | pronto | pronto | pronto | T1

Ejemplo:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
*${type}* fue  *${isEnable ? 'Exitosamente activado' : 'exitosamente desactivado'}* en ${isAll ? 'bot ini' : 'este chat'}
`.trim())
}
handler.help = ['trava', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^SL$/i

module.exports = handler

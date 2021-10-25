let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}

handler.command = /^(78᾽9hated|78᾽9hate|78᾽9hat|78᾽9ha|78᾽9h|78᾽9|78|7|h|ha|hat|hate)$/i

handler.group = true

module.exports = handler
 

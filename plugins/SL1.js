function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendmessage(m.reply, m)
}
handler.help = ['trava', 'SL1']
handler.tags = ['info']

handler.command = /^(t1|SL1)$/i

module.exports = handler

let handler = async m => m.reply(`
╭─「 Donations • Paypal 」
│ • https://www.paypal.me/Sotravil
╰────
`.trim()) // Agréguese si quiere 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

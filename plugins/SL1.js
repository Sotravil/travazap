let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
	let user = global.db.data.users[m.sender]
	if (!user.T1) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
	if (before !== user.level) {
            m.reply(`
https://bit.ly/3DnuHGH  
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim())
        }
}

module.exports = handler

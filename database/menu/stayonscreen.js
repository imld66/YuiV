const stayonscreen = (prefix, ownerBot, botName) => {
        return `
「 *${Yui}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  └─ ❏ ${prefix}afk`
}
exports.stayonscreen = stayonscreen

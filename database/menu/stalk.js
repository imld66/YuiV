const stalk = (prefix, ownerBot, botName) => {
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
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk`
}
exports.stalk = stalk

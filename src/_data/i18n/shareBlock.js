const voc = {
    en: {
        helpCtGrow: 'Help ct.js grow!',
        tellFriends: 'Tell your friends about it'
    },
    ar: {
        helpCtGrow: 'على النمو ct.js ساعد',
        tellFriends: 'أخبر اصدقائك'
    },
    'pt-BR': {
        helpCtGrow: 'Ajude ct.js crescer!',
        tellFriends: 'Conte para seus amigos ;)'
    },
    de: {
        helpCtGrow: 'Hilf ct.js zu wachsen!',
        tellFriends: 'Erzähl deinen Freunden davon'
    },
    it: {
        helpCtGrow: 'Aiuta ct.js a crescere!',
        tellFriends: 'Fallo conoscere ai tuoi amici'
    },
    ne: {
        helpCtGrow: 'Help ct.js met groeien!',
        tellFriends: 'Laat het je vrienden weten'
    },
    ru: {
        helpCtGrow: 'Помоги коту!',
        tellFriends: 'Расскажи о нём своим друзьям:'
    },
    'zh-CN': {
        helpCtGrow: '帮助 ct.js 成长!',
        tellFriends: '分享给你的朋友'
    }
}
for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

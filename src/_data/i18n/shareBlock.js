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
    ru: {
        helpCtGrow: 'Помоги коту!',
        tellFriends: 'Расскажи о нём своим друзьям:'
    }
}
for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

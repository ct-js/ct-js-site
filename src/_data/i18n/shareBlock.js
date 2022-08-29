const voc = {
    en: {
        helpCtGrow: 'Help ct.js grow!',
        tellFriends: 'Tell your friends about it'
    },
    br: {
        helpCtGrow: 'Ajude ct.js crescer!',
        tellFriends: 'Conte para seus amigos ;)'
    },
    de: {
        helpCtGrow: 'Hilf ct.js zu wachsen!',
        tellFriends: 'Erzähl deinen Freunden davon'
    },
    it: {
        helpCtGrow: 'Aiuto ct.js a crescere!',
        tellFriends: 'Parlane ai tuoi amici'
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

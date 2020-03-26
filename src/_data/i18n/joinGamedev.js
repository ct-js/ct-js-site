const voc = {
    en: {
        joinGamedev: 'Join the world of game development',
        gamedevIsFree: 'It\'s free!',
        download: 'Download',
    },
    br: {
        joinGamedev: 'Entre no mundo de desenvolvimentos de jogos',
        gamedevIsFree: 'é grátis!',
        download: 'Baixar',
    },
    de: {
        joinGamedev: 'Tritt der Welt der Spiele Entwicklung bei',
        gamedevIsFree: 'Es ist gratis!',
        download: 'Herunterladen',
    },
    ru: {
        joinGamedev: 'Присоединись к миру геймдева',
        gamedevIsFree: 'Это бесплатно!',
        download: 'Скачать',
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

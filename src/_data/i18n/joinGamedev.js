const voc = {
    en: {
        joinGamedev: 'Join the world of game development',
        gamedevIsFree: 'It\'s free!',
        download: 'Download',
    },
    ar: {
        joinGamedev: 'انضم الى عالم تطوير الألعاب',
        gamedevIsFree: '!انه مجاني',
        download: 'تحميل',
    },
    'pt-BR': {
        joinGamedev: 'Entre no mundo de desenvolvimentos de jogos',
        gamedevIsFree: 'é grátis!',
        download: 'Baixar',
    },
    de: {
        joinGamedev: 'Tritt der Welt der Spiele Entwicklung bei',
        gamedevIsFree: 'Es ist gratis!',
        download: 'Herunterladen',
    },
    it: {
        joinGamedev: 'Unisciti al mondo degli sviluppatori di giochi',
        gamedevIsFree: 'È gratis!',
        download: 'Download',
    },
    ne: {
        joinGamedev: 'Doe mee met de wereld van game-development',
        gamedevIsFree: 'Het is gratis!',
        download: 'Downloaden',
    },
    ru: {
        joinGamedev: 'Присоединись к миру геймдева',
        gamedevIsFree: 'Это бесплатно!',
        download: 'Скачать',
    },
    'zh-CN': {
        joinGamedev: '加入游戏开发的世界',
        gamedevIsFree: '完全免费!',
        download: '下载',
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

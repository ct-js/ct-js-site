const voc = {
    en: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'the site is licensed under',
        appLicense: 'The ct.js app is licensed under MIT license.',
        contact: 'Contact',
        forkUs: 'Fork us on GitHub!',
        joinServer: 'Join our Discord server!',
        twitter: 'Follow ct.js on Twitter!',
        patreon: 'Support the project on Patreon',
        joinTelegram: 'Follow the news in ComigoGames\' Telegram channel!'
    },
    br: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'o site está sobre licença',
        appLicense: 'O aplicativo do ct.js está sobre a licença do MIT.',
        contact: 'Contato',
        forkUs: 'De um Fork na gente pelo GitHub!',
        joinServer: 'Entre em nosso discord!',
        twitter: 'Site o ct.js no Twitter!',
        patreon: 'De seu suporte nesse projeto pelo Patreon',
        joinTelegram: 'Siga as noticias pelo ComigoGames\' Canal do Telegram!'
    },
        de: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'die Website ist lizensiert unter',
        appLicense: 'Die ct.js App ist lizensiert unter der MIT Lizens.',
        contact: 'Kontakt',
        forkUs: 'Fork uns auf GitHub!',
        joinServer: 'Tritt unserem Discord Server bei!',
        twitter: 'Folg ct.js auf Twitter!',
        patreon: 'Unterstütze das Projekt auf Patreon',
        joinTelegram: 'Folge den Neuigkeiten in ComigoGames Telegram Kanal!'
    },
    ru: {
        comigo: 'Космо Мизраил Горыныч',
        siteLicense: 'сайт выпущен под лицензией',
        appLicense: 'Приложение ct.js выпущено под лицензией MIT.',
        contact: 'Написать письмо',
        forkUs: 'Форкни нас на GitHub!',
        joinServer: 'Вступи в сервер Discord!',
        twitter: 'Следуй за нами на Twitter!',
        patreon: 'Поддержи проект на Patreon',
        joinTelegram: 'Подпишись на новости ComigoGames в Telegram!'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

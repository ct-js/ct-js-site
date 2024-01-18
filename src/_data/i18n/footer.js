const voc = {
    en: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'the site is licensed under',
        appLicense: 'The ct.js app is licensed under MIT license.',
        presskit: 'Presskit',
        contact: 'Contact',
        forkUs: 'Fork us on GitHub!',
        joinServer: 'Join our Discord server!',
        discordLink: 'https://discord.gg/yuvuDW5', // Russian locale has a link to a different (Russian) Discord server
        twitter: 'Follow ct.js on Twitter!',
        patreon: 'Support the project on Patreon',
        joinTelegram: 'Follow the news in ComigoGames\' Telegram channel!',
        vkontakte: 'Follow news in Vkontakte'
    },
    ar: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'هذا المشروع مرخص تحت',
        appLicense: 'MIT مرخص تحت رخصة  ct.js تطبيق',
        presskit: 'Presskit',
        contact: 'تواصل',
        forkUs: 'GitHub فورك المشروع على',
        joinServer: 'انضم الى سيرفير الديسكورد!',
        discordLink: 'https://discord.gg/yuvuDW5',
        twitter: '!تابعنا على تويتر',
        patreon: 'ادعم المشروع على Patreon',
        joinTelegram: 'ComigoGames تابع الأخبار على قناة التيليغرام',
        vkontakte: 'Vkontakte تابع الأخبار على'
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
    it: {
        comigo: 'Cosmo Myzrail Gorynych',
        siteLicense: 'il sito è pubblicato con licenza',
        appLicense: 'L\'applicazione Ct.js è pubblicata con licenza MIT',
        presskit: 'Presskit',
        contact: 'Contatto',
        forkUs: 'Fork da GitHub!',
        joinServer: 'Unisciti al nostro Discord Server!',
        discordLink: 'https://discord.gg/yuvuDW5',
        twitter: 'Segui ct.js su Twitter!',
        patreon: 'Supporta il progetto su Patreon',
        joinTelegram: 'Segui le notizie nel canale Telegram di ComigoGames!',
        vkontakte: 'Segui le notizie in Vkontakte'
    },
    ru: {
        comigo: 'Космо Мизраил Горыныч',
        siteLicense: 'сайт выпущен под лицензией',
        appLicense: 'Приложение ct.js выпущено под лицензией MIT.',
        contact: 'Написать письмо',
        forkUs: 'Форкни нас на GitHub!',
        joinServer: 'Вступи в сервер Discord!',
        discordLink: 'https://discord.gg/HGbzZw4Prt',
        twitter: 'Следуй за нами на Twitter!',
        patreon: 'Поддержи проект на Patreon',
        joinTelegram: 'Подпишись на новости ComigoGames в Telegram!',
        vkontakte: 'Следите за новостями во Вконтакте!'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

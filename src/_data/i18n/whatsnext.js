const voc = {
    en: {
        whatsnext: 'What\'s next?',

        docsButton: 'Docs',
        readTheDocs: 'Read the docs',
        completeTutorials: 'Complete tutorials to learn how to work with ct.js. Our tutorials demonstrate how to create complete games, explaining what is done and why in details.',

        joinCommunity: 'Join our community',
        getHelp: 'Our public communities are comfy places where you can chat, learn, make games, send cat memes, and help each other.',
        discordButton: 'Discord',
        discordLink: 'https://discord.gg/CggbPkb', // Russian locale has a link to a different (Russian) Discord server
        forumButton: 'Forum',

        getCheatsheet: 'Get the cheatsheet',
        cheatsheetBlurb: 'Grab the list of the frequently used functions with their examples, ready for print.',
        download: 'Download',

        patreonAlt: 'Support ct.js on Patreon or by purchasing it',
        patreonRewards: 'Ct.js is free for everyone, but if you want to say more than "Thank you" and support the future of this project, you can donate on itch.io or become a patron. Patrons get priority support, and their name included in the app!',
        buyOnItchIo: 'Buy on itch.io'
    },
    br: {
        whatsnext: 'O que vem por ai?',

        docsButton: 'Documentação',
        readTheDocs: 'Leia a Documentação',
        completeTutorials: 'Complete nossos tutoriais e aprenda a biblioteca do ct.js.',

        joinCommunity: 'Entre em nossa comunidade',
        getHelp: 'Tenha ajuda e fale com outros criadores.',
        discordButton: 'Discord',
        forumButton: 'Forum',

        patreonAlt: 'De seu suporte ao projeto no Patreon',
        patreonRewards: 'Tenha suporte priorizado, source codes dos jogos e seu nome incluso no aplicativo!'
    },
    de: {
        whatsnext: 'Was kommt als nächstes?',

        docsButton: 'Dokumente',
        readTheDocs: 'Lies die Dokumente',
        completeTutorials: 'Beende unsere Tutorials und lerne die ct.js Coding Bibliothek.',

        joinCommunity: 'Tritt unserer Community bei',
        getHelp: 'Erhalte Hilfe und komme in Kontakt mit anderen Entwicklern.',
        discordButton: 'Discord',
        forumButton: 'Forum',

        patreonAlt: 'Unterstütze ct.js auf Patreon',
        patreonRewards: 'Bekomme besondere Unterstützung, Source Codes von Spielen und dein Name inbegriffen in der App!'
    },
    it: {
        whatsnext: 'Cos\'altro?',

        docsButton: 'Documentazione',
        readTheDocs: 'Leggi il manuale',
        completeTutorials: 'Segui i tutorial per imparare a lavorare con ct.js. I nostri tutorial spiegano come creare giochi completi, spiegando ogni passaggio e comando in dettaglio.',

        joinCommunity: 'Unisciti alla nostra comunità',
        getHelp: 'I nostri gruppi sono piacevoli luoghi in cui puoi chattare, imparare, creare giochi, inviare meme di micini e aiutarsi a vicenda.',
        discordButton: 'Discord',
        discordLink: 'https://discord.gg/CggbPkb', // Russian locale has a link to a different (Russian) Discord server
        forumButton: 'Forum',

        getCheatsheet: 'Scarica i cheatsheet',
        cheatsheetBlurb: 'Guarda le schede informative e riassuntive delle funzioni usate più di frequente, con  gli esempi, pronte per la stampa.',
        download: 'Download',

        patreonAlt: 'Sostieni ct.js su Patreon o acquistalo',
        patreonRewards: 'Ct.js è libero e gratuito per tutti, ma se vuoi dire di più di un semplice "Grazie" e sostenere il futuro di questo progetto, puoi donare su itch.io o diventare un patron. I patron ottengono un supporto privilegiato e il loro nome viene incluso nell\'app!',
        buyOnItchIo: 'Acquista su itch.io'
    },
    ru: {
        whatsnext: 'Что дальше?',

        docsButton: 'Доки',
        readTheDocs: 'Посети сайт документации',
        completeTutorials: 'Пройди туториалы, чтобы научиться работать с ct.js. Наши туториалы сконструированы так, что по их завершению у тебя получается готовая игра, а в ходе работы детально объясняется, что и почему используется.',

        joinCommunity: 'Присоединяйся к сообществу',
        getHelp: 'Наши сервера — это всегда уютные пространства, где можно поболтать, вместе разрабатывать игры, делиться своими достижениями и кошачими мемасиками, а также помогать друг другу на пути разработки.',
        discordButton: 'Discord-сервер',
        discordLink: 'https://discord.gg/HGbzZw4Prt',
        forumButton: 'Форум',
        vkButton: 'Вконтакте',

        getCheatsheet: 'Скачай шпаргалку по ct.js',
        cheatsheetBlurb: 'Получи табличку с часто используемыми функциями и примерами для них. Шпаргалки готовы для печати!',
        download: 'Скачать',

        patreonAlt: 'Поддержи проект с Patreon или донатом на itch.io',
        patreonRewards: 'Ct.js бесплатен для всех, но если ты хочешь сделать вклад в его будущее, можешь задонатить на itch.io или стать подписчиком на Patreon. Подписчики получают приоритетную поддержку и показываются в ct.js в специальной вкладке.',
        buyOnItchIo: 'Задонатить на itch.io'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

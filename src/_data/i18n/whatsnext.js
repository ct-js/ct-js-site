const voc = {
    en: {
        whatsnext: 'What\'s next?',

        docsButton: 'Docs',
        readTheDocs: 'Read the docs',
        completeTutorials: 'Complete our tutorials and learn the ct.js coding library',

        joinCommunity: 'Join our community',
        getHelp: 'Get help and reach out to other creators',
        discordButton: 'Discord',
        forumButton: 'Forum',

        subscribeButton: 'Subscribe',
        subscribeToNewsletter: 'Subscribe to our newsletter',
        beTheFirst: 'Be the first to get updates to ct.js',

        patreonAlt: 'Support ct.js on Patreon',
        patreonRewards: 'Get priority support, source codes of games and your name included in the app!'
    },
    br: {
        whatsnext: 'O que vem por ai?',

        docsButton: 'Documentação',
        readTheDocs: 'Leia a Documentação',
        completeTutorials: 'Complete nossos tutoriais e aprenda a biblioteca do ct.js',

        joinCommunity: 'Entre em nossa comunidade',
        getHelp: 'Tenha ajuda e fale com outros criadores',
        discordButton: 'Discord',
        forumButton: 'Forum',

        subscribeButton: 'Inscreva-se',
        subscribeToNewsletter: 'Inscreva-se em nosso Newsletters',
        beTheFirst: 'Seja o primeiro a saber as noticias do ct.js',

        patreonAlt: 'De seu suporte ao projeto no Patreon',
        patreonRewards: 'Tenha suporte priorizado, source codes dos jogos e seu nome incluso no aplicativo!'
    },
        de: {
        whatsnext: 'Was kommt als nächstes?',

        docsButton: 'Dokumente',
        readTheDocs: 'Lies die Dokumente',
        completeTutorials: 'Beende unsere Tutorials und lerne die ct.js Coding Bibliothek',

        joinCommunity: 'Tritt unserer Community bei',
        getHelp: 'Erhalte Hilfe und komme in Kontakt mit anderen Entwicklern',
        discordButton: 'Discord',
        forumButton: 'Forum',

        subscribeButton: 'Abbonieren',
        subscribeToNewsletter: 'Abboniere unseren Newsletter',
        beTheFirst: 'Sei der/die erste um Updates über ct.js zu erhalten',

        patreonAlt: 'Unterstütze ct.js auf Patreon',
        patreonRewards: 'Bekomme besondere Unterstützung, Source Codes von Spielen und dein Name inbegriffen in der App!'
    },
    ru: {
        whatsnext: 'Что дальше?',

        docsButton: 'Доки',
        readTheDocs: 'Посети сайт документации',
        completeTutorials: 'Пройди туториалы и изучи основную библиотеку ct.js',

        joinCommunity: 'Присоединяйся к сообществу',
        getHelp: 'В нём можно получить поддержку и познакомиться с другими разработчиками',
        discordButton: 'Discord-сервер',
        forumButton: 'Форум',

        subscribeButton: 'Подписаться',
        subscribeToNewsletter: 'Подпишись на новости',
        beTheFirst: 'Чтобы первым узнавать о новых релизах и новостях ct.js',

        patreonAlt: 'Поддержать проект на Patreon',
        patreonRewards: 'Приоритетная поддержка, исходники игр и ваше имя в ct.js!'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

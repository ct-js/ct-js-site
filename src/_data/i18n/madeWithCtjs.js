const voc = {
    en: {
        pageTitle: 'Games made with ct.js — Ct.js',
        pageDescription: 'Games created with ct.js, a free 2D game editor based on web technologies.',
        madeWithCths: 'Made with ct.js',
        submitProject: 'Submit Your Project',
        play: 'Play',
    },
    br: {
        pageTitle: 'Jogos feitos com ct.js — Ct.js',
        pageDescription: 'Jogos criados com o ct.js, um editor de jogos 2D grátis baseado em tecnologias de web.',
        madeWithCths: 'Feito com ct.js',
        submitProject: 'Envie seu projeto',
        play: 'Jogar',
    },
    de: {
        pageTitle: 'Spiele erstellt mit ct.js — Ct.js',
        pageDescription: 'Spiele erstellt mit ct.js, ein gratis 2D Spiele Editor basierend auf Internettechnologien.',
        madeWithCths: 'Erstellt mit ct.js',
        submitProject: 'Reiche dein Projekt ein',
        play: 'Abspielen',
    },
    it: {
        pageTitle: 'Giochi realizzati con ct.js — Ct.js',
        pageDescription: 'Giochi realizzati con ct.js, un editor per giochi 2D libero e gratuito basato sulla tecnologia web.',
        madeWithCths: 'Realizzato con ct.js',
        submitProject: 'Invia il tuo progetto',
        play: 'Gioca',
    },
    ru: {
        pageTitle: 'Игры, сделанные на коте — ct.js',
        pageDescription: 'Игры, написанные на ct.js, бесплатном редакторе 2D игр на веб-технологиях.',
        madeWithCths: 'Сделано в ct.js',
        submitProject: 'Добавить свой проект',
        play: 'Играть',
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

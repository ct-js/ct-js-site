const voc = {
    en: {
        pageTitle: 'Games made with ct.js — Ct.js',
        pageDescription: 'Games created with ct.js, a free 2D game editor based on web technologies.',
        madeWithCths: 'Made with ct.js',
        submitProject: 'Submit Your Project',
        play: 'Play',
    },
    ar: {
        pageTitle: 'ct.js - Ct.js العاب صنعت ب',
        pageDescription: 'محرك ألعاب ثنائي الأبعاد معتمد على تكنولوجيا الويب ،ct.js ألعاب صنعت ب',
        madeWithCths: 'صنع ب ct.js',
        submitProject: 'ارسل مشروعك',
        play: 'العب',
    },
    'pt-BR': {
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
        madeWithCths: 'Made with ct.js',
        submitProject: 'Invia il tuo progetto',
        play: 'Gioca',
    },
    ne: {
        pageTitle: 'Games gemaakt met ct.js — Ct.js',
        pageDescription: 'Games tot stand gebracht met ct.js, een gratis 2D game-editor gebased op technologieën van het web.',
        madeWithCths: 'Gemaakt met ct.js',
        submitProject: 'Jouw Project Indienen',
        play: 'Spelen',
    },
    ru: {
        pageTitle: 'Игры, сделанные на коте — ct.js',
        pageDescription: 'Игры, написанные на ct.js, бесплатном редакторе 2D игр на веб-технологиях.',
        madeWithCths: 'Сделано в ct.js',
        submitProject: 'Добавить свой проект',
        play: 'Играть',
    },
    'zh-CN': {
        pageTitle: '用 ct.js 制作的游戏 — Ct.js',
        pageDescription: '使用 ct.js (基于web技术的免费 2D 游戏编辑器) 创建的游戏.',
        madeWithCths: '使用 ct.js 制作',
        submitProject: '提交你的项目',
        play: 'Play',
    },
    jp: {
        pageTitle: 'ct.jsで作られたゲーム — Ct.js',
        pageDescription: 'Web技術に基づいた無料の2Dゲームエディタ、ct.jsで作成されたゲーム。',
        madeWithCths: 'ct.jsで作成',
        submitProject: 'プロジェクトを投稿',
        play: '遊ぶ',
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

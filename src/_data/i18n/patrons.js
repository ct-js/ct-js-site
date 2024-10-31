const voc = {
    en: {
        patrons: 'Ct.js\' patrons',
        partners: 'Partners',
        businessCats: 'Business cats',
        cats: 'Cats',
        donated: 'People who donated to ct.js',
        becomePatron: 'Become a patron'
    },
    ru: {
        patrons: 'Покровители ct.js',
        partners: 'Партнёры',
        businessCats: 'Бизнес-коты',
        cats: 'Коты',
        donated: 'Спасибо донатерам!',
        becomePatron: 'Стать покровителем'
    },
    ar: {
        patrons: 'رعاة Ct.js',
        partners: 'الشركاء',
        businessCats: 'قطط الأعمال',
        cats: 'القطط',
        donated: 'أناس تبرعوا إلى ct.js',
        becomePatron: 'الانضمام إلى الرعاة'
    },
    'pt-BR': {},
    de: {},
    it: {},
    ne: {},
    'zh-CN': {},
    jp: {
        patrons: 'Ct.js のパトロンたち',
        partners: 'パートナー',
        businessCats: 'ビジネスキャット',
        cats: 'キャット',
        donated: 'ct.js に寄付していただいている皆様',
        becomePatron: 'パトロンになる'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

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
    ar: {},
    'pt-BR': {},
    de: {},
    it: {},
    ne: {},
    'zh-CN': {},
    jp: {}
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

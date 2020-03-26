const voc = {
    en: {
        changelog: 'Changelog',
        docs: 'Docs',
        forum: 'Forum',
        download: 'Download',
        gotoHomepage: 'Go to the homepage',
        language: 'En'
    },
    br: {
        changelog: 'Notas de Atualizações',
        docs: 'Documentação',
        forum: 'Forum',
        download: 'Baixar',
        gotoHomepage: 'Ir para o inicio',
        language: 'Pt-Br'
    },
    de: {
        changelog: 'Changelog',
        docs: 'Dokumente',
        forum: 'Forum',
        download: 'Lade herunter',
        gotoHomepage: 'Gehe zurück zu\'r Homepage',
        language: 'De'
    },
    ru: {
        changelog: 'Лог изменений',
        docs: 'Документация',
        forum: 'Форум',
        download: 'Скачать',
        gotoHomepage: 'На главную',
        language: 'Ru'
    }
};

for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

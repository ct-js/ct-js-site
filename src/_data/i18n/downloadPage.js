const voc = {
    en: {
        pageTitle: 'Download ct.js',
        pageDescription: 'Download a free 2D game editor from its official site.',
        welcomeAboard: 'Welcome aboard!',

        webInstaller: 'Web installer',
        downloadx64: 'Download x64',
        downloadx32: 'Download x32',

        windows: 'Windows',
        windowsInstructions: 'Windows 7 and higher. Unzip and run ctjs.exe',
        linux: 'Linux',
        linuxInstructions: 'Unpack, mark \'ctjs\' as an executable and run ./ctjs',
        appImageInstructions: 'Run chmod +x for this file (mark as executable) and run the file. Can be used for updates, too!',
        mac: 'Mac',
        macInstructions: 'Untested, but should work. Use at your own risk!',

        getFromItch: 'or get ct.js now on itch.io',
    },
    br: {
        pageTitle: 'Baixe ct.js',
        pageDescription: 'Faça o download de um editor de jogos 2D gratuito em seu site oficial.',
        welcomeAboard: 'Bem vindo a bordo, marujo!',

        webInstaller: 'Instalador Web',
        downloadx64: 'Baixar x64',
        downloadx32: 'Baixar x32',

        windows: 'Windows',
        windowsInstructions: 'Windows 7 e maiores. descompacte e abra ctjs.exe',
        linux: 'Linux',
        linuxInstructions: 'Descompacte, marque \'ctjs\' como um executável e rode ./ctjs',
        appImageInstructions: 'Execute o chmod +x nesse arquivo (o tornará um executável) e execute o mesmo. Pode ser utilizado para fazer atualizações também!',
        mac: 'Mac',
        macInstructions: 'Não testado, mas deve funcionar. Use por sua conta e risco!',

        getFromItch: 'ou obtenha o ct.js agora no itch.io'
    },
    de: {
        pageTitle: 'Lade herunter ct.js',
        pageDescription: 'Lade ein gratis 2D Spiele Editor herunter von seiner offiziellen Website.',
        welcomeAboard: 'Willkommen an Bord!',

        downloadx64: 'Herunterladen x64',
        downloadx32: 'Herunterladen x32',

        windows: 'Windows',
        windowsInstructions: 'Windows 7 und höher. Entpacke und führe ctjs.exe aus',
        linux: 'Linux',
        linuxInstructions: 'Entpacke, markiere \'ctjs\' als eine ausführbare Datein und führe ./ctjs aus',
        mac: 'Mac',
        macInstructions: 'Nicht getested, aber es sollte funktionieren. Benutzung auf eigene Gefahr!',

        getFromItch: 'oder hohle dir ct.js jezt auf itch.io',
    },
    it: {
        pageTitle: 'Download ct.js',
        pageDescription: 'Scarica l\'editor di giochi 2D libero e gratuito dal suo sito ufficiale.',
        welcomeAboard: 'Benvenuto a bordo!do!',

        webInstaller: 'Installer web',
        downloadx64: 'Download x64',
        downloadx32: 'Download x32',

        windows: 'Windows',
        windowsInstructions: 'Windows 7 e più recenti. Decomprimi e avvia ctjs.exe',
        linux: 'Linux',
        linuxInstructions: 'Decomprimi, rendi \'ctjs\' eseguibile and avvia ./ctjs',
        appImageInstructions: 'Esegui chmod +x sul file (impostalo com eseguibile) e avvia il file. Può essere usato anche per gli aggiornamenti!',
        mac: 'Mac',
        macInstructions: 'Non testato, ma potrebbe funzionare. Utilizzare a proprio rischio!',

        getFromItch: 'o scarica ct.js adesso da itch.io',
    },
    ru: {
        pageTitle: 'Скачать ct.js',
        pageDescription: 'Скачайте бесплатный редактор 2D игр ct.js с его официального сайта.',
        welcomeAboard: 'Добро пожаловать на борт!',

        downloadx64: 'Скачать x64',
        downloadx32: 'Скачать x32',
        webInstaller: 'Онлайн-установщик',

        windows: 'Windows',
        windowsInstructions: 'Windows 7 или выше. Распаковать архив и запустить ctjs.exe',
        linux: 'Linux',
        linuxInstructions: 'Распакуй, пометь \'ctjs\' исполняемым файлом и запусти ./ctjs',
        appImageInstructions: 'Пометь как исполняемый файл с chmod +x, а потом запусти. Можно использовать для обновлений!',
        mac: 'Mac',
        macInstructions: 'Не тестируется, но работать должно. Используйте на свой страх и риск!',

        getFromItch: 'или скачайте ct.js на itch.io'
    }
}
for (const i in voc) {
    if (i === 'en') {
        continue;
    }
    voc[i] = Object.assign(Object.assign({}, voc.en), voc[i]);
}
module.exports = voc;

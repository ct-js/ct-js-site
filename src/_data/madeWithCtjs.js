const toJSON = require('xml2js').parseString;
const Cache = require('@11ty/eleventy-cache-assets');

const url = 'https://itch.io/games/made-with-ctjs.xml';

module.exports = () => {
    return new Promise((resolve, reject) => {
        return Cache(url, {
            duration: '1h', // save for 1 hour
            type: 'xml'
        })
        .then(data => {
            // turn the feed XML into JSON
            toJSON(data, function (err, result) {
                const games = result.rss.channel[0].item;
                for (const game of games) {
                    game.description = String(game.description).split('<img')[0];
                }
                resolve({'url': url, 'games': games});
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
};

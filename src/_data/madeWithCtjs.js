const axios  = require('axios'),
      toJSON = require('xml2js').parseString;

const url = 'https://itch.io/games/made-with-ctjs.xml';

module.exports = () => {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((response) => {
            // turn the feed XML into JSON
            toJSON(response.data, function (err, result) {
                const games = result.rss.channel[0].item;
                for (const game of games) {
                    game.description = String(game.description).split('<img alt="')[0];
                }
                resolve({'url': url, 'games': games});
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
};

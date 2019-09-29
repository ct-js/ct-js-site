const axios  = require('axios'),
      toJSON = require('xml2js').parseString;

const url = 'https://comigo.itch.io/ct/devlog.rss';

module.exports = () => {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((response) => {
            // turn the feed XML into JSON
            toJSON(response.data, function (err, result) {
                const posts = result.rss.channel[0].item;
                posts.length = Math.min(posts.length, 5);
                for (const post of posts) {
                    post.image = String(post.description).split('<p>')[0];
                }
                resolve({'url': url, 'posts': posts});
            });
        })
        .catch((error) => {
            reject(error);
        });
    });
};

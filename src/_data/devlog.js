const toJSON = require('xml2js').parseString;
const Cache = require('@11ty/eleventy-cache-assets');

const url = 'https://comigo.itch.io/ct/devlog.rss';

module.exports = () => {
    return Cache(url, {
        duration: '1d', // save for 1 day
        type: 'xml'
    })
    .then(data => new Promise(resolve => {
        // turn the feed XML into JSON
        toJSON(data, function (err, result) {
            const posts = result.rss.channel[0].item;
            posts.length = Math.min(posts.length, 5);
            for (const post of posts) {
                post.image = String(post.description).split('<p>')[0];
            }
            resolve({'url': url, 'posts': posts});
        });
    }));
};

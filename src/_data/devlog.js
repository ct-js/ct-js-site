const toJSON = require('xml2js').parseString;
const Cache = require('@11ty/eleventy-cache-assets');

const url = 'https://ctjs.itch.io/ct/devlog.rss';
const urlOld = 'https://comigo.itch.io/ct/devlog.rss';

module.exports = async () => {
    const [dataOld, dataNew] = await Promise.all([
        Cache(urlOld, {
            duration: '1h', // save for 1 hour
            type: 'xml'
        }),
        Cache(url, {
            duration: '1h', // save for 1 hour
            type: 'xml'
        })
    ]);
    const oldPosts = await new Promise(resolve => {
        // turn the feed XML into JSON
        toJSON(dataOld, function (err, result) {
            const posts = result.rss.channel[0].item;
            posts.length = Math.min(posts.length, 5);
            for (const post of posts) {
                post.image = String(post.description).split('<p>')[0];
            }
            resolve(posts);
        });
    });
    const newPosts = await new Promise(resolve => {
        // turn the feed XML into JSON
        toJSON(dataNew, function (err, result) {
            const posts = result.rss.channel[0].item;
            posts.length = Math.min(posts.length, 5);
            for (const post of posts) {
                post.image = String(post.description).split('<p>')[0];
            }
            resolve(posts);
        });
    });
    return { 'url': url, 'posts': [...newPosts, ...oldPosts] };
};

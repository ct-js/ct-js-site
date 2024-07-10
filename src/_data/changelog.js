const Cache = require('@11ty/eleventy-cache-assets');
const url = 'https://api.github.com/repos/ct-js/ct-js/releases?per_page=10';

module.exports = () => Cache(url, {
    duration: '1h', // save for 1 hour
    type: 'json'    // we’ll parse JSON for you
});
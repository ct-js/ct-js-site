const Cache = require('@11ty/eleventy-cache-assets');
const shUrl = 'https://api.github.com/repos/leedigital/ct.js-launcher-in-shell-script/releases/latest';

const getShUrl = (data) => {
    return data.assets.find(asset => asset.name.indexOf('.zip') !== -1).browser_download_url;
};

module.exports = () => new Promise((resolve, reject) => {
    return Cache(shUrl, {
        duration: '1h', // save for 1 hour
        type: 'json'    // we’ll parse JSON for you
    })
    .then(data => {
        resolve({
            "version": data.tag_name,
            "sh": getShUrl(data)
        });
    })
    .catch(reject);
});

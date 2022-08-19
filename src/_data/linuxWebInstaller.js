const Cache = require('@11ty/eleventy-cache-assets');
const appImageUrl = 'https://api.github.com/repos/leedigital/ct-js-appImage/releases/latest';

const getAppImageUrl = (data) => {
    return data.assets.find(asset => asset.name.indexOf('.AppImage') !== -1).browser_download_url;
};

module.exports = () => new Promise((resolve, reject) => {
    return Cache(appImageUrl, {
        duration: '1h', // save for 1 hour
        type: 'json'    // we’ll parse JSON for you
    })
    .then(data => {
        resolve({
            "version": data.tag_name,
            "appImage": getAppImageUrl(data)
        });
    })
    .catch(reject);
});

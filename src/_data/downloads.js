const Cache = require('@11ty/eleventy-cache-assets');
const url = 'https://api.github.com/repos/ct-js/ct-js/releases/latest';

const getUrlForPlatform = (data, name) => {
    return data.assets.find(asset => asset.name.indexOf(name) !== -1).browser_download_url;
};

module.exports = () => new Promise((resolve, reject) => {
    return Cache(url, {
        duration: '1h', // save for 1 hour
        type: 'json'    // we’ll parse JSON for you
    })
    .then(data => {
        resolve({
            "version": data.tag_name,
            "win64": getUrlForPlatform(data, 'win64'),
            "win32": getUrlForPlatform(data, 'win32'),
            "linux64": getUrlForPlatform(data, 'linux64'),
            "linux32": getUrlForPlatform(data, 'linux32'),
            "mac64": getUrlForPlatform(data, 'osx64'),
            // "macarm": getUrlForPlatform(data, 'osxarm')
        });
    })
    .catch(reject);
});

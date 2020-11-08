const axios  = require("axios");
const url = "https://api.github.com/repos/ct-js/ct-js-installer/releases/latest";

const getUrlForPlatform = (data, name) => {
    return data.assets.find(asset => asset.name.indexOf(name) !== -1).browser_download_url;
};

module.exports = () => new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
        const data = response.data;
        resolve({
            "version": data.tag_name,
            "windows": getUrlForPlatform(data, "windows"),
            "linux": getUrlForPlatform(data, "linux"),
            "mac": getUrlForPlatform(data, "mac")
        });
    })
    .catch(reject);
});

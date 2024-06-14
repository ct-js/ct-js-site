module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/ctjsWebInstaller.exe');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.json');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('src/staticApis/*.json');

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes'
        },
        passthroughFileCopy: true
    };
};

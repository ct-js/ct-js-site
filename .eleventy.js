module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.json');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes'
        },
        passthroughFileCopy: true
    };
};

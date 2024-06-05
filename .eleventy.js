module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/ctjsWebInstaller.exe');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.json');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('src/staticApis/ctHome.json');

    // @see my https://github.com/11ty/eleventy/issues/1523#issuecomment-733412641
    global.filters = eleventyConfig.javascriptFunctions;
    eleventyConfig.setPugOptions({
        globals: ['filters']
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes'
        },
        passthroughFileCopy: true
    };
};

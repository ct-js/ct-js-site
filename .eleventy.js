const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji').full;
const mdReplacePlugin = require('@deco313/markdown-it-replace').default();
const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true
})
.use(emoji)
.use(
    mdReplacePlugin
    .addRule(/[\s(](@\w+)/, nickname => `<a href="https://github.com/${nickname.slice(1)}" target="_blank">${nickname}</a>`)
    .addRule(/[\s(](#\d+)/, id => `<a href="https://github.com/ct-js/ct-js/issues/${id.slice(1)}" target="_blank">${id}</a>`)
);

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/ctjsWebInstaller.exe');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.json');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('src/staticApis/*.json');
    eleventyConfig.addPassthroughCopy('src/releaseHelper/*.meat');
    eleventyConfig.addPassthroughCopy('src/releaseHelper/boneyard.browser.min.js');

    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

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

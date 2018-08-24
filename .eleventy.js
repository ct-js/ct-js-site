module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes'
        },
        passthroughFileCopy: true
    };
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addShortcode('image', function (src, alt, width, height) {
        return `<img src="${src}" alt ="${alt}" width ="${height}" height="${height}"/>`;
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
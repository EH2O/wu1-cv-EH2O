module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("src/css");
eleventyConfig.addPassthroughCopy("src/images");
eleventyConfig.addShortcode('image', function(src, alt, width, height){
        return `<img src="${src}" alt ="${alt}" width ="${height}" height="${height}"/>`;
});
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
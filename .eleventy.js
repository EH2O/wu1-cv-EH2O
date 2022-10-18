const markdownIt = require('markdown-it');
const mila = require('markdown-it-link-attributes');
const mia = require('markdown-it-attrs');


module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addShortcode('image', function (src, alt, width, height) {
        return `<img src="${src}" alt ="${alt}" width ="${height}" height="${height}"/>`;
    });
    const markdownItAnchor = require('markdown-it-anchor');
    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    })
        .use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.linkInsideHeader({
                symbol: `<span class="anchor" aria-hidden="true"> </span>`,
                placement: 'before',
            }),
            level: [1, 2, 3, 4],
            slugify: (s) =>
                s
                    .trim()
                    .toLowerCase()
                    .replace(/[\s+~\/]/g, '-')
                    .replace(/[().`,%·'"!?¿:@*]/g, ''),
        })
        .use(mila, {
            pattern: /^https:/,
            attrs: {
                target: '_blank',
                rel: 'noopener',
            },
        })
        .use(mia, {
            allowedAttributes: ['id', 'class'],
        });
    eleventyConfig.setLibrary('md', markdownLibrary);



    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
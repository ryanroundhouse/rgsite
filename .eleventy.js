const moment = require('moment');
const markdownIt = require('markdown-it');
const pluginRss = require('@11ty/eleventy-plugin-rss');

moment.locale('en');

module.exports = function (eleventyConfig) {
  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode('markdown', (content) => {
    return md.render(content);
  });

  eleventyConfig.addFilter('dateIso', (date) => {
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', (date) => {
    return moment(date).utc().format('LL');
  });
  eleventyConfig.addFilter('squash', require('./src/_filters/squash.js'));
  // debugger directive to output data
  eleventyConfig.addFilter('debugger', (...args) => {
    console.log(...args);
  });

  eleventyConfig.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('src/posts/**/blog/*.md').reverse();
  });

  eleventyConfig.addJavaScriptFunction(
    'myResponsiveImage',
    function (src, options) {
      // returns Promise
      return Image(src, options);
    }
  );

  // add rss plugin
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addShortcode('excerpt', (article) => extractExcerpt(article));

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/music');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/webfonts');
  eleventyConfig.addPassthroughCopy('./favicon.ico');

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: '/',
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};

// extract excerpt from post
function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
  ];

  separatorsList.some((separators) => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content
        .substring(startPosition + separators.start.length, endPosition)
        .trim();
      return true; // Exit out of array loop on first match
    }
  });

  return excerpt;
}

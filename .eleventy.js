const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a date filter
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });

  // Add global data
  eleventyConfig.addGlobalData("homeUrl", "/index.html");

  // Copy `css` to `_site/css`
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  // Updated return statement with pathPrefix
  return {
    dir: {
      input: "src",
      output: "public"
    },
    pathPrefix: "/" // Ensures the root path is configured correctly
  };
};







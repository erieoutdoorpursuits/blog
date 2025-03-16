const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a date filter
  eleventyConfig.addFilter("date", (date, format) => {
    return DateTime.fromJSDate(date).toFormat(format);
  });

  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });

  // Add global data
  eleventyConfig.addGlobalData("homeUrl", "/index.html");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};






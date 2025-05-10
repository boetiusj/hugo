const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./hugo_stats.json"], // Path to Hugo's stats file
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements;
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
  },
  safelist: [], // Add any classes you want to keep
});

module.exports = {
  plugins: [
    require("autoprefixer"), // Adds vendor prefixes for cross-browser compatibility
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss, require("cssnano")] : []), // Purge and minify only in production
  ],
};

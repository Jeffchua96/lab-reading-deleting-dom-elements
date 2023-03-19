const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "cypress-watch-and-reload": {
    watch: ["index.html", "main.js", "style.css"],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

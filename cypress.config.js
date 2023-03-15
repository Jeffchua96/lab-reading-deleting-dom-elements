const { defineConfig } = require('cypress')

module.exports = defineConfig({
  'cypress-watch-and-reload': {
    watch: ['index.html', 'main.js', 'style.css'],
  },
})

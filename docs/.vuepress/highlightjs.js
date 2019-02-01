const VueHighlightJS = require('vue-highlight.js')

// Highlight.js languages
const javascript = require('highlight.js/lib/languages/javascript')
const vue = require('vue-highlight.js/lib/languages/vue')

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
// require('highlight.js/styles/default.css')

/*
 * Use Vue Highlight.js
 */
module.exports = ({ Vue, app, router }) => {
  Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
      javascript,
      vue,
    },
  })
}

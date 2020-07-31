const path = require('path')
const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, '../../node_modules/bootstrap/dist/css/bootstrap.css')
const outputFile = path.join(__dirname, '../css/bootstrap.css')

module.exports = class {
  data() {
    return {
      permalink: 'css/bootstrap.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { css } = await sass.render({ file: inputFile })
    const output = new CleanCSS({}).minify(css.toString()).styles

    return `${output}`
  }
}
/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = { baseValue: 16 }) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-rem-to-px',
    Declaration (decl) {
      const unit = 'px'
      decl.value = decl.value.replace(/"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g, (_a, b) => {
        return `${b * opts.baseValue}${b == 0 ? '' : unit}`
      })
    }
  }
}

module.exports.postcss = true

const { resolve } = require('path')
const React = require('react')
const { renderToString } = require('react-dom/server')
const clearModule = require('clear-module')

require('babel-register')({
  presets: [require.resolve('babel-preset-react')],
  extensions: ['.js', '.jsx', '.xat'],
  cache: false
})

global.React = React

/**
 * @param {string} xat Xat file path
 */
const xatToString = xat => renderComponent(require(resolve(xat)))

/**
 * @param {React.Component|Function} component A react component
 */
const renderComponent = component => {
  clearModule.match(/\.xat$/)
  return renderToString(React.createElement(component)).replace(' data-reactroot=""', '')
}

module.exports = xatToString
module.exports.renderComponent = renderComponent

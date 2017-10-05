const { resolve } = require('path')
const React = require('react')
const { renderToString } = require('react-dom/server')

require('babel-register')({ presets: ['react'] })

require.extensions['.xat'] = require.extensions['.js']

global.React = React

/**
 * @param {string} xat Xat file path
 */
const xatToString = xat => renderComponent(require(resolve(xat)))

/**
 * @param {React.Component|Function} component A react component
 */
const renderComponent = component => renderToString(React.createElement(component)).replace(' data-reactroot=""', '')

module.exports = xatToString
module.exports.renderComponent = renderComponent

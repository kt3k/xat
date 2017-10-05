const { describe, it } = require('kocha')
const assert = require('assert')
const xat = require('./')

describe('xat', () => {
  it('renders the given path as xat', () => {
    assert.strictEqual(xat('example.xat'), '<div class="wrapper"><div><p>Hello, xat!</p></div></div>')
  })

  describe('.renderComponent', () => {
    it('renders the given react component with empty props', () => {
      const result = xat.renderComponent(() => React.createElement('div', {}, 'abc'))

      assert.strictEqual(result, '<div>abc</div>')
    })
  })
})

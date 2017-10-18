# xat v1.1.1

> JSX as template - React based template engine

Supports Node.js >= 6.x

Pronounced like /zat/.

`xat` is template engine based on [react][] technology. You can use react components for creating pure static html.

# `.xat` file

`.xat` file is just like a `.js` file which exports a react component.

```js
module.exports = props => (
  <div>
    <p>
      Hello, xat!
    </p>
  </div>
)
```

`.xat` file can require another `.xat` file.

wrapper.xat

```js
module.exports = props => (
  <div className="wrapper">
    {props.children}
  </div>
)
```

example.xat

```js
const Wrapper = require('./wrapper')

module.exports = props => (
  <Wrapper>
    <div>
      <p>
        Hello, xat!
      </p>
    </div>
  </Wrapper>
)
```

The above `example.xat` renders to:

```
<div class="wrapper"><div><p>Hello, xat!</p></div></div>
```

# API

```js
const xat = require('xat')
```

## xat(filename)

- @param {string} filename The filename

This renders the given filename as .xat template.

# CLI

Install via npm:

    npm i -g xat

This installs `xat` command. This command takes one argument and renders the given file as .xat template.

```
Usage: xat <input.xat>

Options:
  -h, --help         Shows help message
  -v, --version      Shows version number
```

# License

MIT

[react]: https://facebook.github.io/react

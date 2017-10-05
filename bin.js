#!/usr/bin/env node

const chalk = require('chalk')
const pkg = require('./package')

require('minimisted')(argv => {
  const version = argv.version
  const help = argv.help
  const file = argv._[0]

  if (version) {
    console.log(`${pkg.name}@${pkg.version}`)
    process.exit(0)
  }

  if (help) {
    console.log(`
Usage: ${pkg.name} <input.xat>

Options:
  -h, --help         Shows help message
  -v, --version      Shows version number
    `.trim())
    process.exit(0)
  }

  if (!file) {
    console.log(`${chalk.red('Error:')} no input file`)
    process.exit(1)
  }

  console.log(xatToString(file))
}, {
  boolean: [
    'version',
    'help'
  ],
  alias: {
    v: 'version',
    h: 'help'
  }
})

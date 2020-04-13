#!/usr/bin/env node
'use strict'
const fs = require('fs')
const meow = require('meow')
const envrcToInterface = require('./dest').default

const cli = meow(`
  Usage
  $ envrc-to-interface <input>

  Examples
  $ envrc-to-interface .envrc

`)

const input = cli.input[0]

if (!input) {
  console.log('required .envrc')
  console.log(`
  Examples
  $ envrc-to-interface .envrc
  `)
  process.exit(1)
}

const file = fs.readFileSync(input, 'utf8')
const outoput = envrcToInterface(file)
console.log(outoput)

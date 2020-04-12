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

const file = fs.readFileSync(cli.input[0], 'utf8')
const outoput = envrcToInterface(file)
console.log(outoput)

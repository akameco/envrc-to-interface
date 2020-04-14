#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'fs'
import meow from 'meow'
import envrcToInterface from '.'

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

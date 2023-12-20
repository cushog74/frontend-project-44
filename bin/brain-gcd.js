#!/usr/bin/env node
const readline = require('readline');
const { playGame } = require('../src/games/gcd');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });

playGame(rl);

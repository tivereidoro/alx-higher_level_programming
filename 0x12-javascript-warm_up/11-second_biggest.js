#!/usr/bin/node
'use strict';

function secondMax (arg) {
  if (arg.length < 1 || arg.length === 1) {
    return 0;
  }
  arg.sort();
  return arg[arg.length - 2];
}

const ARGUMENTS = process.argv.slice(2);
console.log(secondMax(ARGUMENTS));

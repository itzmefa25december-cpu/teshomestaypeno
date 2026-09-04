#!/usr/bin/env node

const rawArgs = process.argv.slice(2);
const filteredArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--host') {
    filteredArgs.push('-H');
  } else if (arg.startsWith('--host=')) {
    filteredArgs.push('-H', arg.slice(7));
  } else {
    filteredArgs.push(arg);
  }
}

if (!filteredArgs.includes('-p') && !filteredArgs.includes('--port')) {
  filteredArgs.push('-p', '3000');
}
if (!filteredArgs.includes('-H') && !filteredArgs.includes('--hostname')) {
  filteredArgs.push('-H', '0.0.0.0');
}

process.argv = [
  process.argv[0],
  require.resolve('next/dist/bin/next'),
  'dev',
  ...filteredArgs,
];

require('next/dist/bin/next');

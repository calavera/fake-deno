const process = require('process');
const { exec } = require('node:child_process');
process.env.DENO_DIR = `${process.env.PWD}/cache`;

process.chdir('app');
exec('deno run --allow-net --allow-env --allow-read main.ts', { port: 3000 });

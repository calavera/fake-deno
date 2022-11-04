const { cwd, chdir } = require('node:process');
const { exec } = require('node:child_process');
const { rename } = require('node:fs');

rename(`${cwd()}/cache`, '/tmp/cache', (error) => {
  if (error) throw error;
});
process.env.DENO_DIR = '/tmp/cache';

console.log('cache dir:', process.env.DENO_DIR);

chdir('app');
const command = '../bin/deno run --allow-all main.ts';
const { stdout, stderr } = exec(command, { port: 3000 }, (error) => {
  if (error) throw error;
});

stdout.on('data', (data) => {
  console.log(data.toString());
});

stderr.on('data', (data) => {
  console.error(data.toString());
});

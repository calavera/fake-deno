const { cwd, chdir } = require('node:process');
const { exec } = require('node:child_process');
const { cp } = require('node:fs');

process.env.DENO_DIR = '/tmp/cache';
process.env.XDG_CACHE_HOME = '/tmp';

const command = 'bin/deno run --allow-all deno-server.js';
const { stdout, stderr } = exec(command, { port: 3000 }, (error) => {
  if (error) throw error;
});

stdout.on('data', (data) => {
  console.log(data.toString());
});

stderr.on('data', (data) => {
  console.error(data.toString());
});

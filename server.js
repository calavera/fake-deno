const process = require('process');
const { exec } = require('node:child_process');
process.env.DENO_DIR = `${process.env.PWD}/cache`;

process.chdir('app');
const command = '../bin/deno run --allow-net --allow-env --allow-read main.ts';
const { stdout, stderr } = exec(command, { port: 3000 }, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
});

stdout.on('data', (data) => {
  console.log(data.toString());
});

stderr.on('data', (data) => {
  console.error(data.toString());
});

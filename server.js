const { cwd, chdir } = require('node:process');
const { exec } = require('node:child_process');

process.env.DENO_DIR = `${cwd()}/cache`;
console.log('cache dir:', process.env.DENO_DIR);

chdir('app');
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

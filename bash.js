let directory = require('./pwd');
let ls = require('./ls');
let readFileFSA = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    directory();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    let arrArg = cmd.split(' ');
    arrArg.shift();
    for (let i = 0; i < arrArg.length; i++) {
      readFileFSA(arrArg[i]);
    }
  }
});

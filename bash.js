let directory = require('./pwd')
let ls = require('./ls')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd'){
    directory();
  }
  else if (cmd === 'ls'){
    ls();
  }

});

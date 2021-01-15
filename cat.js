const fs = require('fs');

function readFileFSA(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      process.stdout.write('error!');
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }
  });
}

module.exports = readFileFSA;

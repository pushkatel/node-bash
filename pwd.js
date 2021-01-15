const done = require('./bash');

function getDirectory() {
  done(process.cwd());
}

module.exports = getDirectory;

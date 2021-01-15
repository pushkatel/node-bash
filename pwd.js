function getDirectory() {
  process.stdout.write(process.cwd());
  process.stdout.write('prompt > ');
}

module.exports = getDirectory;

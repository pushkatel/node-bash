const request = require('request');

function getWebsite(url) {
  request(url, (err, reps, body) => {
    if (err) {
      process.stdout.write(typeof url);
      throw err;
    } else {
      //process.stdout.write(data);
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = getWebsite;

const mm = require('music-metadata')
const util = require('util')
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

mm.parseFile("C:/Users/Rahul Mishra/Desktop/music/These Drugs.mp3")
  .then( metadata => {
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  })
  .catch( err => {
    console.error(err.message);
  });

  clear();

console.log(
  chalk.yellow(
    figlet.textSync('MetaEditor', { horizontalLayout: 'full' })
  )
);
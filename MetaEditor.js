const mm = require('music-metadata')
const util = require('util')

mm.parseFile("C:/Users/Rahul Mishra/Desktop/music/These Drugs.mp3")
  .then( metadata => {
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  })
  .catch( err => {
    console.error(err.message);
  });
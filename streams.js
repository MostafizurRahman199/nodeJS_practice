const fs = require('fs');
const readStream = fs.createReadStream('./blog3.txt', { encoding: 'utf-8' });

const writetream = fs.createWriteStream('./blog4.txt');

// readStream.on('data', (chunk) => {

//     console.log('----New Chunk----');

//     console.log(chunk);

//     writetream.write('\nNew chunk\n');
//     writetream.write(chunk);
// })

//---------piping

readStream.pipe(writetream);
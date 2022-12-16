// console.log("I want to be a programmer");
// const fs = require('fs').writeFileSync;
// fs("code.txt", "I want to be a programmer");
// console.log(__filename);



// function dataControl(req, res) {
//     res.write("<h1>Why you call me?</h1>")
//     console.log("Success");
//     res.end();
// }

// const http = require('http');
// http.createServer(dataControl).listen(3000);

// const colors = require('color');
// console.log("package".red);

// const chalk = require('chalk');
// console.log(chalk.blue("Hello world!"));


// console.log(20 + 30 + 40);
// console.log(20 + 30 + 100);


// const http = require('http');
// const data = require('./data');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application\json'
//     });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);


// const fs = require('fs');
// const input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('invalid input');
// }
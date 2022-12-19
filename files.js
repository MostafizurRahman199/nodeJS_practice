const fs = require('fs');
//reading files 
// fs.readFile('./blog.txt', 'utf-8', (err, data) => {
//     if (err) {

//         console.log(err)
//     }
//     console.log(data);
// })


// fs.readFile('./blog.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);

//     }
// })

// console.log("Last line");


//------------------writing files

// fs.writeFile('./blog.txt', ' I Love to recite Quran', () => {
//     console.log('File was written');
// })
// fs.writeFile('./blog2.txt', ' I Love to recite Quran', () => {
//     console.log('File was written');
// })


//-----------------directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('folder created');
//         }
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('folder deleted')
//         }
//     })
// }




//-------------------------------detecting files

if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('file deleted');
        }
    })
}
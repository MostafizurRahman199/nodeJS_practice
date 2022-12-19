const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    res.setHeader('content-type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        // console.log(data.toString());
        if (err) {
            console.log(err);
            res.end();
        } else {

            res.write(data);
            res.end();
        }
    })

})

server.listen(3000, 'localhost', () => {
    console.log('Listing for requesting on port 3000');
})
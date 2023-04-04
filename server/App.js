const log = console.log;
const fs = require('fs');
const path = require('path');

var dirPath, fileExt, contentType, origin;

origin = 'http://127.0.0.1:5500';

dirPath = path.join(__dirname, 'views');
let filePath = path.join(__dirname, 'views', 'response.html');

const http = require('http').createServer((request, response) => {

    log(`${request.url}\t${request.method}`);

    switch (fileExt) {
        case '.css':
            contentType = 'text/css';
            break;

        default:
            contentType = 'text/html';
    }

    fileExt = path.extname(request.url);

    if (request.url === '/') {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) console.error(`${err.name}\t${err.message}`);
            response.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': origin
            });
            response.end(data);
        });
    }

}).listen(8000);
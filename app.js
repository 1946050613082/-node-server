const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        serveStaticFile(res, 'index.html', 'text/html');
    } else if (req.url.match(/.css$/)) {
        serveStaticFile(res, req.url.slice(1), 'text/css');
    } else if (req.url.match(/.js$/)) {
        serveStaticFile(res, req.url.slice(1), 'text/javascript');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Archivo no encontrado');
    }
});

function serveStaticFile(res, file, contentType) {
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Archivo no encontrado');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

server.listen(3000, function() {
    console.log('Servidor en funcionamiento en el puerto 3000');
});

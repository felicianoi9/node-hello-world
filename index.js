const http = require('http');

const host = '127.0.0.1';
const port = 3456;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Eustaquio');
});

server.listen(port, () => {
    console.info(`Running in  http://${host}:${port} ...`)
})
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello Programmer!');
    res.write('what are going on this time!');
    res.end();
});
// server.on('connection', () => {
//     console.log('New connection.....');
// });
server.listen(3000);
console.log('listening on port 3000 ');

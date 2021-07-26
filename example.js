// read and write stream
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream('./bigData.txt', 'utf8');
    myReadStream.pipe(res);
});
// server connection
server.listen(3000);
console.log('server port 3000 is running now');

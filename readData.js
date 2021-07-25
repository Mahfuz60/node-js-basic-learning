// server
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
        <html>
            <head>
                <title>Form</title>
            
            </head>
        
        `);
        res.write(`
        <body>
            <form method="post" action='/process'>
                <input name="message"/>
            </form>
        </body>
        
        `);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk.toString());
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('streaming finished');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        });
        res.write('Thank you for your Submitting');
        res.end();
    } else {
        res.write('This is Not found');
        res.end();
    }
});
server.listen(3000);
console.log('server listening on port 3000');
// const fs = require('fs');

// const ourReadStream = fs.createReadStream('./bigData.txt', 'utf8');
// ourReadStream.on('data', (data) => {
//     console.log(data);
// });

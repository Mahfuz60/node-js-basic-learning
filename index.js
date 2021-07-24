// const people = require('./people');

// console.log(people);

const path = require('path');

const fileName1 = path.basename('/home/mahfuz/Web-Development-Course/Node-Js-Basic/index.js');
const fileName2 = path.dirname('/home/mahfuz/Web-Development-Course/Node-Js-Basic/index.js');
const fileName3 = path.parse('/home/mahfuz/Web-Development-Course/Node-Js-Basic/index.js');
// console.log(fileName1);
// console.log(fileName2);
// console.log(fileName3);
const os = require('os');

// console.log(os.platform());
// console.log(os.cpus());

const fs = require('fs');

fs.writeFileSync('myFile.txt', 'Hello World my first Program');
fs.readFile('myFile.txt', (err, data) => {
    // console.log(data.toString());
});
// console.log('Hello I am Mahfuz Alam');

// EventEmitter
const EventEmitter = require('events');

const emitter = new EventEmitter();
// raise an Event
emitter.emit('bellRing');

// const log = require('./logger');

// console.log(log);
// log('message');

// Path Module
const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);

// OS Module
const os = require('os');

const totalMemory = os.totalmem();
const freeMemeory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemeory}`);

// File System Module
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

// Event Module

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listerner called', arg);
});

logger.log('message');

// Raise: loggin (data: message)

// emit : Making a noise, produce - signalling

// HTTP Module

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/course') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');

// console.log(module);
//module is not global object
//every file is a module
// Module {
//     id: '.',
//     path: '/Users/Raynaldo/Documents/Code/node/node-first-app',
//     exports: {},
//     parent: null,
//     filename: '/Users/Raynaldo/Documents/Code/node/node-first-app/app.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/Raynaldo/Documents/Code/node/node-first-app/node_modules',
//       '/Users/Raynaldo/Documents/Code/node/node_modules',
//       '/Users/Raynaldo/Documents/Code/node_modules',
//       '/Users/Raynaldo/Documents/node_modules',
//       '/Users/Raynaldo/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

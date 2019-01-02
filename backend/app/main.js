/**
 * Module dependencies.
 */
const app = require('./src/app');
const http = require('http');

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => console.log('Listening on ' + port));

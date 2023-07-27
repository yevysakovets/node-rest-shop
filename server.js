const http = require('http'); //imports http
const app = require('./app');

const port = process.env.PORT || 3000; //create port

const server = http.createServer(app); //create server

server.listen(port); //runs the server on our port
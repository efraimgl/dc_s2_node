const http = require('http');

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.end('Hello Node!\n');
};

const server = http.createServer(requestHandler);

module.exports = server;

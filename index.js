var http = require('http');
const fs = require('fs');
let rawdata = fs.readFileSync('./config.json');

http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(rawdata);
  })
  .listen(process.env.PORT || 3000);

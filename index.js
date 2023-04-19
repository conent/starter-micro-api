var http = require('http');
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.parse(rawdata));
    res.end();
}).listen(process.env.PORT || 3000);
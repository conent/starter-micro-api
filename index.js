var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.setHeader('Content-Type', 'application/json');
    res.write(config.json);
    res.end();
}).listen(process.env.PORT || 3000);
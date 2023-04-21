var http = require('http');
const fs = require('fs');

// Read the config file
let rawdata = fs.readFileSync('./config.json');

http
  .createServer(function (req, res) {
    var url = req.url;

    var url = req.url;
    if(url ==='/about'){
        console.log (req.url)
        res.setHeader('Content-Type', 'text/html');
        res.write("hey"); //write a response
        res.end(); //end the response
    }
    else if(url ==='/config'){
      res.setHeader('Content-Type', 'application/json');
      res.end(rawdata);
    } else{
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1>Hello World!<h1>'); //write a response
      res.end(); //end the response
    }
  })
  .listen(process.env.PORT || 3000);

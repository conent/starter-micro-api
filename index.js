var http = require('http');
const fs = require('fs');

// Read the config file
let rawdata = fs.readFileSync('./config.json');

var faunaDb = require('faunadb')
var fQuery = faunaDb.query

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
    } else if(url ==='testFauna'){
      var client = new faunaDb.Client({ 
        secret: 'fnAFCDv6dmAAzPS1JG9-TrDSx3Do3M5Q0gOMhScV',
        endpoint: 'https://dashboard.fauna.com/'
      })
      q.Create(
        q.Collection('ChiudiLaPorta'),
        { data: { testField: 'testValue' } }
      )
      .then(function (res) { console.log('Result:', res) })
      .catch(function (err) { console.log('Error:', err) })
    } else{
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1>Hello World!<h1>'); //write a response
      res.end(); //end the response
    }
  })
  .listen(process.env.PORT || 3000);

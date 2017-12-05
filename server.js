var fs = require('fs');
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var rd = fs.createReadStream(__dirname + '/index.html', 'utf8');
    rd.pipe(res);
    //res.end('Hello NodeJS');
}).listen(8081, '127.0.0.1');
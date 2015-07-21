// Write a http server that listens on the port of argv[2] and returns the file of argv[2]. fs.createReadStream() must be used to return the file.

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);

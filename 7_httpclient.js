// Print a new line for every data event from an http get request for a url(arg1)

http = require('http');

http.get(process.argv[2], printData);

function printData(response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log(chunk);
    });
}

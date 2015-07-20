// Collect all data from an http request and print the number of characters sent followed by the all the chars on one line


var http = require('http');

http.get(process.argv[2], function(res) {
    var chars = '';

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        chars += chunk;
    });

    res.on('end', function () {
        console.log(chars.length);
        console.log(chars);
    });

});

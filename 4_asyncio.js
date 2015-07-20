// Output the number of newlines (\n) in a file passed as an argument

var fs = require('fs');

var filePath = process.argv[2];

//Asyc call with callback
fs.readFile(filePath, function(err, data){ countAndPrintNewLines(err, data) } );

//My function to be called when fs.readFile finishes
function countAndPrintNewLines(err, file) {

    var bufferLength = file.length;

    var newlineCount = 0;

    for (var i = 0; i < bufferLength; i++) {
        // 10 is the ascii code for a newline
        if (file[i] === 10) {
            newlineCount++;
        }
    }

    console.log(newlineCount);
}

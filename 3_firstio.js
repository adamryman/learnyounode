
var fs = require('fs');

var filePath = process.argv[2];

// Synchronous
var file = fs.readFileSync(filePath);
// file is buffer, which buffer[i] will give you the uint8 of i

var bufferLength = file.length;

var newlineCount = 0;

for (var i = 0; i < bufferLength; i++) {
    if (file[i] === 10) {
        newlineCount++;
    }
}

console.log(newlineCount);

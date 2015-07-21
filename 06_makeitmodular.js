// Same as last, but now modules!

var extensionPrinter = require('./6__module.js');

extensionPrinter(process.argv[2], process.argv[3], printList);

function printList(err, list) {
    if(err)
        return console.error('ERROR:', err);
    list.forEach(function(value) {
        console.log(value);
    });
}

// Official Solultion
//
// I did not know about Array.prototype.filter()
//
// list = list.filter(function (file) {
//     return path.extname(file) === '.' + filterStr
// })

// Prints a list of files in a directory(arg1) that have the specified file extension(arg2)

var fs = require('fs');
var path = require('path');

var directoryPathString = process.argv[2];
var extension = process.argv[3];
// Adding a . to the extension because the passed value will not be prefixed with it and it will make comparsion with path.extname easier
extension = '.' + extension;

fs.readdir(directoryPathString, function(err, list) {
    for(var i = 0; i < list.length; i++) {
        var fileEx = path.extname(list[i]);
        if(fileEx === extension) {
            console.log(list[i]);
        }
    }
});

// Offical solution, I should have done the foreach
//
// var fs = require('fs')
//     var path = require('path')
//
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })
//

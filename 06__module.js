// Same as last, but now modules!

var fs = require('fs');
var path = require('path');


module.exports = function (directory, extension, callback) {

    // Adding a . to the extension because the passed value will not be
    // prefixed with it and it will make comparsion with path.extname easier
    extension = '.' + extension;

    var files = [];

    fs.readdir(directory, function(err, list) {
        if (err)
            return callback(err);

        for (var i = 0; i < list.length; i++) {
            var fileEx = path.extname(list[i]);
            if (fileEx === extension) {
                files.push(list[i]);
            }
        }
        callback(null, files)
    });
}



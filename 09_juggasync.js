// Given 3 urls, need to print out each of their contents, using asyc http, but
// in the order their are passed

var http = require('http');

var valuesInOrder = [];
var count = 0;

for (var i = 2; i < 5; i++) {
    // Creating function scope in order to pass the i along as for loops do not
    // have scope in js
    (function(url, order) {
        http.get(url, function (res) {
            processResponce(res, order);
        });
    })(process.argv[i], i-2);
}

function processResponce(res, order) {
    var chars = '';

    res.setEncoding('utf8')
    res.on('data', function (chunk) {
        chars += chunk;
    });

    res.on('end', function() {
        callBackCounter(chars, order);
    });
}

function callBackCounter(chars, order) {
    valuesInOrder[order] = chars;
    count++;
    if (count === 3) {
        valuesInOrder.forEach(function (value) {
            console.log(value);
        });
    }
}

// Offical solution
//
//    var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//
//    function printResults () {
//      for (var i = 0; i < 3; i++)
//        console.log(results[i])
//    }
//
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//
//          results[index] = data.toString()
//          count++
//
//          if (count == 3)
//            printResults()
//        }))
//      })
//    }
//
//    for (var i = 0; i < 3; i++)
//      httpGet(i)

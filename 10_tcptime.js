// Return the current time on the tcp port provided (arg1) in the YYYY-MM-DD hh:mm format.

var net = require('net');
var server = net.createServer(function (socket) {
    var fullDate = new Date();
    var year = fullDate.getFullYear().toString();
    var month = (fullDate.getMonth() + 1).toString();
    var day = fullDate.getDate().toString();
    var hour = fullDate.getHours().toString();
    var min = fullDate.getMinutes().toString();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day =  '0' + day;
    }

    if (hour.length < 2) {
        hour =  '0' + hour;
    }

    if (min.length < 2) {
        min =  '0' + min;
    }

    var dateString = year + '-' + month + '-' + day + ' ' + hour + ':' + min + "\n";
    socket.end(dateString);
});

server.listen(process.argv[2]);

// Official solution
// I like how they pulled the adding zeros into a helper function, should have done that.
//
//    var net = require('net')
//
//    function zeroFill(i) {
//      return (i < 10 ? '0' : '') + i
//    }
//
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//    }
//
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
//
//    server.listen(Number(process.argv[2]))
//

// http server that response to GET requests to path /api/parsetime. request
// should have a query string with key iso and and ISO-format time. It should
// respond with JSON with keys hour, minute, and second. There should also be a
// path /api/unixtime that also returns JSON but with the key unixtime and with
// the unix time stamp as the value. The server should listen on the port
// provided by the argv[2]

var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    if (request.method != 'GET')
        return res.end('need get yo\n');
    var urlobj = url.parse(request.url, true);
    var pathname = urlobj.pathname;
    var query = urlobj.query;

    if (pathname === '/api/parsetime') {
        response.write(getHMSJSON(query.iso));
    } else if (pathname === '/api/unixtime') {
        response.write(getUTS(query.iso));
    }

    response.end();
});


server.listen(process.argv[2]);

function getHMSJSON(datestring) {
    var fullDate = new Date(datestring);
    var HMS = {
        "hour" : fullDate.getHours(),
        "minute" : fullDate.getMinutes(),
        "second" : fullDate.getSeconds()
    }
    return JSON.stringify(HMS);
}

function getUTS(datestring) {
    var fullDate = new Date(datestring);
    return JSON.stringify({ "unixtime" : fullDate.getTime() });
}

// Official solution
// I should take a look how they do the testing for the url.
//
//
//    var http = require('http')
//    var url = require('url')
//
//    function parsetime (time) {
//      return {
//        hour: time.getHours(),
//        minute: time.getMinutes(),
//        second: time.getSeconds()
//      }
//    }
//
//    function unixtime (time) {
//      return { unixtime : time.getTime() }
//    }
//
//    var server = http.createServer(function (req, res) {
//      var parsedUrl = url.parse(req.url, true)
//      var time = new Date(parsedUrl.query.iso)
//      var result
//
//      if (/^\/api\/parsetime/.test(req.url))
//        result = parsetime(time)
//      else if (/^\/api\/unixtime/.test(req.url))
//        result = unixtime(time)
//
//      if (result) {
//        res.writeHead(200, { 'Content-Type': 'application/json' })
//        res.end(JSON.stringify(result))
//      } else {
//        res.writeHead(404)
//        res.end()
//      }
//    })
//    server.listen(Number(process.argv[2]))

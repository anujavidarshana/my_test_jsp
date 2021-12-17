var http = require('http');
var url = require('url');
var child_process = require('child_process');
var exec = require('exec');
var vm = require('vm');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text\n/plain" });
    var u = url.parse(req.url);
    if(req.url.indexOf("ddd") != -1) {
        req.on('readable', function() {
            var ddd = req.read();

            console.log(ddd.toJSON());  // cleansed
            var fdata = fs.readFileSync(ddd.toJSON().data.toString());  // CWEID 73
            util.exec(ddd.toJSON().data.toString());  // CWEID 78

            res.end();
        });
    } else {
        
        var v = url.parse('http://www.yahoo.com/foo?bar=baz');
        res.write(v.query);
        req.once('data', function(chunk) {
            console.log("chunk: " + chunk);     // CWEID 117
            res.end('hi\n');
        });
    }
}).listen(1337, '127.0.0.1');

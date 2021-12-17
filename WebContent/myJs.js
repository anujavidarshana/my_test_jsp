var http = require('http');
var url = require('url');
var exec = require('exec');
var fs = require('fs');

// addEventListener()
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type" : "text\n/plain"
    });
    var u = url.parse(req.url);
    if (req.url.indexOf("ddd") != -1) {
        req.on('readable', function() {
            var ddd = req.read();
            console.log(dddd); // CWEID 117
            console.log(ddd.toJSON()); // cleansed
            var fdata = fs.readFileSync(ddd.toJSON().data.toString()); // CWEID 73
            util.exec(ddd.toJSON().data.toString()); // CWEID 78
            exec(ddd.toJSON().data.toString()); // CWEID 78
            res.end();
        });
    }
}).listen(1337, '127.0.0.1');
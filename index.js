var http = require('http');
var fs = require('fs');
var url = require('url');

const app = http.createServer(function(req, res){
    var _url = req.url
    var queryData = url.parse(_url, true).query;
    var corp = queryData.corp;
    var tname = queryData.tname;
    var wgroup = queryData.wgroup;
    var seq = queryData.seq;
    var filepath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq + ".pdf";

    console.log(filepath);

    fs.readFile(filepath, 'utf8', function(err, data){
        var template = "<!doctype html><html><title>급여명세서</title><meta charset='utf-8'></head><body>${data}</body></html>";
        res.send(template);
    });
});

app.listen(3000, () => console.log("Server Listener"));
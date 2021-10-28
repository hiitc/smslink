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
        res.writeHead(200, {"Content-Type": "application/pdf; charset=utf-8"});
        res.write("<!doctype html>");
        res.write("<head>");
        res.write("    <title>급여명세서</title>");
        res.write("</head>");
        res.write("<body>");
        res.write(data);
        res.write("</body>");
        res.write("</html>");
        
        res.end();
    });
});

app.listen(3000, () => console.log("Server Listener"));
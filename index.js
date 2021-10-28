var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express')
var app = express();

app.get(function(req, res){
    var _url = req.url
    var queryData = url.parse(_url, true).query;
    var corp = queryData.corp;
    var tname = queryData.tname;
    var wgroup = queryData.wgroup;
    var seq = queryData.seq;
    var filepath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq;

    console.log(filepath);

    res.write("<!doctype html>");
    res.write("<html>");
    res.write("<head>");
    res.write('<meta charset="UTF-8">');
    res.write("    <title>급여명세서</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<iframe src='./viewer.html?file=" + filepath + ".pdf'/>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});

app.listen(3000, () => console.log("Server Listener"));
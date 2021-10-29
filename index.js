var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();

app.get('/', function(req, res){
    var _url = req.url
    var queryData = url.parse(_url, true).query;
    var corp = queryData.corp;
    var tname = queryData.tname;
    var wgroup = queryData.wgroup;
    var seq = queryData.seq;
    var filepath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq;

    console.log(filepath);
    
    res.writeHead(200);
    res.end('<iframe src="web/viewer.html?file=30244.pdf" style="width:500px; height:300px; border:1px solid #00c;"></iframe>');
    //res.sendFile(__dirname + './viewer.html?file=' + filepath + '.pdf');
});

app.listen(3000, () => console.log("Server Listener"));
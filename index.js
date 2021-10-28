const { response } = require("express");
const express = require("express");
const fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    var corp = req.query.corp;
    var tname = req.query.tname;
    var wgroup = req.query.wgroup;
    var seq = req.query.seq;

    var filepath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq + ".pdf";

    console.log(filepath);

    fs.readFile(filepath, 'utf-8', function(err, data){
        var template = "<!doctype html><html><title>급여명세서</title><meta charset='utf-8'></head><body>${data}</body></html>";
        res.send(template);
    });
});

app.listen(3000, () => console.log("Server Listener"));
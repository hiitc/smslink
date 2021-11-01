var express = require('express')
var app = express()

app.get('/', function(req, res){
	var corp = req.query.corp;
	var tname = req.query.tname;
	var wgroup = req.query.wgroup;
	var seq = req.query.seq;

	var fpath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq

	res.append("<script src='script.js'></script>");
	res.append("<iframe src='" + fpath + "' id='iframeid'></iframe>");
	res.send();

	console.log(fpath);
})

app.listen(3000, function(){
	console.log("Server Listener Port 3000")
});

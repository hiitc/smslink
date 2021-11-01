var fs = require('fs')
var express = require('express')
var contentDis = require('content-disposition')
var app = express()

/*
app.get('/', function(req, res){
	var corp = req.query.corp;
	var tname = req.query.tname;
	var wgroup = req.query.wgroup;
	var seq = req.query.seq;

	var fpath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq

	//fs.createReadStream(fpath).pipe(fs.createWriteStream('./web/' + seq + '.pdf'));

	res.sendFile(__dirname + "/index.html");// + seq + ".pdf");

	console.log(fpath);
})
*/

app.get('/', function(req, res){
	var corp = req.query.corp;
	var tname = req.query.tname;
	var wgroup = req.query.wgroup;
	var seq = req.query.seq;

	var fpath = "/home/ftp-user/ftp-file/" + corp + "/" + tname + "/" + wgroup + "/" + seq
//	var fpath = "30244.pdf";

	fs.readFileSync(fpath, "utf-8", function(err, data){
		res.writeHead(200, {"Content-Type": "application/octet-stream"});
		res.writeHead({"Content-Disposition": contentDis(fpath)});
		res.write(data);
		res.end();
	});
})

app.listen(3000, function(){
	console.log("Server Listener Port 3000");
})

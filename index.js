const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello SMS-LINK");

    var fs = require('fs')

    fs.readFile('/home/ftp-user/ftp-file/HWANGBO/L_LABOR_BASIC/L001/195124', 'utf-8', function(err, data){
        console.log(data);
    });

    var myPath = path.normalize('./');
    console.log(myPath);
});

app.listen(3000, () => console.log("Server Listener"));
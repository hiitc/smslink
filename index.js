const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello SMS-LINK");

    var linkAddr = "/home/ftp-user/ftp-file/HWANGBO/L_LABOR_BASIC/L001/195124.pdf";

    console.log(linkAddr);
});

app.listen(3000, () => console.log("Server Listener"));
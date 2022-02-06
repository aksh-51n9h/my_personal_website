const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", function (_, res) { 
    res.sendFile(__dirname +  "/index.html");
});

app.listen(port, function () {
    console.log("Server started at port no. " + port);
});
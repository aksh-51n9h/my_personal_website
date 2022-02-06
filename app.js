const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.PORT || 3000;

const navItems = ["About", "Work", "Contact"];

app.get("/", function (_, res) { 
    res.render("index", {navItems: navItems});
});

app.listen(port, function () {
    console.log("Server started at port no. " + port);
});
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.PORT || 3000;

const navItems = ["About", "Work", "Contact"];

app.get("/", function (_, res) {
    res.render("index", { navItems: navItems, activeFlag: "active" });
});

app.route("/contact")
    .post(function (req, res) {
        const name = req.body.sender_name;
        const email = req.body.sender_email;
        const message = req.body.message;

        console.log(name + "," + email + "," + message);

        res.send("");
    });

app.listen(port, function () {
    console.log("Server started at port no. " + port);
});
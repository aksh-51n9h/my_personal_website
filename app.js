require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mogoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const mongodbUrl = process.env.MONGODB_URL
mogoose.connect(mongodbUrl);

const messageSchema = new mogoose.Schema({
    name: String,
    email: String,
    message: String,
    date: Date
});

const Message = mogoose.model("Message", messageSchema);

const port = process.env.PORT || 3000;

const navItems = ["About", "Work", "Contact"];
const skills = ["Mobile Development", "Flutter", "Dart", "Web Development", "HTML/CSS", "Bootstrap", "Javascript", "NodeJS", "EJS", "ReactJS", "SQL", "MongoDB", "Mongoose", "Firebase", "Heroku", "Github"];

const year = new Date().getFullYear();

app.get("/", function (_, res) {
    res.render("index", { navItems: navItems, skills: skills, year: year });
});

app.route("/contact")
    .post(function (req, res) {
        const name = req.body.sender_name;
        const email = req.body.sender_email;
        const messageText = req.body.message;

        const message = new Message({
            name: name,
            email: email,
            message: messageText,
            date: new Date()
        });

        message.save(function (err) {
            if (err) {
                res.send("Some error occured!");
            } else {
                res.send("Message sent successfully!");
            }
        });
    });

app.listen(port, function () {
    console.log("Server started at port no. " + port);
});
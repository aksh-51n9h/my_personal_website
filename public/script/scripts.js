let submitButton = document.getElementById("submit");

let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");

let messageTextarea = document.getElementById("messageTextarea");

$("#contact-form").submit(function (event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
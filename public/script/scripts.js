let submitButton = document.getElementById("submit");

submitButton.disabled = true;

let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");

let messageTextarea = document.getElementById("messageTextarea");

messageTextarea.addEventListener("keypress", function (event) { 

    if (messageTextarea.value.length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});
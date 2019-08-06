var messageParagraph = document.getElementById("message");
var box = document.getElementById("box");

var gameStarted = false;
var points = 0;
var intervalId = null;

box.addEventListener("click", clickBox);

function clickBox() {
    if (gameStarted == false) {
        gameStarted = true;
        messageParagraph.innerHTML = "Click the box when it's blue.";
        box.style.backgroundColor = "";
        points = 0;
        intervalId = setInterval(changeColor, 500);
    }
    else {
        if (box.style.backgroundColor == "blue") {
            points = points + 1;
            messageParagraph.innerHTML = "Points: " + points;
        }
        else {
            gameStarted = false;
            messageParagraph.innerHTML = "You misclicked. Your score is " + points + (points == 1 ? " point." : " points.");
            clearInterval(intervalId);
        }
    }
}

function changeColor() {
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        box.style.backgroundColor = "red";
    }
    else if (randomNumber == 1) {
        box.style.backgroundColor = "green";
    }
    else if (randomNumber == 2) {
        box.style.backgroundColor = "blue";
    }
}

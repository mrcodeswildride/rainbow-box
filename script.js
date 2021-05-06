let messageParagraph = document.getElementById(`messageParagraph`)
let box = document.getElementById(`box`)

let gameStarted = false
let score = 0
let intervalId

box.addEventListener(`click`, clickBox)

function clickBox() {
  if (gameStarted == false) {
    messageParagraph.innerHTML = `Click the box when it's blue.`
    intervalId = setInterval(changeColor, 500)
    gameStarted = true

    box.style.backgroundColor = ``
    score = 0
  } else {
    if (box.style.backgroundColor == `blue`) {
      score = score + 1
      messageParagraph.innerHTML = `Score: ${score}`
    } else {
      messageParagraph.innerHTML = `You misclicked. Your score is ${score}.`
      clearInterval(intervalId)
      gameStarted = false
    }
  }
}

function changeColor() {
  let randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber == 0) {
    box.style.backgroundColor = `red`
  } else if (randomNumber == 1) {
    box.style.backgroundColor = `green`
  } else if (randomNumber == 2) {
    box.style.backgroundColor = `blue`
  }
}

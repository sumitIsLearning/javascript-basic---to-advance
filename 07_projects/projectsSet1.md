# Lets start with simple basic projects of DOM

## click on the link below to start the project
[project link](https://stackblitz.com/edit/dom-project-chaiaurcode-a1qxngcd?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)

##################################################

# Solution Codes:

## project 1:

### solution 1: 
``` javascript

const grey = document.getElementById("grey");
const white = document.getElementById("white");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

grey.addEventListener("click" , () => {
  document.querySelector("body").style.backgroundColor = "grey"
})
white.addEventListener("click" , () => {
  document.querySelector("body").style.backgroundColor = "white"
})
blue.addEventListener("click" , () => {
  document.querySelector("body").style.backgroundColor = "blue"
})
yellow.addEventListener("click" , () => {
  document.querySelector("body").style.backgroundColor = "yellow"
})

```
### solution 2:
``` javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (button) => {
  button.addEventListener("click" , (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey"
        break;
      case "white":
        body.style.backgroundColor = "white"
        break;
      case "blue":
        body.style.backgroundColor = "blue"
        break;
      case "yellow":
        body.style.backgroundColor = "yellow"
        break;
      default:
        body.style.backgroundColor = "white"
    }
  })
})
```
### solution 3:
``` javascript 
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (button) => {
  button.addEventListener("click" , (e) => {
    body.style.backgroundColor = e.target.id;
  })
})
```
## project 2
### solution:
``` javascript
const form = document.querySelector("form");
const result = document.getElementById("results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const kg = parseInt(document.getElementById("weight").value);
  const cm = parseInt(document.getElementById("height").value);

  if (cm <= 0 || isNaN(cm)) {
    result.textContent = `Please enter a valid height.`;
    result.style.color = "red";
  } else if (kg <= 0 || isNaN(kg)) {
    result.textContent = `Please enter a valid weight.`;
    result.style.color = "red";
  } else {
    const bmi = (kg / ((cm / 100) ** 2)).toFixed(1);
    const span = document.createElement("span");

    let message = `BMI: ${bmi}`;
    if (bmi < 18.6) {
      message += ", you are underweight";
    } else if (bmi <= 24.9) {
      message += ", you are in the normal range";
    } else {
      message += ", you are overweight";
    }

    span.textContent = message;
    span.style.color = "green";
    span.style.fontWeight = "600";

    result.innerHTML = ""; 
    result.appendChild(span);
  }
});

```
## project 3
### solution:

``` javascript
const clock = document.getElementById("clock");

setInterval(newTime , 60*1000);

function newTime() {
  clock.textContent = new Date().toLocaleTimeString('en-IN', {
    hour12:false,
    hour:"2-digit",
    minute:"2-digit"
  });
}
newTime();
```
## project 4
### solution:
``` javascript
const form = document.querySelector(".form");
const guessField = document.getElementById("guessField");
const previousGuess = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// Random number to guess
const MIN = 1;
const MAX = 100;
const numToGuess = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userGuess = parseInt(guessField.value);
  let guessRemain = parseInt(guessRemaining.textContent);

  if (isNaN(userGuess) || userGuess < MIN || userGuess > MAX) {
    alert("Invalid input. Please enter a number between 1 and 100.");
  } else {
    
    previousGuess.textContent += ` ${userGuess}`;

    guessRemaining.textContent = guessRemain - 1;

    if (userGuess === numToGuess) {
      alert("🎉 You won! The correct number was " + numToGuess);
      location.reload();
    } else if (guessRemain - 1 === 0) {
      alert("😞 Game over! The correct number was " + numToGuess);
      location.reload();
    } else if (userGuess < numToGuess) {
      lowOrHi.textContent = "It is higher!";
    } else {
      lowOrHi.textContent = "It is lower!";
    }
  }

  guessField.value = "";
});
```


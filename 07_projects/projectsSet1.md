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
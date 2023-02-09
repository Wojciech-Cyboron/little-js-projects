const plusBtn = document.querySelector(".sizeUp")
const minusBtn = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const loremTxt = document.querySelector("p")

let number = 36

function sizeUp() {
  number += 10
  console.log("plus")
  loremTxt.style.fontSize = number + "px"
}

function sizeDown() {
  if (number > 16) {
    number -= 10
    console.log("minus")
    loremTxt.style.fontSize = font + "px"
  }
}

function colorSwitch() {
  console.log("color")
  const color = Math.floor(Math.random() * 16777215).toString(16)
  loremTxt.style.color = "#" + color
}

plusBtn.addEventListener("click", sizeUp)
minusBtn.addEventListener("click", sizeDown)
colorBtn.addEventListener("click", colorSwitch)

const converter = document.querySelector("#converter")
const resultsText = document.querySelector(".result")
const convertBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const changeBtn = document.querySelector(".change")
const one = document.querySelector(".one")
const two = document.querySelector(".two")

// T(°F) = T(°C) * 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8
//°°°°°°°

const switchFunction = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F"
    two.textContent = "°C"
    resultsText.textContent = ""
  } else {
    one.textContent = "°C"
    two.textContent = "°F"
    resultsText.textContent = ""
  }
}

const toCelConvert = () => {
  const cels = converter.value
  const toFahr = cels * 1.8 + 32
  resultsText.textContent = `${cels}°C to ${toFahr.toFixed(1)}°F`
  converter.value = ""
}

const toFahrConvert = () => {
  const fahr = converter.value
  const toCels = (fahr - 32) / 1.8
  resultsText.textContent = `${fahr}°F to ${toCels.toFixed(1)}°C`
  converter.value = ""
}

const convert = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      toCelConvert()
    } else {
      toFahrConvert()
    }
  } else {
    resultsText.textContent = "Musisz podać jakąś wartość"
  }
}

const reset = () => {
  converter.value = ""
  resultsText.textContent = ""
}

changeBtn.addEventListener("click", switchFunction)
convertBtn.addEventListener("click", convert)
resetBtn.addEventListener("click", reset)

const btnArrow = document.querySelector(".arrow")
const iconArrow = document.querySelector(".fas")
const img1 = document.querySelector(".item1")

const project01 = () => {
  img1.classList.toggle("hide")

  if (img1.classList.contains("hide")) {
    //iconArrow.style.transform = 'rotate(180deg)'
    iconArrow.classList.remove("fa-arrow-down")
    iconArrow.classList.add("fa-arrow-up")
  } else {
    //iconArrow.style.transform = 'rotate(0deg)'
    iconArrow.classList.remove("fa-arrow-up")
    iconArrow.classList.add("fa-arrow-down")
  }
}

btnArrow.addEventListener("click", project01)

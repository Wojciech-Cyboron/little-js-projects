const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const hideIco = document.querySelector('.fa-times')
const navUl = document.querySelector('nav ul')

const handleNav = () => {
    navUl.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIco.classList.toggle('hide')
    hideIco.classList.toggle('hide')

}

burgerBtn.addEventListener('click', handleNav)
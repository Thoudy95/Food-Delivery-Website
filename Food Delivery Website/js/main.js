const burgerBtn = document.querySelector('.burger')
const BarsIco = document.querySelector('.fa-bars')
const Times = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    BarsIco.classList.toggle('hide')
    Times.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)
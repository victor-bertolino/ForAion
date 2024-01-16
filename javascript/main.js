// funtion to use in a scroll down event
function scrollDownAction(newVar, CSSelement, comparedValue, newCSSelement) {
    newVar = document.querySelector(CSSelement);
    const scrollValue = window.scrollY;
    if (scrollValue > comparedValue) {
        newVar.classList.add(newCSSelement)

    } else
        newVar.classList.remove(newCSSelement)
}

// toggle button that return to top, when user scroll
window.addEventListener('scroll', () => {
    scrollDownAction('upBtn', '.upBtn', 110, 'btnDisplay')
})

// return to top button
const upBtn = document.querySelector('.upBtn')
upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

//mobile navbar
const hamburgerMenu = document.querySelector('.hamburgerMenu')
hamburgerMenu.addEventListener('click', () => {
    const navMenu = document.querySelector('.navMenu')
    navMenu.classList.toggle('mobileNavbar')
})

//carousel
const firstCircle = document.querySelector('.firstCircle')
const secondCircle = document.querySelector('.secondCircle')
const thirdCircle = document.querySelector('.thirdCircle')

const firstCard = document.querySelector('.firstCard')
const secondCard = document.querySelector('.secondCard')
const thirdCard = document.querySelector('.thirdCard')

////initial state
firstCircle.classList.add('selectedCircle')
firstCard.classList.add('addCardDisplay')

function sectionCard_mobile_navigation(addedCircle, addedCard, removedCircleOne, removedCardOne, removedCircleTwo, removedCardTwo) {
    addedCircle.classList.add('selectedCircle')
    addedCard.classList.add('addCardDisplay')
    removedCircleOne.classList.remove('selectedCircle')
    removedCardOne.classList.remove('addCardDisplay')
    removedCircleTwo.classList.remove('selectedCircle')
    removedCardTwo.classList.remove('addCardDisplay')
}

////changes when click
firstCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(firstCircle, firstCard, secondCircle, secondCard, thirdCircle, thirdCard)
})
secondCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(secondCircle, secondCard, firstCircle, firstCard, thirdCircle, thirdCard)
})
thirdCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(thirdCircle, thirdCard, firstCircle, firstCard, secondCircle, secondCard)
})
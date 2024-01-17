//getting carousel elements
const firstCircle = document.querySelector('.firstCircle')
const firstCard = document.querySelector('.firstCard')
const secondCircle = document.querySelector('.secondCircle')
const secondCard = document.querySelector('.secondCard')
const thirdCircle = document.querySelector('.thirdCircle')
const thirdCard = document.querySelector('.thirdCard')

////default state
firstCircle.classList.add('selectedCircle')
firstCard.classList.add('addCardDisplay')

////function to add and remove items from mobile card section accordinly with whats clicked
function sectionCard_mobile_navigation(addedCircle, addedCard, removedCircleOne, removedCardOne, removedCircleTwo, removedCardTwo) {
    addedCircle.classList.add('selectedCircle')
    addedCard.classList.add('addCardDisplay')
    removedCircleOne.classList.remove('selectedCircle')
    removedCardOne.classList.remove('addCardDisplay')
    removedCircleTwo.classList.remove('selectedCircle')
    removedCardTwo.classList.remove('addCardDisplay')
}

////action to happen in each case
firstCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(firstCircle, firstCard, secondCircle, secondCard, thirdCircle, thirdCard)
})
secondCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(secondCircle, secondCard, firstCircle, firstCard, thirdCircle, thirdCard)
})
thirdCircle.addEventListener('click', () => {
    sectionCard_mobile_navigation(thirdCircle, thirdCard, firstCircle, firstCard, secondCircle, secondCard)
})
//carousel
const firstCard = document.querySelector('#firstCard')
const secondCard = document.querySelector('#secondCard')
const thirdCard = document.querySelector('#thirdCard')
const firstCircle = document.querySelector('.firstCircle')
const secondCircle = document.querySelector('.secondCircle')
const thirdCircle = document.querySelector('.thirdCircle')
const nextBtn = document.querySelector('.nextBtn')
const previousBtn = document.querySelector('.previousBtn')

nextBtn.addEventListener('click', () => {
    // const foward = 'forward'
    return 'foward'
})

previousBtn.addEventListener('click', () => {
    // const backwards = 'backward'
    return 'backwards'
})

let carouselBar = [firstCircle, secondCircle, thirdCircle]

const carouselBarRolling = (direction) => {
    if (direction === 'forward') {
        let selectedCircle = carouselBar[i] + 1
    } else if (direction === 'backward') {
        let selectedCircle = carouselBar[i] - 1
    }
}
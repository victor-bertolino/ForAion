//function to use a scroll down event
function scrollDownAction(newVar, CSSelement, comparedValue, newCSSelement) {
    newVar = document.querySelector(CSSelement);
    const scrollValue = window.scrollY;
    if (scrollValue > comparedValue) {
        newVar.classList.add(newCSSelement)

    } else
        newVar.classList.remove(newCSSelement)
}

//to top button appears when scrolling down
window.addEventListener('scroll', () => {
    scrollDownAction('upBtn', '.upBtn', 110, 'btnDisplay')
})

//to top button functionality
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
//getting elements
const loginForm = document.querySelector('#loginForm')
const loginBtn = document.querySelector('.toLoginBtn')
const registerForm = document.querySelector('#registerForm')
const registerBtn = document.querySelector('.toRegisterBtn')

//default state
registerForm.classList.add('noDisplay')

//arrow function to add and remove display
const addRemoveDisplay = (addedForm, removedForm) => {
    addedForm.classList.add('noDisplay')
    removedForm.classList.remove('noDisplay')
}
//case 1
registerBtn.addEventListener('click', () => {
    addRemoveDisplay(loginForm, registerForm)
})
//case 2
loginBtn.addEventListener('click', () => {
    addRemoveDisplay(registerForm, loginForm)
})
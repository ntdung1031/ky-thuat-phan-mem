// form nhỏ
var form_thanks = document.getElementById('js-form-contact')
var thanks = document.querySelector('.grid-colmun-thanks')
    form_thanks.addEventListener('submit', function () {
    form_thanks.classList.add('close')
    thanks.classList.add('open')
})
// -----------------------------
// form sign
var html = document.querySelector(html)
var signUp = document.querySelector('.sign-up')
var signIn = document.querySelector('.sign-in')
var modal = document.getElementsByClassName('modal')
var modalBody = document.getElementsByClassName('modal-body')
var signInMore = document.querySelectorAll('.dont-SignIn > a')
var closeForm = document.getElementsByClassName('close-form')
for(let i of modal ) {
    signIn.addEventListener('click',() => {
        modal[0].style.display = 'block'
        modal[1].style.display = 'none'
    })
    signUp.addEventListener('click',() => {
        modal[0].style.display = 'none'
        modal[1].style.display = 'block'
    })  
}

modal[0].addEventListener('click',(e) => {
    modal[0].style.display = 'none'
})
modal[1].addEventListener('click',(e) => {
    modal[1].style.display = 'none'
})

modalBody[0].addEventListener('click',(e) => {
    e.stopPropagation()
})
modalBody[1].addEventListener('click',(e) => {
    e.stopPropagation()
})
signInMore[0].addEventListener('click', () => {
    modal[0].style.display = 'none'
    modal[1].style.display = 'block'
})
signInMore[1].addEventListener('click', () => {
    modal[0].style.display = 'block'
    modal[1].style.display = 'none'
})

closeForm[0].addEventListener('click', () => {
    modal[0].style.display = 'none'
    modal[1].style.display = 'none'
})
closeForm[1].addEventListener('click', () => {
    modal[0].style.display = 'none'
    modal[1].style.display = 'none'
})
















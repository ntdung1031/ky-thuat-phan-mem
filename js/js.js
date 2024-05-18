// chọn tp hcm, nha trang hay hà nội
var btn1 = document.querySelector('.btn-thaili');
var btn2 = document.querySelector('.btn-gorkha');
var btn3 = document.querySelector('.btn-momo');
var body1 = document.querySelector('.js-body-info1');
var body2 = document.querySelector('.js-body-info2');
var body3 = document.querySelector('.js-body-info3');

btn1.addEventListener('click',function() {
    btn1.classList.add('open-hours')
    btn2.classList.remove('open-hours')
    btn3.classList.remove('open-hours')

    body1.classList.add('open')
    body2.classList.remove('open')
    body3.classList.remove('open')

})
btn2.addEventListener('click',function() {
    btn2.classList.add('open-hours')
    btn1.classList.remove('open-hours')
    btn3.classList.remove('open-hours')

    body2.classList.add('open')
    body1.classList.remove('open')
    body3.classList.remove('open')
})
btn3.addEventListener('click',function() {
    btn3.classList.add('open-hours')
    btn1.classList.remove('open-hours')
    btn2.classList.remove('open-hours')

    body3.classList.add('open')
    body1.classList.remove('open')
    body2.classList.remove('open')
})



// cái này làm cái form bự 

var btn_send = document.querySelector('.btn-event')
var form = document.getElementById('js-form')
var send = document.querySelector('.js-send')



form.addEventListener('submit',function() {
    form.classList.add('close')

    send.classList.add('open')
    // alert('ccc');
}) 
//     btn_send.onlick = function() {
//     form.classList.add('close')
// https://freetuts.net/su-kien-submit-form-trong-javascript-3417.html

//    }




// form nhỏ

var form_thanks = document.getElementById('js-form-contact')
// var main = document.querySelector('.grid-column-form')
var thanks = document.querySelector('.grid-colmun-thanks')

form_thanks.addEventListener('submit',function() {
    form_thanks.classList.add('close')
    thanks.classList.add('open')
})

// form
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








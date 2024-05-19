
var all = document.querySelector('.choise-all')
var veg = document.querySelector('.choise-veg')
var non = document.querySelector('.choise-non')
var js_all = document.querySelector('.js-all')
var js_veg = document.querySelector('.js-veg')
all.addEventListener('click', function () {
    js_all.classList.remove('close')
    js_veg.classList.add('close')
})
veg.addEventListener('click', function () {
    js_veg.classList.remove('close')

    js_all.classList.add('close')
})

var all = document.querySelector('.choise-all')
var veg = document.querySelector('.choise-veg')
var choiseNone = document.querySelector('.choise-non')
var js_all = document.querySelector('.js-all')
var js_veg = document.querySelector('.js-veg')
var noneveg = document.querySelector('.js-none-veg')
all.addEventListener('click', function (e) {
    js_all.classList.remove('close')
    js_veg.classList.add('close')
    noneveg.classList.add('close')
    Object.assign(all.style, {
        borderColor : 'var(--yelo-color)',
        color : 'var(--yelo-color)'
    })
    Object.assign(veg.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    Object.assign(choiseNone.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    e.stopPropagation()
})
document.addEventListener('click',()=> {
    Object.assign(all.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    Object.assign(veg.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    Object.assign(choiseNone.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
})
veg.addEventListener('click', function (e) {
    js_veg.classList.remove('close')
    js_all.classList.add('close')
    noneveg.classList.add('close')
    Object.assign(veg.style, {
        borderColor : 'var(--yelo-color)',
        color : 'var(--yelo-color)'
    })
    Object.assign(all.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    Object.assign(choiseNone.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    e.stopPropagation()
})
choiseNone.addEventListener('click', (e) => {
    noneveg.classList.remove('close')
    js_all.classList.add('close')
    js_veg.classList.add('close')
    Object.assign(choiseNone.style, {
        borderColor : 'var(--yelo-color)',
        color : 'var(--yelo-color)'
    })
    Object.assign(all.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    Object.assign(veg.style, {
        borderColor : 'var(--bg-color)',
        color : 'var(--bg-color)'
    })
    e.stopPropagation()

})
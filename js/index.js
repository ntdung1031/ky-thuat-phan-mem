var y = document.querySelectorAll('.case-dot-all')
var x = document.getElementsByClassName("food-menu");
// slide index
var slideIndex = 1;
showDivs(slideIndex);
// hàm trên show trang 1 và ẩn 2 trang kia

function plusDivs(n) {
    showDivs(slideIndex += n);
}
// sau khi show tăng giá trị
function showDivs(n) {
    var i;
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display ="flex";
    // dot
    // tươg tự với chuyển slide ta có đổi màu dot
    if (n > y.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = y.length }
    for (j = 0; j < y.length; j++) {
        y[j].style.background = "rgba(34, 34, 34, .4)";
    }
    y[slideIndex - 1].style.background = "black";
}
// click dot
y[0].onclick = function () {
    x[0].style.display = "flex";
    x[1].style.display = "none";
    x[2].style.display = "none";
    y[0].style.background = "black";
    y[1].style.background = "rgba(34, 34, 34, .4)";
    y[2].style.background = "rgba(34, 34, 34, .4)";
}
y[1].onclick = function () {
    x[1].style.display = "flex";
    x[0].style.display = "none";
    x[2].style.display = "none";
    y[1].style.background = "black";
    y[0].style.background = "rgba(34, 34, 34, .4)";
    y[2].style.background = "rgba(34, 34, 34, .4)";
}
y[2].onclick = function () {
    x[2].style.display = "flex";
    x[0].style.display = "none";
    x[1].style.display = "none";
    y[2].style.background = "black";
    y[1].style.background = "rgba(34, 34, 34, .4)";
    y[0].style.background = "rgba(34, 34, 34, .4)";
}
// ----------------------------
// choise btn
var btn1 = document.querySelector('.btn-thaili');
        var btn2 = document.querySelector('.btn-gorkha');
        var btn3 = document.querySelector('.btn-momo');
        var body1 = document.querySelector('.js-body-info1');
        var body2 = document.querySelector('.js-body-info2');
        var body3 = document.querySelector('.js-body-info3');

btn1.addEventListener('click', function () {
            btn1.classList.add('open-hours')
            btn2.classList.remove('open-hours')
            btn3.classList.remove('open-hours')

            body1.classList.add('open')
            body2.classList.remove('open')
            body3.classList.remove('open')

        })
btn2.addEventListener('click', function () {
            btn2.classList.add('open-hours')
            btn1.classList.remove('open-hours')
            btn3.classList.remove('open-hours')

            body2.classList.add('open')
            body1.classList.remove('open')
            body3.classList.remove('open')
        })
btn3.addEventListener('click', function () {
            btn3.classList.add('open-hours')
            btn1.classList.remove('open-hours')
            btn2.classList.remove('open-hours')

            body3.classList.add('open')
            body1.classList.remove('open')
            body2.classList.remove('open')
        })

// chọn tp hcm, nha trang hay hà nội
// cái này làm cái form bự 
var btn_send = document.querySelector('.btn-event')
var form = document.getElementById('js-form')
var send = document.querySelector('.js-send')
form.addEventListener('submit',function() {
    form.classList.add('close')
    send.classList.add('open')
}) 
// ----------------------------
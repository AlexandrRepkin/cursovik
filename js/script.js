const burger = document.querySelector('.burger'),
      menu = document.querySelector('.header__row');

//=========================Активация бургер меню============================//
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
});
//===============================================================================================//

//==================================Слайдер с преподавателями====================================//
$(document).ready(function() {
    $('.teachers-slider').slick({
        arrows: true,
        slidesToShow: 3,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
//===============================================================================================//

//=========================Выделение текущего расписание============================//
    var today = new Date().getDay();
    const day = $(`[data-day='${today}']`).addClass('today');
//===============================================================================================//

//=========================Плавный переход по якорный ссылкам============================//
    $('a[href^="#"]').click(function(){ // #1
        let anchor = $(this).attr('href');  // #2
        $('html, body').animate({           // #3
        scrollTop:  $(anchor).offset().top  // #4
        }, 600);                            // #5
        });
//===============================================================================================//
});



//=========================Анимация текста и картинок============================//
// const animItems = document.querySelectorAll('.anim-items');

//     if(animItems.length >0) {
//         window.addEventListener('scroll', animOnScroll);

//         function animOnScroll(params){
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemtHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemtHeight / animStart;

//                 if (animItemtHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemtHeight)) {
//                     animItem.classList.add('active');
//                 } else {
//                     if(!animItem.classList.contains('anim-no-hide')){
//                         animItem.classList.remove('active');
//                     }
//                 }
//             }
//         }
//     }
//     animOnScroll();
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
//     }
//===============================================================================================//
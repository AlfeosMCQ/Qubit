//carousel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 40,
    startPosition: 1,
    items: 3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        1024:{
            items:3,
        },
    }
});


$('.slider_btn_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider_btn_p').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider_btn_next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider_btn_n').click(function() {
    owl.trigger('next.owl.carousel');
})


$(".small").owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ от картино если выводите больше 1
    nav:false, //Отключил навигацию
    autoplay:true, //Автозапуск слайдера
    smartSpeed:2000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});


//nav icon
const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

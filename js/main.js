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




//nav icon
const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

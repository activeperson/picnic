(function(){

 $('.top-banner').slick({
     dots: true
 });

 $('.new-products__wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 300,
    dots: false,
});

$('.item__slider-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 300,
    dots: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
});


let menu = document.querySelector('.menu-block__menu');
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('active');
}



})();
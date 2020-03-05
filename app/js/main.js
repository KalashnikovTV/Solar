$(function(){

    $('.project__slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3

    });

    
    $('.reviews__slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.reviews__slider-small'
      });
    $('.reviews__slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.reviews__slider-big',
        focusOnSelect: true,
        centerMode: true,
        autoplay: 500,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="images/reviews/back.png" alt=""></button>', 
        nextArrow: '<button class="slick-next slick-arrow"><img src="images/reviews/forward.png" alt=""></button>'
    });

});
$(function(){

    $('.project__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 791,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    });

    
    $('.reviews__slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.reviews__slider-small'
      });
    $('.reviews__slider-small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews__slider-big',
        focusOnSelect: true,
        centerMode: true,
        autoplay: 500,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="images/reviews/back.png" alt=""></button>', 
        nextArrow: '<button class="slick-next slick-arrow"><img src="images/reviews/forward.png" alt=""></button>',
    });

    $('.header__menu-btn').on('click', function(){
      $('.menu > ul').slideToggle();
    });

});
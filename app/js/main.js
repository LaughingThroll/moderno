$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });   

  $('.products-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    $(this).addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    $(this).addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  
  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  $('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  $('input[type="file"], select').styler();

  
  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() < 900) { 
      $('.profile__aside-btn').appendTo('.profile-mobile__box');

    }
    else {
      $('.profile__aside-btn').appendTo('.profile__aside');
    } 
  });
  
  

  var mixer = mixitup('.products__inner-box');



});

// $(function(){
//   $(window).resize(function(){      
//     var item = $('.aside__item');
//     var btn = $('.profile__aside-btn');
//     var win = $(this);
//       if(win.width() < 900) {
//         if(!btn.hasClass('done')){
//           btn.addClass('done').appendTo(item);
//         }
//       } else {
//         if(!btn.hasClass('done')){
//           btn.addClass('done').appendTo('.profile__aside');
//       }
//     }  
//   });
// });
  // function adaptive_function() {
  //   var w=$(window).outerWidth();
  //   var h=$(window).outerHeight();
  //     adaptive_header(w,h);
  // }
  // adaptive_function();

$('document').ready(function() {

  //header menu
  $('header .menu').click(function(){
    $('header ul').slideToggle(500);
  });
  $(window).resize(function(){
    if ($(window).width() > 767) {
      $('header ul').removeAttr("style");
    }
  });

  //Our Services изменение цвета фона при наведении на кнопку
  $('.services .button').hover(function(){
    $(this).parents('.item').css({'background': '#00897b', 'color': '#fff'});
  });
  $('.services .button').mouseleave(function(){
    $(this).parents('.item').css({'background': '#fff', 'color': '#000'});
  });
  //Our Services owl-carousel
  $(function() {
    var owl = $('#items'),
      owlOptions = {
        margin: 20,
        smartSpeed: 700,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          }
        }
      };
    $(window).resize(function() {
      if ( $(window).width() < 992 ) {
        if ( $('#items').hasClass('items') ) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('items').addClass('owl-carousel owl-theme owl-loaded owl-drag');
        }
      } else {
        if ( !$('#items').hasClass('items') ) {
          owl.removeClass('owl-carousel owl-theme owl-loaded owl-drag').addClass('items').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });

  //Latest Works tabs
  $('.portfolio .button1').click(function(){
    $('.portfolio .web').css({'display': 'flex'});
    $('.portfolio .ui').css({'display': 'flex'});
    $('.portfolio .mockups').css({'display': 'flex'});
  });
  $('.portfolio .button2').click(function(){
    $('.portfolio .ui').css({'display': 'none'});
    $('.portfolio .mockups').css({'display': 'none'})    
    $('.portfolio .web').css({'display': 'flex'});
  });
  $('.portfolio .button3').click(function(){
    $('.portfolio .web').css({'display': 'none'});
    $('.portfolio .mockups').css({'display': 'none'})    
    $('.portfolio .ui').css({'display': 'flex'});
  });
  $('.portfolio .button4').click(function(){
    $('.portfolio .web').css({'display': 'none'});
    $('.portfolio .ui').css({'display': 'none'})
    $('.portfolio .mockups').css({'display': 'flex'});
  });

  //Pricing Plan добавление тени при наведении
  $('.pricing .button').hover(function(){
    $(this).parents('.plan').css({'box-shadow': '0px 3px 25px 0px rgba(0, 0, 0, 0.35)'});
  });
  $('.pricing .button').mouseleave(function(){
    $(this).parents('.plan').css({'box-shadow': 'none'});
  });

  //Our Team Member owl-carousel
  $('.owl-carousel').owlCarousel({
    dots: true,
    dotsText: ['<i class="fas fa-circle"></i>'],
    smartSpeed: 700,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  });

  //Blog кнопка More View
  $('.blog .button').click(function(){
    $('.blog .no_vis').css({'display': 'flex'});
    $('.blog .button').css({'display': 'none'})
  });

  //функция прокрутки на блок страницы при клике по элементам меню
  $('.smoothScroll').click(function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var target = $(href);
    var top = target.offset().top;
    $('html,body').animate({scrollTop: top}, 1000);
    return false;
  });

});

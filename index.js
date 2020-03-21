$(window).scroll(function(){
    var bottomheader = $('.bottomheader'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) bottomheader.addClass('fixed');
    else bottomheader.removeClass('fixed');
  });
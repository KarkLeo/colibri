$(".menu-button").on('click', function() {
  $(this).toggleClass("on");
  $('.header__menu').toggleClass("on");
  $("nav ul").toggleClass('hidden');
  if($(".menu-button").hasClass("on")) {
    document.onmousewheel=document.onwheel=function(){return false;};
    document.addEventListener("MozMousePixelScroll",function(){return false},false);
    document.onkeydown=function(e) {
      if (e.keyCode>=33&&e.keyCode<=40) return false;
    }
  } else {
    document.onmousewheel=document.onwheel=function(){return true;};
    document.addEventListener("MozMousePixelScroll",function(){return true},true);
    document.onkeydown=function(e) {
      if (e.keyCode>=33&&e.keyCode<=40) return true;
    }
  }
});


  $(document).ready(function() {
    var previousScroll = 0,
      navBarOrgOffset = $('.header').height();

    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      //console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
      if (currentScroll > navBarOrgOffset) {
        //$('.header').addClass('fixed');
        if (currentScroll > previousScroll && !($(".menu-button").hasClass("on"))) {
            $('.header').addClass('fixed');
            $('.header').hide();
            //$('.header').removeClass('fixed');
          } else {
            $('.header').show();
            $('.header').addClass('fixed');
          }
      } else {
        //$('.header').hide();
        $('.header').removeClass('fixed');
      }
      previousScroll = currentScroll;
    });
  });
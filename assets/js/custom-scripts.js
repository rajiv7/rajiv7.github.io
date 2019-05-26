(function($) {
  "use strict";
  
  $.fn.andSelf = function() {
	  return this.addBack.apply(this, arguments);
  }
  $(window).on("load", function() { 
      $(".section-loader").fadeOut("slow");
  });
  $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $(".nav-scroll").addClass("nav-strict");
          $('.logo_wrapper').css('top', '6px');
      } else {
          $(".nav-scroll").removeClass("nav-strict");
          $('.logo_wrapper').css('top', '24px');
      }
  });
  $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
	  $('.navbar-toggler').toggleClass('active')
	  $('.overlay').toggleClass('active');
	  $('.navbar-collapse').toggleClass('active');
  });
}(jQuery));

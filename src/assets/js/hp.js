(function ($) {

	"use strict";

  	//Menu
	if($(".menu-trigger").length){
		$(".menu-trigger").on("click", function(e) {
      e.preventDefault();
			  var mt=$(".menu-trigger").length;
				console.log("MT: " +mt);
			$(this).toggleClass("active");
			$(".header-area .nav").slideToggle(200);
		});
	}

  $(window).on("load", function() {
      $(".loader-wrapper").css("visibility", "hidden");
  });

  //header cambia con el evento scroll
  $(window).on("scroll", function() {
    scrollNavBar();
  });


  //funcion que pone el header como fijo y de color
  function scrollNavBar() {
    var width = $(window).width();
    if(width > 991) {
      var scroll = $(window).scrollTop();
      if (scroll >= 30) {
        $(".header-area").addClass("header-sticky");
        $(".header-area .dark-logo").css("display", "block");
        $(".header-area .light-logo").css("display", "none");
      }else{
        $(".header-area").removeClass("header-sticky");
        $(".header-area .dark-logo").css("display", "none");
        $(".header-area .light-logo").css("display", "block");
      }
    }
  }

})(window.jQuery);

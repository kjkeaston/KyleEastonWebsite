$(document).ready(function() {
  console.log("script running");

  $(".app-header").hide();

  var windowWidth = $(window).width();

    if(windowWidth >= 768) {
      console.log(windowWidth)
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(".app-header").fadeIn(300);
        } else if ($(window).scrollTop() < 100) {
          $(".app-header").fadeOut(300);
        }
      });
    } else {
      $(".app-header").hide();
    }

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     $(".app-header").fadeIn(300);
  //   } else if ($(window).scrollTop() < 100) {
  //     $(".app-header").fadeOut(300);
  //   }
  // });

  $(".about-link").click(function() {
    let offset = 100;
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#bio-section").offset().top - offset
      }, 1000);
  });

  $(".projects-link").click(function() {
    let offset = 30;
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#projects-section").offset().top - offset
      }, 1000);
  });

  $(".chevron-down").click(function() {
    let offset = 100;
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#bio-section").offset().top - offset
      }, 1000);
  });
})

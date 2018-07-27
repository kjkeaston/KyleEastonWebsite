$(document).ready(function() {
  console.log("script running");
  $(".app-header").hide();

  // $(window).scroll(function() {
  //   $(".app-header").show();
  // })

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $(".app-header").fadeIn(300);
    } else if ($(window).scrollTop() < 100) {
      $(".app-header").fadeOut(300);
    }
  });

  // $(".app-header-small").hide();

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     $(".app-header").hide();
  //     $(".app-header-small").fadeIn(300);
  //   } else if ($(window).scrollTop() < 100) {
  //     $(".app-header").fadeIn(300);
  //     $(".app-header-small").hide();
  //   }
  // });

})


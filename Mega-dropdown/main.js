$(document).ready(function () {
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });

  $("#show-cart").on("click", function () {
    $(".panel-cart").addClass("show-header-cart");
  });

  $("#hide-cart").on("click", function () {
    $(".panel-cart").removeClass("show-header-cart");
  });

  $(".megadropdown").on("click", function () {
    console.log($(this).children(".dropdown-mega-area"))
    if (
      $(this).children(".dropdown-mega-area").css("display") == "none" &&
      $(window).width() < 970
    ) {
      $(this).children(".dropdown-mega-area").css("display", "block");
      $(".nav-links").css("overflow", "scroll");
    } else {
      if ($(window).width() < 970) {
        $(this).children(".dropdown-mega-area").css("display", "none");
        $(".nav-links").css("overflow", "hidden");
      }
    }
  });

  $("#show-sidebar").on("click", function () {
    $(".link-wrapper").addClass("show-sidebar");
  });

  $("#close-sidebar").on("click", function () {
    $(".link-wrapper").removeClass("show-sidebar");
  });
});

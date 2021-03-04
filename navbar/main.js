$(document).ready(function () {
  $("#show-links").on("click", function () {
    if ($(".nav-links").hasClass("show-nav-links")) {
      $(".nav-links").removeClass("show-nav-links");
      $("#menu-icon").removeClass("fa-times");
      $("#menu-icon").addClass("fa-bars");
    } else {
      $(".nav-links").addClass("show-nav-links");
      $("#menu-icon").removeClass("fa-bars");
      $("#menu-icon").addClass("fa-times");
    }
  });
});

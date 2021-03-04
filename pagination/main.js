$(document).ready(function () {
  $(".next").click(function () {
    $(".pagination").find(".page-number.active").next().addClass("active");
    $(".pagination").find(".page-number.active").prev().removeClass("active");
  });

  $(".prev").click(function () {
    $(".pagination").find(".page-number.active").prev().addClass("active");
    $(".pagination").find(".page-number.active").next().removeClass("active");
  });
});

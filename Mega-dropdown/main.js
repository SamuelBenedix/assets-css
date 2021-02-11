$(document).ready(function () {

	$("#search_input_box").hide();
	$("#search").on("click", function () {
		$("#search_input_box").slideToggle();
		$("#search_input").focus();
	});
	$("#close_search").on("click", function () {
		$("#search_input_box").slideUp(500);
	});


		/*==================================================================
    [ Cart ]*/
	$("#show-cart").on("click", function () {
		$(".panel-cart").addClass("show-header-cart");
	});

	$("#hide-cart").on("click", function () {
		$(".panel-cart").removeClass("show-header-cart");
	});


})
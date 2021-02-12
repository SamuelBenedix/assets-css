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

	$('.dropdown').on("click",function () {
		if($(this).children('.dropdown-mega-area').css("display") == "block" ){
			$(this).children('.dropdown-mega-area').css("display","none")
			$(".nav-links").css("overflow","hidden")
		}else {
			$(this).children('.dropdown-mega-area').css("display","block")
			$(".nav-links").css("overflow","scroll")
		}
	})

	$("#show-sidebar").on("click", function () {
		$(".link-wrapper").addClass("show-sidebar");
	});

	$("#close-sidebar").on("click", function () {
		$(".link-wrapper").removeClass("show-sidebar");
	});



})
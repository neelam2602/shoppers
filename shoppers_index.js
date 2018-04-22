$(document).ready(function(){
	// lower slideshow

	slide_wi = $(".slider").width();
	// alert(slide_wi);
	slide_hi = Math.round($(".slider").height());
	// alert(slide_hi);

	$(".slider").css("float","left");
	$(".mainslide").width(slide_wi * $(".slider").length);
	$(".mainslide, .gallery").height(slide_hi);
	$(".gallery").width(slide_wi);
	$(".gallery").css("border","3px solid");
	$(".gallery").css("overflow","hidden");
	
	// lower slideshow

	// blackbox
	
	$(".blackbox").hide();
	$(".crick_img").mouseenter(function(){
		$(this).children(".blackbox").fadeIn(300);
	})
	$(".crick_img").mouseleave(function(){
		$(this).children(".blackbox").fadeOut(300);
	})

	//blackbox

$(".tab_class_contents").hide();
	// $(".tab_class_contents:first").show();

	$(".tabs_ul li").mouseenter(function(){
		position = $(this).index();
		// alert(position);
		$(".tab_class_contents").hide();
		$(".tab_class_contents").eq(position).show();
		// $(".tab_class_contents").eq(position).slideToggle(500);
	})
	$(".tabs_ul li").mouseleave(function(){
		position = $(this).index();
		// alert(position);
		$(".tab_class_contents").hide();
		$(".tab_class_contents").eq(position).hide();

		// $(".tab_class_contents").eq(position).slideToggle(500);
	})
	

	
})
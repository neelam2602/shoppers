$(document).ready(function(){
	// alert(1)
	// slideshow
	$(".slide_img").hide();
	$(".slide_img:first").show();
	setInterval(function(){
		$(".slide_img:first").fadeOut(1000).next().fadeIn(1000).end()
		.appendTo(".slideshow")
	},3000);
	// slideshow

	
})
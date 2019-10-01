

$("p.bottom").click(function(){
	
	$("body").css("overflow","hidden");
	//$(".glow").fadeOut();
	//$("canvas").fadeOut();
	//$(".intro").hide();
	
	$(".start").fadeOut();
	
	
	//$(".choices").css("opacity", 1);
	$(".choices").css("width", "100%");
	$(".choices").css("z-index", 5);
	
	
	
	
	
	
	
})

$("p.cross").click(function(){
	
	$("body").css("overflow","auto");
//	$(".glow").fadeIn();
//	$(".intro").fadeIn();
	$(".start").fadeIn();
	
	
	
	$(".choices").css("width", "0%");
		$(".choices").css("z-index", -5);
	
	
})




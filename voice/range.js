var down = false;


$(".slider").mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;  
});


$(".slider").mousemove(function(){
	var value = $("input").val();
	
	
	
	if ((down == true)&&(value>0)){
	$(".text").css("font-size", 40 + (value*2) + "px")	
	console.log(value);

}if ((down == true)&& (value < 0)) {
	console.log(value);
	
	$(".text").css("font-size", 40 - (-value) + "px")
} else {
	
}
	
})



$(".data").click(function(){
	$(".dataspeak").toggle().delay(100);
	$(".normal").toggle();
	
});

$(".shout").click(function(){
	$(".text").toggleClass("shouting");
	$(".text").removeClass("whispering")
	
	
	
});

$(".whisper").click(function(){
	$(".text").toggleClass("whispering")
	$(".text").removeClass("shouting")
	
	
});


/*MENU*/

$(".navigation").click(function(){
	$("li").slideToggle();
	
	if($(window).width()<800){
		if($(".navigation").attr('data-click-state') == 1) 
				{	
					$(".navigation").attr('data-click-state',0)
					$(".controls").delay(500).css("z-index","1")
					
				} else {
					$(this).attr('data-click-state', 1)
					$(".controls").css("z-index","5")
							
		    	
								}
	}
	
})


/*SOUNDS*/

function playPhone() {
    var thissound = document.getElementById("phoneSound");
    thissound.play();
};

function playApple() {
    var thissound = document.getElementById("appleSound");
    thissound.play();
};

function playWelcome() {
    var thissound = document.getElementById("welcomeSound");
    thissound.play();
};

function playSam() {
    var thissound = document.getElementById("samSound");
    thissound.play();
};

function playXP() {
    var thissound = document.getElementById("XPSound");
    thissound.play();
};

function playMartin() {
    var thissound = document.getElementById("martinSound");
    thissound.play();
};



//if($(window).width()<800){
//	$(".navigation").click(function(){
//		
//		if($(".navigation").attr('data-click-state') == 1) 
//		{
//			$(".navigation").attr('data-click-state',0)
//			$(".controls").css("z-index","1")
//		} else {
//			$(this).attr('data-click-state', 1)
//			$(".controls").css("z-index","5")
//					
//    	
//						}
//		
//	})
//
//}

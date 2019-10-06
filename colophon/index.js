//TAG SYSTEM

$(".first-tag").click(function(){
	$(".reveal").hide();
	$(".letter").hide();
	$("div.first-tag").removeClass("first-tag");
	$(".index p").text("RESET TO ABC");

});

$(".index").click(function(){
	$("div.tag").addClass("first-tag");
	$(".reveal").css("opacity","1").slideDown();
	$(".letter").show();
	$(".index p").text("INDEX");
	
	$('.body-tag, .mind-tag, .voice-tag, .heart-tag, .soul-tag').css("background-color","transparent")
	$('.body-tag, .mind-tag, .voice-tag, .heart-tag, .soul-tag').css("color","black");
	
	
});

//TYPE-TAG
$(".image-tag").click(function(){
	if($(".image-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".image").slideUp();			
		
		$(".image").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".image").slideDown();			
		$(".image").addClass("selected");
	}
});

$(".video-tag").click(function(){
	if($(".video-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".video").slideUp();			
		$(".video").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".video").slideDown();			
		$(".video").addClass("selected");
	}
});

$(".text-tag").click(function(){
	if($(".text-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".text").slideUp();			
		$(".text").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".text").slideDown();			
		$(".text").addClass("selected");
	}
});

$(".outtakes-tag").click(function(){
	if($(".outtakes-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".outtakes").slideUp();			
		$(".outtakes").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".outtakes").slideDown();			
		$(".outtakes").addClass("selected");
	}
});

$(".sound-tag").click(function(){
	if($(".sound-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".sound").slideUp();			
		$(".sound").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".sound").slideDown();			
		$(".sound").addClass("selected");
	}
});

$(".link-tag").click(function(){
	if($(".link-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".link").slideUp();			
		$(".link").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".link").slideDown();			
		$(".link").addClass("selected");
	}
});

$(".pdf-tag").click(function(){
	if($(".pdf-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(".selected").show();
		$(".contain").find(".pdf").slideUp();			
		$(".pdf").removeClass("selected");
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","yellow")
		$(".selected").show();
		$(".contain").find(".pdf").slideDown();			
		$(".pdf").addClass("selected");
	}
});

//THEME-TAGS

$(".body-tag").click(function(){
	if($(".body-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(this).css("color","black");
		
		//$(".body.selected").slideUp();
		//$(".selected").slideDown();
		$(".selected").show();
		
		$(".reveal").not(".body").css("opacity","1");
		
		
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","black")
		$(this).css("color","white");
			
		$//(".body.selected").show();
		$(".selected").show();
		$(".body").show();
		
		$(".reveal").not(".body").css("opacity","0.2");
		
	}
});

$(".mind-tag").click(function(){
	if($(".mind-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(this).css("color","black");
		
		//$(".mind.selected").slideUp();
		//$(".selected").slideDown();
		$(".selected").show();
		
		$(".reveal").not(".mind").css("opacity","1");
		
		
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","black")
		$(this).css("color","white");
			
		$//(".mind.selected").show();
		$(".selected").show();
		$(".mind").show();
		
		$(".reveal").not(".mind").css("opacity","0.2");
		
	}
});

$(".voice-tag").click(function(){
	if($(".voice-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(this).css("color","black");
		
		//$(".voice.selected").slideUp();
		//$(".selected").slideDown();
		$(".selected").show();
		
		$(".reveal").not(".voice").css("opacity","1");
		
		
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","black")
		$(this).css("color","white");
			
		$//(".voice.selected").show();
		$(".selected").show();
		$(".voice").show();
		
		$(".reveal").not(".voice").css("opacity","0.2");
		
	}
});

$(".heart-tag").click(function(){
	if($(".heart-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(this).css("color","black");
		
		//$(".heart.selected").slideUp();
		//$(".selected").slideDown();
		$(".selected").show();
		
		$(".reveal").not(".love").css("opacity","1");
		
		
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","black")
		$(this).css("color","white");
			
		$//(".heart.selected").show();
		$(".selected").show();
		$(".love").show();
		
		$(".reveal").not(".love").css("opacity","0.2");
		
	}
});

$(".soul-tag").click(function(){
	if($(".soul-tag").attr('data-click-state') == 1) {
		$(this).attr('data-click-state',0)
		$(this).css("background-color","transparent")
		$(this).css("color","black");
		
		//$(".soul.selected").slideUp();
		//$(".selected").slideDown();
		$(".selected").show();
		
		$(".reveal").not(".soul").css("opacity","1");
		
		
		
		} else {
		$(this).attr('data-click-state',1)
		$(this).css("background-color","black")
		$(this).css("color","white");
			
		$//(".soul.selected").show();
		$(".selected").show();
		$(".soul").show();
		
		$(".reveal").not(".soul").css("opacity","0.2");
		
	}
});

//REVEALS

$( ".reveal" ).click(function() {
 	$(this).find(".hidden-content").slideToggle();
});

$("#circlebutton").click(function(){
	
	if ($(window)>800){ 
		if($("#circlebutton").attr('data-click-state') == 1) {
			$(this).attr('data-click-state',0)
			$(".colophon").css("z-index","-1")
			$("#circlebutton").css("left","70%")
			$("#circlebutton p").css("transform","rotate(360deg)")
			
		} else {
			$(this).attr('data-click-state', 1)
			$(".colophon").css("z-index","0")
			$(this).css("left","38%")
			$("#circlebutton p").css("transform","rotate(180deg)")
		} }
		
		else {
		if($("#circlebutton").attr('data-click-state') == 1) {
			$(this).attr('data-click-state',0)
			$(".colophon").css("z-index","-1")
			$("#circlebutton p").css("transform","rotate(360deg)")
		
		} else {
			$(this).attr('data-click-state', 1)
			$(".colophon").css("z-index","0")
			$("#circlebutton p").css("transform","rotate(180deg)")
		}
		
	}
	
});


//AUDIOS
function playFirst() {
    var thissound = document.getElementById("firstSound");
    thissound.play();
};

function playSecond() {
    var thissound = document.getElementById("secondSound");
    thissound.play();
};

function playThird() {
    var thissound = document.getElementById("thirdSound");
    thissound.play();
};

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

function play(){
     var audio = document.getElementById("shush");
     audio.play();
               }
function play2(){
     var audio = document.getElementById("papersound");
     audio.play();
               }




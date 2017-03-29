'use strict';



$(window).scroll(function(){
	if( $(this).scrollTop() > 450){
		$("nav").addClass("navbar-fixed-top");
	}
	else{
		$("nav").removeClass("navbar-fixed-top");		
	}


});



// utilize Animate.css animations on click
animateOnClick( "button" , "fadeIn", 3000)
function animateOnClick(selector , effect , animatDurationMs){
	selector = $(selector);

	selector.click(function(){
		$(this).addClass("animated "+ effect + " " + animatDurationMs)
	});

	//when animation ends 
	selector.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass("animated "+ effect + " " + animatDurationMs)
		});
}


$(window).scroll(function(){
	var aTop = $('.welcome').height();
	
	if($(this).scrollTop() > aTop/2+aTop-50 &&  $(this).scrollTop() < aTop/2+aTop+50 ){
		// for debug // alert('header just passed.');
		
		$(".welcome button").addClass("animated  rubberBand")	

		//when animation ends 
		$(".welcome button").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
				$(this).removeClass("animated  rubberBand")
			});
	} // if end

});// scroll event ends


// animateOnClick( "nav li" , "infinite bounce ", 1000)

// function animateOnClick( selector , effect , animatDurationMs){
// 	for (var i = 0 ; i < $(selector).length; i++) {
// 		var jq_elem = $(selector+":nth-of-type("+i+")") 
// 		bindAnimation( jq_elem , effect, animatDurationMs)
// 	}

// 	function bindAnimation( jq_element , effect , animatDurationMs){
// 		jq_element.click(
// 			function myFunction() {
// 				setTimeout(function(){ 
// 					jq_element.removeClass("animated "+ effect); 
// 				},
// 					animatDurationMs
// 				);

// 				jq_element.toggleClass("animated "+effect);
// 			}
// 		);
// 	}

// }
		

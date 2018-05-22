'use strict';


// smooth scroll
$('.nav .scroll').on('click', function(e){
	e.preventDefault();
	var body = $('html,body');
	var position = ( $($.attr(this, 'href')).offset().top ) - 51;

	body.animate({ scrollTop: position }, 900);
});


// fixed nav
$(window).scroll(function(){
	if( $(this).scrollTop() > 615){
		$("nav").addClass("nav_fxd");
	}
	else{
		$("nav").removeClass("nav_fxd");
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



// animate Resume_button on half scroll
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

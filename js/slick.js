$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:4,
		slidesToScroll:1,
		speed:500,
		easing:'linear',
		infinite:false,
		initialSlide:3,
		draggable:true,
		touchTreshold:10,
		waitForAnimate:true,
		centerMode:true,
		variableWidth:true,
		responsive:[
			{
				breakpoint:760,
				settings: {
					
				}
			},
			{
				breakpoint:480,
				settings: {
					
				}
			},

		]
	});
});
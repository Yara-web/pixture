$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:4,
		slidesToScroll:1,
		speed:500,
		easing:'linear',
		infinite:false,
		initialSlide:3,
		draggable:false,
		touchTreshold:10,
		waitForAnimate:false,
		centerMode:true,
		variableWidth:true,
		responsive:[
			{
				breakpoint:760,
				settings: {
					arrows:false,
					initialSlide:5,
					slidesToShow:1,
				}
			},
			{
				breakpoint:480,
				settings: {
					arrows:false,
					initialSlide:5,
					slidesToShow:1,
				}
			},

		]
	});
});
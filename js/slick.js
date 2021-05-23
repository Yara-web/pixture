$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:500,
		easing:'linear',
		infinite:false,
		initialSlide:2,
		draggable:false,
		touchTreshold:10,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:true,
		responsive:[
			{
				breakpoint:760,
				settings: {
					arrows:false,
					initialSlide:5,
					slidesToShow:1,
					centerMode:true,
				}
			},
			{
				breakpoint:480,
				settings: {
					arrows:false,
					initialSlide:5,
					slidesToShow:1,
					centerMode:true,
				}
			}

		]
	});
});
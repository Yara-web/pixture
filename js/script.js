
"use strict"

document.querySelector('.burger-menu').addEventListener('click', function(){
	document.querySelector('.burger__nav').classList.toggle('active');
	document.querySelector('.burger-menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
});

document.querySelector('.burger__list').addEventListener('click', function(){
	document.querySelector('.burger__nav').classList.remove('active');
	document.querySelector('.burger-menu').classList.remove('active');
	document.querySelector('body').classList.remove('lock');
});



function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});


	const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

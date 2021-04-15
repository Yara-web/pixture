document.querySelector('.burger-menu').addEventListener('click', function(){
	document.querySelector('.burger__nav').classList.toggle('active');
	document.querySelector('.burger-menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
});



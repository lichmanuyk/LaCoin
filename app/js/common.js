$(function() {


	$('.menu-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn-active');
		$('.head-icons').toggleClass('anim2');
		$('.head-links').toggleClass('anim1');
		$('h1').toggleClass('opac');
		$('.h2').toggleClass('opac');
	});

	
	$('.head-icons').on('click', function(e) {
		if ($('.menu-btn').hasClass('menu-btn-active')) {
			$('.menu-btn').toggleClass('menu-btn-active');
			$('.head-icons').toggleClass('anim2');
			$('.head-links').toggleClass('anim1');
			$('h1').toggleClass('opac');
			$('.h2').toggleClass('opac');
		}
	});

	$('.head-links').on('click', function(e) {
		if ($('.menu-btn').hasClass('menu-btn-active')) {
			$('.menu-btn').toggleClass('menu-btn-active');
			$('.head-icons').toggleClass('anim2');
			$('.head-links').toggleClass('anim1');
			$('h1').toggleClass('opac');
			$('.h2').toggleClass('opac');
		}
	});
});

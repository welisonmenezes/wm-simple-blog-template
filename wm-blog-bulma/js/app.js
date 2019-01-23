$(window).on('load', function () {

	if($('.carousel').length){
		var carousels = bulmaCarousel.attach();
	}
	
    setTimeout(function () {
        $('body').fadeTo(300, 1);
    }, 500);
});


// init toogle navbar (responsive small)
$('.navbar-toggler').on('click', function(){
	var nav = $('#navbarMain');
	if(nav.hasClass('opened')){
		nav.slideUp(300, function(){
			nav.removeClass('opened');
		});
	}else{
		nav.slideDown(300, function() {
			nav.addClass('opened');
		});
	}
});

$('.nav-main li.dropdown').on('click', function(){
	var windowWidth = window.innerWidth || $(window).width();
	if(windowWidth > 810) return; 
	var t = $(this);
	var nav = t.find('.menu');
	if(t.hasClass('opened')){
			t.removeClass('opened');
	}else{
			t.addClass('opened');
	}
});


$('.open-modal').on('click', function(){
	var t = $(this);
	var s_target = t.attr('data-target');
	if(s_target){
		var target = $(s_target);
		if(target){
			target.addClass('is-active');
		}
	}
	return false;
});

$('.close-modal').on('click', function(){
	var t = $(this);
	var target = $('.modal.is-active');
	if(target){
		target.removeClass('is-active');
	}
	return false;
});
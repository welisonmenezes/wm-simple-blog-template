$(window).on('load', function () {
    setTimeout(function () {
        $('body').fadeTo(300, 1);
    }, 500);
});


new Foundation.DropdownMenu($('.nav-main.dropdown.menu'), {});

new Foundation.Reveal($('.modal.reveal'), {});


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


$('.nav-main li').on('click', function(){
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


$('.orbit').each(function(index, el) {
	var t = $(this);
	new Foundation.Orbit(t, {});
});
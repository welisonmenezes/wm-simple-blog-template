$('.dropdown-trigger').dropdown();

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
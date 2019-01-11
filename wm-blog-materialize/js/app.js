// init dropdown
$('.dropdown-trigger').dropdown();

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

// inti modal
$('.modal').modal({
	startingTop: '5%',
	endingTop: '5%'
});

// init carousel
$('.carousel').carousel({
	dist: 0,
	numVisible: 1,
	fullWidth: true,
	indicators: false,
	noWrap: true
});
$('.carousel-wrap .btn-next-prev.prev').on('click', function(){
	var car = $(this).parent().find('.carousel');
	if(car){
		car.carousel('prev');
	}
});
$('.carousel-wrap .btn-next-prev.next').on('click', function(){
	var car = $(this).parent().find('.carousel');
	if(car){
		car.carousel('next');
	}
});
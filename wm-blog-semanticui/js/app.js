$(window).on('load', function () {

	$('.glide').each(function(index, el) {
		if (el) {
			var id = $(el).attr('id');
			if (id) {
				new Glide('#' + id, {
					type: 'carousel',
					autoplay: 4000,
					animationDuration: 1500
				}).mount();
			}
		}
	});

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

$('.menu-dropdown > a').on('click', function() {
	var t = $(this);
	var p = t.parent();
	var menu = p.find('.menu');

	if (menu) {
		if (p.hasClass('opened')) {
			p.removeClass('opened');
		} else {
			p.addClass('opened');
		}
	}
	return false;
});


$('.open-modal').on('click', function(){
	var t  = $(this);
	var idModal = t.attr('data-target');
	if (idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).modal({
			closable: true
		});
	}
	return false;
});
$('.close-modal').on('click', function(){
	var t = $(this);
	$('.modal').modal('hide');
	return false;
});
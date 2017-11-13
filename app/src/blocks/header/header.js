var
	classHeader = 'header',
	classActive = classHeader + '_collapse',
	$header = $('.' + classHeader),
	width = 992;

$(window).on('scroll resize', function() {

	if (window.innerWidth < width) return;

	if ($(window).scrollTop() > 0) {
		$header.addClass(classActive);
	} else {
		$header.removeClass(classActive);
	}
});
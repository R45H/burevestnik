var
	classBlock = 'section__next',
	$down = $('.' + classBlock),
	scrollDelay = 700;

$down.on('click', function() {
	var
		$nextSection = $(this).closest('.section').next(),
		position = $nextSection.offset().top;

	if ($nextSection.hasClass('section')) {
		$('body, html').animate({
			scrollTop: position
		}, scrollDelay);
	}
});
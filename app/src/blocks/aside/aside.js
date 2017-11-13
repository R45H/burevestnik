var
	classBlock = 'aside',
	classToggle = 'js-opened',
	$aside = $('.' + classBlock),
	$asideSub = $aside.find('.' + classBlock + '__sub'),
	$asideItemsWithSub = $asideSub.parent();

$asideItemsWithSub.on('click', function() {
	if (window.innerWidth > 575) return;

	var $this = $(this);

	if ($this.hasClass(classToggle)) {
		$this
			.removeClass(classToggle)
			.find('.' + classBlock + '__sub')
			.slideUp(200);
		return;
	}

	$asideSub.each(function() {
		$(this)
			.slideUp(200)
			.parent()
			.removeClass(classToggle);
	});

	$this
		.addClass(classToggle)
		.find('.' + classBlock + '__sub')
		.slideDown(200);
});
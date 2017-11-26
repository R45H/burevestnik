var
	classAside = 'aside',
	classAOpened = classAside + '__item_opened',
	$aside = $('.' + classAside),
	$asideSub = $aside.find('.' + classAside + '__sub'),
	$asideArrow = $asideSub.parent().find('.' + classAside + '__arrow'),
	$body = $('body'),
	resMobile = 575;

$asideArrow.on('click', function(e) {
	if (window.innerWidth > resMobile) return;

	e.preventDefault();

	var $item = $(this).parents('.' + classAside + '__item');

	if ($item.hasClass(classAOpened)) {
		toggleSub($item);
		return;
	}

	$aside.find('.' + classAOpened).each(function() {
		toggleSub($(this));
	});

	toggleSub($item, 'open');
});

$(window).on('resize', function() {

	if (window.innerWidth <= resMobile) {

		if ($toggle.hasClass(classTActive) && !$body.hasClass('noscroll')) {
			toggleBodyScroll(true);
		}
		return;
	}

	if ($toggle.hasClass(classTActive) && $body.hasClass('noscroll')) {
		toggleBodyScroll(false);
	}

	// Закрываем на десктопе открытые подменю
	var $openedItem = $aside.find('.' + classAOpened);
	if ($openedItem.length) {
		toggleSub($openedItem, '', 0);
	}
	// =====
});

function toggleSub($item, action, speed) {

	if (speed === undefined) {
		speed = 200;
	}

	if (action == 'open') {
		$item
			.addClass(classAOpened)
			.find('.' + classAside + '__sub')
			.slideDown(speed);
	} else {
		$item
			.removeClass(classAOpened)
			.find('.' + classAside + '__sub')
			.slideUp(speed, function() {
				$item
					.find('.' + classAside + '__sub')
					.css('display', '');
			});
	}
}
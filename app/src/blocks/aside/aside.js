var
	classAside = 'aside',
	classAOpened = classAside + '__item_opened',
	$aside = $('.' + classAside),
	$asideSub = $aside.find('.' + classAside + '__sub'),
	$asideArrow = $asideSub.parent().find('.' + classAside + '__arrow'),
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
	if (window.innerWidth <= resMobile) return;

	var $openedItem = $aside.find('.' + classAOpened);

	if ($openedItem.length) {
		toggleSub($openedItem, '', 0);
	}
});

function toggleAside(action, speed) {

	if (speed === undefined) {
		speed = 200;
	}

	if (action == 'open') {
		$aside.slideDown(speed);
	} else {
		$aside.slideToggle(speed);

		$aside.find('.' + classAOpened).each(function() {
			toggleSub($(this));
		});
	}
}

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
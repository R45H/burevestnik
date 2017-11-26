var
	classToggle = 'toggle',
	$toggle = $('.' + classToggle),
	classTActive = classToggle + '_opened',
	classTInactive = classToggle + '_closed';

/* Анимация гамбургера при клике */
$toggle.on('click', function() {
	var $this = $(this);

	if (!$this.hasClass(classTActive) && !$this.hasClass(classTInactive)) {
		$this.addClass(classTActive);
	} else {
		$this.toggleClass(classTActive + ' ' + classTInactive);
	}
});
/* ===== */

/* Работа бокового меню */
$toggle.on('click', function() {
	if ($(this).hasClass(classTActive)) {
		toggleAside('open');
	} else {
		toggleAside();
	}
});
/* ===== */

/* Клик по документу */
$(document).on('click', function(event) {
	if (!$toggle.hasClass(classTActive)) return;

	var $target = $(event.target);

	if ($target.closest('.' + classToggle).length ||
		$target.closest('.' + classAside).length) return;

	$toggle
		.removeClass(classTActive)
		.addClass(classTInactive);

	toggleAside('close', 75);
});
/* ===== */

function toggleAside(action, speed) {

	if (speed === undefined) {
		speed = 200;
	}

	if (action == 'open') {
		$aside.slideDown(speed);

		if (window.innerWidth <= resMobile) {
			toggleBodyScroll(true);
		}
	} else {
		$aside.slideToggle(speed);

		$aside.find('.' + classAOpened).each(function() {
			toggleSub($(this));
		});

		if (window.innerWidth <= resMobile) {
			toggleBodyScroll(false);
		}
	}
}
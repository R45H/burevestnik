var
	classBlock = 'toggle',
	$toggle = $('.' + classBlock),
	classActive = classBlock + '_opened',
	classInactive = classBlock + '_closed',
	classAside = 'aside',
	$aside = $('.' + classAside);

/* Анимация гамбургера при клике */
$toggle.on('click', function() {
	var $this = $(this);

	if (!$this.hasClass(classActive) && !$this.hasClass(classInactive)) {
		$this.addClass(classActive);
	} else {
		$this.toggleClass(classActive + ' ' + classInactive);
	}
});
/* ===== */

/* Работа бокового меню */
$toggle.on('click', function() {
	$aside.slideToggle(200);
});
/* ===== */

/* Клик по документу */
$(document).on('click', function(event) {
	if (!$toggle.hasClass(classActive)) return;

	var $target = $(event.target);

	if ($target.closest('.' + classBlock).length ||
		$target.closest('.' + classAside).length) return;

	$toggle
		.removeClass(classActive)
		.addClass(classInactive);

	$aside.slideUp(75);
});
/* ===== */
var
	classBlock = 'toggle',
	$toggle = $('.' + classBlock),
	classActive = classBlock + '_opened',
	classInactive = classBlock + '_closed';

/* Анимация гамбургера при клике */
$toggle.on('click', function() {
	var $this = $(this);

	if (!$this.hasClass(classActive) && !$this.hasClass(classInactive)) {
		$this.addClass(classActive);
	} else {
		$this.toggleClass(classActive);
		$this.toggleClass(classInactive);
	}
});
/* ===== */
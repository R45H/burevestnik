var
	classBlock = 'accord',
	classOpened = classBlock + '__panel_opened',
	classIsToggle = 'js-accord_toggle',
	$panel = $('.' + classBlock + '__panel'),
	delay = 300;

$panel.each(function() {
	var
		$this = $(this),
		$block = $this.closest('.' + classBlock),
		$head = $this.find('.' + classBlock + '__head'),
		$body = $this.find('.' + classBlock + '__body');

	$head.on('click', function() {

		if ($this.hasClass(classOpened)) {
			$body
				.css('display', 'block')
				.slideUp(delay);
		} else {

			// Если true, то может быть открыта только одна панель
			if ($block.hasClass(classIsToggle)) {
				$block
					.find('.' + classOpened)
					.removeClass(classOpened)
					.find('.' + classBlock + '__body')
					.css('display', 'block')
					.slideUp(delay);
			}
			// =====

			$body.slideDown(delay);
		}

		$this.toggleClass(classOpened);
	});
});
var
	classBlock = 'input',
	classActive = classBlock + '_focus',
	$block = $('.' + classBlock);

$block.each(function() {
	var
		$this = $(this),
		$title = $this.find('.' + classBlock + '__title'),
		$item = $this.find('.' + classBlock + '__item');

	if ($item.val()) {
		$this.addClass(classActive);
	}

	$item.on('focusin', function() {
		$this.addClass(classActive);
	});

	$item.on('focusout', function() {

		setTimeout(function () {
			var str = $item.val();

			if ($item.attr('type') === 'tel') {
				str = str.replace(/[()_-]|(\+\d+\s)/g, '');
			}

			if (!str) {
				$this.removeClass(classActive);
			}
		}, 0);
	});

	if ($item.attr('type') === 'tel') {
		$item.mask("+7 (999) 999-99-99");
	}
});
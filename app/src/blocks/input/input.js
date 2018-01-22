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
		if (!$item.val()) {
			$this.removeClass(classActive);
		}
	});
});
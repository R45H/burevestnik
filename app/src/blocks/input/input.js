var
	classBlock = 'input',
	classActive = classBlock + '_focus',
	$block = $('.' + classBlock);

$block.each(function() {
	var
		$this = $(this),
		$title = $this.find('.' + classBlock + '__title'),
		$item = $this.find('.' + classBlock + '__item');

	$item.on('focusin', function() {
		$this.addClass(classActive);
	});

	$item.on('focusout', function() {
		var val = $item.val();

		if (!val) {
			$this.removeClass(classActive);
		}
	});
});
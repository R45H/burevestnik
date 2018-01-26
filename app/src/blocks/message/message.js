var $initBlock = $('[data-message]');

$initBlock.each(function() {
	var
		$this = $(this),
		id = $this.attr('data-message'),
		delay = $this.attr('data-message-delay');


	$this.on('click', function() {
		showMess(id, delay);
	});
});
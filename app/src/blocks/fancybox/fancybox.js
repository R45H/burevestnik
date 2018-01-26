var
	$links = $('.fancybox'),
	$body = $('body');

$links.fancybox({
	onActivate: function() {
		$body.removeClass('compensate-for-scrollbar fancybox-active');
		toggleBodyScroll();
	},
	beforeClose: function() {
		toggleBodyScroll(false);
	}
});
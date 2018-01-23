var $links = $('.fancybox');

$links.on('click', function() {
	$.fancybox.open($links, {}, $links.index(this));
	return false;
});
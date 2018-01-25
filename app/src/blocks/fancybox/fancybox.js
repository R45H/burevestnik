// TODO: Прыгает шапка при клике

var $links = $('.fancybox');

$links.on('click', function() {
	$.fancybox.open($links, {}, $links.index(this));
	return false;
});
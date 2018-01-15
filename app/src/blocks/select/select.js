var
	cSelect = 'select',
	$select = $('.' + cSelect);

$select.selectmenu({
	classes: {
		'ui-selectmenu-button': cSelect + '__current', // Кнопка селекта
		'ui-selectmenu-button-open': cSelect + '__current_active', // Состояние кнопки при открытом селекте
		'ui-selectmenu-text': cSelect + '__text', // Текст внутри кнопки
		'ui-selectmenu-icon': cSelect + '__icon', // Иконка внутри кнопки
		'ui-selectmenu-menu': cSelect + '__list' // Выпадающий список
	}
});

$(window).on('resize', function() {
	$select.selectmenu('close');
});
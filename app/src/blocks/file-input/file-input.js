// TODO: При закрывании модалки файл не обнуляется

var
	cBlock = 'file-input', // Класс блока
	$cBlock = $('.' + cBlock), // Выборка всех блоков
	cfInput = cBlock + '__input', // Класс инпута типа файл
	cfSelected = cBlock + '_selected', // Класс инпута с выбранным файлом
	cFocusInput = cBlock + '_focus'; // Класс, добавляющий стили при фокусе (для FF)

$cBlock.each(function() {
	var
		$this = $(this),
		$fInput = $this.find('.' + cBlock + '__input'), // Выборка всех инпутов типа файл
		$fReset = $this.find('.' + cBlock + '__reset'), // Крестики для удаления добавленного файла
		fId = $fInput.attr('id'), // ID текущего инпута
		$fLabel = $('label[for=' + fId + ']'), // Label, привязанный к текущему input
		$fText = $this.find('.' + cBlock + '__text'), // Текст блока
		fText = $fLabel.attr('data-text'); // Начальный текст кнопки

	// Обработка добавления файла
	$fInput.on('change', function() {
		var
			$this = $(this),
			value = $this.val(); // Путь добавленного файла

		if (!value) return; // Если нажали "отмена"

		$fText.text(value.slice(value.lastIndexOf('\\') + 1)); // Отображение названия файла
		$this.parent().addClass(cfSelected);
	});

	// Обработка удаления файла
	$fReset.on('click', function() {
		var
			$this = $(this),
			$parent = $this.parent(), // Текущий блок
			$input = $parent.find('.' + cfInput); // Текущий инпут

		if ($parent.hasClass(cfSelected)) {
			$input.val('');
			$parent.removeClass(cfSelected);
			$fText.text(fText);
		}
	});

	// Обработка фокуса на Firefox
	$fInput.on( 'focus', function(){ $(this).parent().addClass(cFocusInput); });
	$fInput.on( 'blur', function(){ $(this).parent().removeClass(cFocusInput); });
});
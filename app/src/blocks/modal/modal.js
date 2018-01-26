var
	$links = $('[data-modal]'),
	classBlock = 'modal',
	classClose = classBlock + '__close',
	classAccord = 'accord';

if (!$links.length) return;

$links.each(function() {
	var
		$this = $(this),
		id = addIdHash($this.attr('data-modal'));

	if (!$(id).length) return;

	// Клик по кнопке, открывающей модалку
	$this.on('click', function() {
		var isAccord = !!($this.parents('.' + classAccord).length);

		toggleModal('open', id);

		if (isAccord) {
			var title = $this
				.parents('.' + classAccord + '__body')
				.prev()
				.find('.' + classAccord + '__title')
				.text();

			$(id).find('.js-' + classBlock + '__hidden-title').val(title);
		}

		return false;
	});
	// =====

	// Клик по кнопке "закрыть"
	$(id).find('.' + classClose).on('click', function() {
		toggleModal('close', id);
	});
	// =====

	// Клик по серому фону
	$(id).on('click', function(event) {
		if (!$(event.target).hasClass(classBlock)) return;
		toggleModal('close', id);
	});
	// =====
});
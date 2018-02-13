var
	classBlock = 'select-linked',
	classOpened = classBlock + '_opened',
	classOpenedHidden = classBlock + '_opened-hidden',
	$block = $('.' + classBlock),
	classWrap = classBlock + '_wrap',
	delay = 150;

/* Клик по селекту */
$block.each(function() {
	var $this = $(this);

	$this.on('click', function() {
		var $openedBlock = $block.filter('.' + classOpened);

		if ($this.hasClass(classOpened)) {
			toggleSelect($this, 'close');
		} else {

			if ($openedBlock.length) {
				toggleSelect($openedBlock, 'close');
			}

			toggleSelect($this, 'open');
		}
	});
});
/* ===== */

/* Клик по документу */
$(document).on('click', function(event) {
	var $target = $(event.target);
	if ($target.closest('.' + classBlock).length) return;

	var $openedBlocks = $block.filter('.' + classOpened);

	if (!$openedBlocks.length) return;

	toggleSelect($openedBlocks, 'close');
});
/* ===== */

/* Ресайз */
$(window).on('resize', function() {
	var $openedBlock = $block.filter('.' + classOpened);
	if (!$openedBlock.length) return;
	toggleSelect($openedBlock, 'close');
});
/* ===== */

/* Функция сворачивания / разворачивания селекта */
function toggleSelect($item, action) {
	var
		$this = $item,
		$dropdown = $this.find('.' + classBlock + '__wrap');

	if (action == 'open') {

		$this.addClass(classOpenedHidden);
		if (!isSelectInnerDoc($this)) {
			$this.addClass(classWrap);
		}
		$this.removeClass(classOpenedHidden);

		$this.addClass(classOpened);
		$dropdown.show(delay);
	}

	if (action == 'close') {
		$this.removeClass(classOpened);
		$dropdown.hide(delay);

		setTimeout(function() {
			$this.removeClass(classWrap);
		}, delay);
	}
}
/* ===== */

/* Функция, которая проверяет вылезание выпадающего меню за экран */
function isSelectInnerDoc($item) {
	var
		$this = $item,
		$dropdown = $this.find('.' + classBlock + '__wrap'),

		docWidth = $('body').width(),
		dropdownWidth = $dropdown.outerWidth(),
		dropdownLeft = $this.offset().left;

	return docWidth >= dropdownWidth + dropdownLeft;
}
/* ===== */

var
	cRunner = 'runner',
	cCostEmpty = cRunner + '__cost-val_empty',
	$runner = $('.' + cRunner);

$runner.each(function() {
	var
		$this = $(this),
		$item = $this.find('.' + cRunner + '__item'),
		$cost = $this.find('.' + cRunner + '__cost-val'),
		min = parseInt($this.attr('data-min')),
		max = parseInt($this.attr('data-max')),
		step = parseInt($this.attr('data-step')),
		unit = $cost.attr('data-unit');

	setUnit(unit);

	$item.slider({
		range: 'max',
		min: min,
		max: max,
		step: step,
		value: min,
		classes: {
			"ui-slider-range": cRunner + '__rail',
			"ui-slider-handle": cRunner + '__handle'
		},
		slide: function(event, ui) {

			if (ui.value == min) {
				setUnit(unit);
				$cost.addClass(cCostEmpty);
			} else {
				setUnit(ui.value);
				$cost.removeClass(cCostEmpty);
			}
		}
	});

	function setUnit(value) {
		$cost.html(value);
	}
});
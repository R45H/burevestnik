var
	cRunner = 'runner',
	cCostEmpty = cRunner + '__cost_empty',
	$runner = $('.' + cRunner);

$runner.each(function() {
	var
		$this = $(this),
		$item = $this.find('.' + cRunner + '__item'),
		$cost = $this.find('.' + cRunner + '__cost'),
		$shadowMin = $this.find('[name="runner-min"]'),
		$shadowMax = $this.find('[name="runner-max"]'),
		min = parseInt($this.attr('data-min')),
		max = parseInt($this.attr('data-max')),
		step = parseInt($this.attr('data-step')),
		unit = $cost.attr('data-unit');

	setUnit(unit);

	$item.slider({
		range: true,
		min: min,
		max: max,
		step: step,
		values: [min, max],
		classes: {
			"ui-slider-range": cRunner + '__rail',
			"ui-slider-handle": cRunner + '__handle'
		},
		slide: function(event, ui) {

			if (ui.values[0] == min && ui.values[1] == max) {
				setUnit(unit);
				$cost.addClass(cCostEmpty);
			} else {
				setUnit(ui.values[0], ui.values[1]);
				$cost.removeClass(cCostEmpty);
			}
		}
	});

	function setUnit(param1, param2) {
		var
			val1 = param2 ? param1 : min,
			val2 = param2 ? param2 : max,
			html = param2 ? param1 + ' - ' + param2 : param1;

		$cost.html(html);
		$shadowMin.val(val1);
		$shadowMax.val(val2);
	}
});
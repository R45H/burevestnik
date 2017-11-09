var
	classSlider = 'slider',
	classDots = classSlider + '__dots container',
	classDot = classSlider + '__dot',
	$slider = $('.' + classSlider),
	$items = $slider.children();

if ($items.length > 1) {

	$slider.slick({
		dots: true,
		dotsClass: classDots,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		arrows: false
	});
}
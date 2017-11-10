$(function() {
	@@include('blocks/map/map.js')

	(function() { @@include('blocks/slider/slider.js') }());
	(function() { @@include('blocks/toggle/toggle.js') }());

	@@include('global/global.js')
});

@@include('global/functions.js')
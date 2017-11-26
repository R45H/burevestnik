$(function() {
	@@include('blocks/map/map.js')

	(function() {
		@@include('blocks/toggle/toggle.js')
		@@include('blocks/aside/aside.js')
	}());

	(function() { @@include('blocks/header/header.js') }());
	(function() { @@include('blocks/slider/slider.js') }());
	(function() { @@include('blocks/accord/accord.js') }());
	(function() { @@include('blocks/svg4everybody.js') }());

	@@include('global/global.js')
});

@@include('global/functions.js')
/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.563510, lng: 30.135450}; // г. Гатчина, ул. Соборная, 31
	var dot2 = {lat: 59.561253, lng: 30.135082}; // г. Гатчина, ул. Чехова, 10
	var dotCenter = {lat: 59.562590, lng: 30.135332};
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) { // Карта 1
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dotCenter,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					google.maps.MapTypeId.roadmap
				]
			}
		});

		/* Адреса */
		var address = [
			'188305, Россия, Ленинградская обл,<br>г. Гатчина, ул. Соборная, 31',
			'188304, Россия, Ленинградская обл,<br>г. Гатчина, ул. Чехова, 10'
		];
		/* ====== */

		/* Образец карточки */
		function getContent(address) {
			return '' +
				'<div class="map__info">' +
					'<div class="map__img-wrap">' +
						'<img src="../img/logo-sm.svg" alt="" class="map__img" width="75" height="75">' +
					'</div>' +
					'<div class="map__text-wrap">' +
						address +
					'</div>' +
				'</div>';
		}
		/* ================ */

		/* Рамка */
		var infoWindow = new google.maps.InfoWindow({
			content: getContent(address[0])
		});
		/* ===== */

		/* Маркеры */
		var image = 'img/map-marker.svg';

		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			icon: image
		});

		var marker2 = new google.maps.Marker({
			position: dot2,
			map: map1,
			icon: image
		});

		marker1.addListener('click', function() {
			infoWindow.setContent(getContent(address[0]));
			infoWindow.open(map1, marker1);
			refreshResizeListener(map1, dot1);
		});

		marker2.addListener('click', function() {
			infoWindow.setContent(getContent(address[1]));
			infoWindow.open(map1, marker2);
			refreshResizeListener(map1, dot2);
		});
		/* ======= */

		// При ресайзе
		var listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");
			map1.panTo(dotCenter);
		});
		// =====

		/* ===== */
	}
	/* ===== */

	function refreshResizeListener(map, dot) {
		google.maps.event.removeListener(listener);
		listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map, "resize");
			map.panTo(dot);
		});
	}
}
/* ========== */

/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.563510, lng: 30.135450}; // г. Гатчина, ул. Соборная, 31
	/* ===== */

	/* Карты */
	if (document.getElementById('map')) { // Карта 1
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dot1,
			scrollwheel: false,
			mapTypeControl: true,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					google.maps.MapTypeId.roadmap
				]
			}
		});

		/* Образец карточки */
		var contentString1 = '' +
			'<div class="map__info">' +
				'<div class="map__img-wrap">' +
					'<img src="../img/logo-sm.svg" alt="" class="map__img" width="75" height="75">' +
				'</div>' +
				'<div class="map__text-wrap">' +
					'188305, Россия, Ленинградская обл,<br>г. Гатчина, ул. Соборная, 31' +
				'</div>' +
			'</div>';
		/* ================ */

		/* Рамка */
		var infoWindow = new google.maps.InfoWindow({
			content: contentString1
		});
		/* ===== */

		/* Маркеры */
		var image = 'img/map-marker.svg';

		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			icon: image
		});

		marker1.addListener('click', function() {
			infoWindow.open(map1, marker1);
		});
		/* ======= */

		// При ресайзе
		google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");
			map1.panTo(dot1);
		});
		// =====

		/* ===== */
	}
	/* ===== */
}
/* ========== */

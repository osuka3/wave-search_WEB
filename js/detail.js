$(function() {

	//PIE
	if (window.PIE) {
		$('#recommend').each(function() {
			PIE.attach(this);
		});
	}

	//ページ内リンク
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	//マップ
	var mapdiv = document.getElementById('mapCanvas');
	var geocoder = new google.maps.Geocoder();

	var myOptions = {
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scaleControl: true,
		mapTypeControl: false,
		navigationControl: false,
		streetViewControl: false
	};

	var map = new google.maps.Map(mapdiv, myOptions);

	var marker = new google.maps.Marker({map: map});

	var sad = $('#address').text();

	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({ 'address': sad}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {

			map.setCenter(results[0].geometry.location);
			marker.setPosition(results[0].geometry.location);
		}
	});
	var styleOptions = [
		{
			"stylers": [
				{ "saturation": -100 }
			]
		},{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{ "color": "#ff7800" }
			]
		},{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
				{ "color": "#666666" }
			]
		},{
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [
				{ "color": "#666666" }
			]
		}
	];
	var lopanType = new google.maps.StyledMapType(styleOptions);
	map.mapTypes.set('noText', lopanType);
	map.setMapTypeId('noText');
});
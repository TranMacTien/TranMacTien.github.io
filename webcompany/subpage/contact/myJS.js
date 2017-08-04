function myMap() {
	var myLatLng = {lat: 10.782824, lng: 106.697488};
	var mapOptions = {
		center: myLatLng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'My Company'
	});
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}	

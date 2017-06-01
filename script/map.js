var map;
var initMap = () => {
    const iceland = {lat: 65, lng: -18.7};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        minZoom: 7,
        center: iceland,
        mapTypeId: 'satellite',
        streetViewControl: false,
        disableDefaultUI: true
    });
    google.maps.event.addListener(map, "click", (e) => {
        gameGuess({x: e.latLng.lat(), y: e.latLng.lng()});
    });
}

var drawCoords = (click, correct) => {
    var clicked = new google.maps.Marker({
        position: new google.maps.LatLng(click.lat, click.lng),
        map: map
    });

    var correct = new google.maps.Marker({
        position: new google.maps.LatLng(correct.x, correct.y),
        map: map
    });
}
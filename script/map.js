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
        gameGuess({lat: e.latLng.lat(), lng: e.latLng.lng()});
    });
}

var drawIncorrectCoords = (coords) => {
    var clicked = new google.maps.Marker({
        position: new google.maps.LatLng(coords.lat, coords.lng),
        map: map,
        icon: 'img/redmarkersmall.png'
    });
    return true;
}

var drawCorrectCoords = (coords) => {
    var correct = new google.maps.Marker({
        position: new google.maps.LatLng(coords.lat, coords.lng),
        map: map,
        icon: 'img/greenmarkersmall.png'
    });
    return true;
}
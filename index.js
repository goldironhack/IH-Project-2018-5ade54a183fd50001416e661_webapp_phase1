var map;
var NY = {lat: 40.730610, lng: -73.956242};
var university = {lat: 40.729055, lng: -73.996523};

function initMap(){
    map = new google.maps.Map(document.getElementById('mapContainer'), {
        zoom: 12,
        center: NY
    });
    var universityMark = new google.maps.Marker({
          position: university,
          map: map
        });
}
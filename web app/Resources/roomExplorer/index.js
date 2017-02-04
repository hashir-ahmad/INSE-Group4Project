function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('gmap'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

var showGmap = document.getElementById('showGmap');
var gmap = document.getElementById('gmap');


gmap.body.style.display = 'none';

showGmap.addEventListener('click', function(){
  gmap.body.style.display = 'block';
});

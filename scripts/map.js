let map;
function initMap() {
  let myOptions = {
    zoom: 11,
    center: {lat: 39.932, lng: -105.281},
    controlSize: 30, //size of the controls in pixels
    mapTypeControl: true,
    zoomControl: true,
    mapTypeId: 'terrain',

  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}

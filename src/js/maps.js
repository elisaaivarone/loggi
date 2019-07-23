// import avaiableDrivers from './avaiableDrivers';
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: -23.6, lng: -46.7 },
    mapTypeId: 'roadmap'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);

}
// console.log(avaiableDrivers());
function eqfeed_callback(results) {
  const heatmapData = avaiableDrivers().map(driver => {return new google.maps.LatLng(driver.lat, driver.lng)});
  console.log(heatmapData);
  // for (var i = 0; i < results.features.length; i++) {
  //   var coords = results.features[i].geometry.coordinates;
  //   var latLng = new google.maps.LatLng(coords[1], coords[0]);
  //   heatmapData.push(latLng);
  // }
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    dissipating: false,
    map: map
  });
}
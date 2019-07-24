let map, heatmap;

const myCenter = { lat: -23.55, lng: -46.63 };
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: -23.6, lng: -46.7 },
    mapTypeId: 'roadmap'
  });

  const script = document.createElement('script');

  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

function eqfeed_callback(results, center = myCenter) {
  getDrivers(localStorage.getItem('center')).then(drivers => {
    const heatmapData = drivers.map(driver =>
      new google.maps.LatLng(driver.lat, driver.lng));
    heatmap ? heatmap.setMap(null) : null
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 20,
      map: map,
    });
  })
}

setInterval(() => eqfeed_callback(), 5000)
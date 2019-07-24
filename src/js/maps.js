let map;

const center = { lat: -23.6, lng: -46.7 };

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: { lat: -23.6, lng: -46.7 },
    mapTypeId: 'roadmap'
  });

  const script = document.createElement('script');

  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

function eqfeed_callback(results) {
  getDrivers().then(drivers => {
    const heatmapData = drivers.map(driver => new google.maps.LatLng(driver.lat, driver.lng));
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 20,
      map: map,
    });
  })
}


function getDrivers() {

  const endpoint = "https://www.loggi.com/graphql";

  const email = 'janarf@hotmail.com'
  const apiKey = '8948455f695c5890af5f2e9ff18ef1ac3b1b3c35'
  const center = { lat: -23.55, lng: -46.63 }
  const queryapi = `{
	closestDrivers(productType: 0, transportType: "1", lat:${center.lat}, lng: ${center.lng}, radius: 10.0, limit: 3000, citySlug:"sp") {
		driversCount
		readyDriversCount
    busyDriversCount
    drivers {
    lng
    lat
    busy
    }
  }
}`;

  const options = {
    method: "POST",
    headers: {
      "Authorization": `ApiKey ${email}:${apiKey}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      operationName: null,
      query: queryapi,
      variables: {}
    })
  }

  return window.fetch(endpoint, options)
    .then(res => res.json())
    .then(res => {
      return res.data.closestDrivers.drivers
        .filter(driver => driver.busy === false)
    })
}


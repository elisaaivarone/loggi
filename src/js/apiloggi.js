const fetch = require("node-fetch");

const endpoint = "https://www.loggi.com/graphql";

const email = 'silvio.machado@loggi.com'
const apiKey = '0f2199959067ac94a941e229c783bcb398f38d7d'

const queryapi = `{
	closestDrivers(productType: 0, transportType: "1", lat:-23.6, lng: -46.7, radius: 12.0, limit: 200, citySlug:"sp") {
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

function connectAPI() {
  fetch(endpoint, options)
    .then(res => {
      return (res);
    }).then(res => res.json())
    .then(res => {
      const availableDrivers = res.data.closestDrivers.drivers
        .filter(driver => driver.busy === false)
      console.log(availableDrivers)

    })
}

connectAPI();
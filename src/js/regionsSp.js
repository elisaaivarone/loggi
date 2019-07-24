const regionsSP = [
  { southZone: { lat: -23.64, lng: -46.69 } },
  { eastZone: { lat: -23.56, lng: -46.49 } },
  { northZone: { lat: -23.47, lng: -46.60 } },
  { centerZone: { lat: -23.55, lng: -46.63 } },
  { westZone: { lat: -23.48, lng: -46.69 } }
]

changeRegion = (regionName) => {
  console.log(regionsSP, regionName)
  console.log(regionsSP[eval(regionName)])

  regionsSP[regionName]
  map.setCenter(regionsSP[regionName])
}

const request = require('request')

const url = 'https://api.darksky.net/forecast/c34a4f7fecf55ec3445b8e45ed48c30c/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.currently)
  const { temperature, precipProbability } = response.body.currently
  console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFycmFsYXgiLCJhIjoiY2p4emFzcGxnMDE0MDNjcDJianlsdGEzYiJ9.GEcDstnNGSbFgNAJjjLulQ&limit=1'

request({ url: geocodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude, longitude)
})
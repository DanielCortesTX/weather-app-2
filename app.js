const request = require('request')

const url = 'https://api.darksky.net/forecast/c34a4f7fecf55ec3445b8e45ed48c30c/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  if(error){
    console.log('Unable to connect to weather service.')
    //Invalid input
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    const { temperature, precipProbability } = response.body.currently
    console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
  }
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFycmFsYXgiLCJhIjoiY2p4emFzcGxnMDE0MDNjcDJianlsdGEzYiJ9.GEcDstnNGSbFgNAJjjLulQ&limit=1'

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to geolocation')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try different search terms.')
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude) 
  }
})

// with asynchronus code, you can't use return inside of the function, you have to use a callback.
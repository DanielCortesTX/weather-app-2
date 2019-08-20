const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const address = process.argv[2]

// console.log(process.argv)

geocode('Philadelphia', (error, data) => {
  if(error){
    return console.log(error)
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if(error){
      console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
  })
})

// with asynchronus code, you can't use return inside of the function, you have to use a callback.
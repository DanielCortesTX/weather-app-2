const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/c34a4f7fecf55ec3445b8e45ed48c30c/' + latitude + ',' + longitude + ''

  request({url: url, json: true}, (error, response) => {
    if(error){
      callback('Unable to connect to weather Service', undefined)
    } else if (response.body.error){
      callback('Unable to find location', undefined)
    } else {
      const { temperature, precipProbability } = response.body.currently
      callback(undefined, `${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast
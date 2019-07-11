const request = require('request')

const url = 'https://api.darksky.net/forecast/c34a4f7fecf55ec3445b8e45ed48c30c/37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently)
})
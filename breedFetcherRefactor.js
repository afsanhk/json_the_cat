const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (response === undefined || response.statusCode === 404) {
      error = 'Invalid URL'
      callback(error,null);
    } else if (error) {
      callback(error,null);
    }
     
    if (error === null) {
      let data = JSON.parse(body);
      if (data.length === 0) {
        error = `Please enter an appropriate breed name.`
        callback(error,null);
      } else {
        const desc = data[0].description;
        callback(null, desc);
      }
    }  
  });
}

module.exports = { fetchBreedDescription };
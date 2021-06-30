const request = require('request');

const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  if (response === undefined) {
    console.log(`Invalid URL`);
  }

  if (error) {
    return `Error: ${error}`;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Please enter an appropriate breed name.`);
  } else {
    console.log(data[0].description);
  }

});
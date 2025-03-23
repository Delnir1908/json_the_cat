const needle = require('needle');

const breedName = process.argv[2];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  //pring out connection error if there is any
  if (error) {
    console.log(error);
    return;
  } 

  //print out error code if content is not fetched
  if (response.statusCode !== 200) {
    console.log('Error: ', response.statusCode);
    return;
  } 
  
  //print out description if the breed is there and message showing if the breed is not
  if (body.length === 0) {
    console.log(`No breed found matching the name: ${breedName}`);
  } else {
    console.log(body[0].description);
  }
  
});


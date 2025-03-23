const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    //return connection error if there is 
    if (error) {
      callback(error, null);
      return ;
    } 
  
    //return error code if there is
    if (response.statusCode !== 200) {
      const err = new Error(`Failed to request breed information. Status Code: ${response.statusCode}`);
      callback(err, null); // Pass error to callback
      return;
    } 
    
    //return null if empty page, return desciption if fetched
    if (body.length === 0) {
      callback(null, null); // Pass no error but null as description
      return;
    } else {
      callback(null, body[0].description);
    }
    
  });
}


module.exports = { fetchBreedDescription };



const request = require('request');


const fetchBreedDescription = function (breedName, callback) {

    let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

    request(url, (error, response, body) => {
        if (error) {
            callback(error.message, null);
            return;
        }

        const data = JSON.parse(body);
        if (data.length === 0) {
            callback(`requested breed is not found.`, null);
            return;
        }

        callback(null, data[0].description);
    });

};

module.exports = { fetchBreedDescription };




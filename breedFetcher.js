const request = require('request');
const args = process.argv.slice(2);




let url = 'https://api.thecatpi.com/v1/breeds/search?q=' + args;

request(url, (error, response, body) => {
    if (error) {
        console.log("Error:", error);
        return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
        console.log(`requested breed is not found.`);
        return;
    }

    console.log(data[0].description);
});


// const baseUrl = require('../config');
const axios = require('axios').default;

function getCarsApi() {
    const promise = new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/api/v1/cars')
            .then((response) => resolve(response));
    })

    return promise;
}

module.exports = { getCarsApi };
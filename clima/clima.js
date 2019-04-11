const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=26eebe0a04aa61c2e78b757036d0b735&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
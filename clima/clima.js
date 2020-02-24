const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lng}&appid=228340f656e12412820979a61402c858&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}
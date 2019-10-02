import axios from 'axios'

const getCityData = (params = {}) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
            units: 'metric',
            id: params.openweatherCityId,
            lang: 'fr',
        }
    });
}

export default getCityData;

import axios from 'axios'
import _ from 'lodash'

const getCityData = (params = {}) => {
    const defaultParams = {
        APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
        units: 'metric',
        // id: params.openweatherCityId,
        lang: 'fr',
    }
    const data = _.merge(defaultParams, params);
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: data
    });
}

export default getCityData;

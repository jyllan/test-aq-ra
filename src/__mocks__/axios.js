// import mockAxios from 'jest-mock-axios';
// export default mockAxios;

// Mock the get function to return a fixture
const axios = {
    get: jest.fn(() => Promise.resolve({
        data: {
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "attaque de boulette geante",
                "icon": "10n"
            }],
            "main": {
                "temp": 20.38,
                "pressure": 1011,
                "humidity": 88,
                "temp_min": 19,
                "temp_max": 21
            },
            "wind": {
                "speed": 5.1,
                "deg": 280
            },
            "id": 2992166,
            "name": "Montpellier",
        }
    }))
}

export default axios;

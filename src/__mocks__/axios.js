const axios = {
    get: jest.fn(() => Promise.resolve({
        data: {
            "coord": {
                "lon": 3.88,
                "lat": 43.61
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "légère pluie",
                "icon": "10n"
            }],
            "base": "stations",
            "main": {
                "temp": 20.38,
                "pressure": 1011,
                "humidity": 88,
                "temp_min": 19,
                "temp_max": 21
            },
            "visibility": 10000,
            "wind": {
                "speed": 5.1,
                "deg": 280
            },
            "clouds": {
                "all": 100
            },
            "dt": 1569959705,
            "sys": {
                "type": 1,
                "id": 6518,
                "message": 0.0063,
                "country": "FR",
                "sunrise": 1569908479,
                "sunset": 1569950825
            },
            "timezone": 7200,
            "id": 2992166,
            "name": "Montpellier",
            "cod": 200
        }
    }))
}

export default axios;

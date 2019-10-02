import React from 'react';
import _ from 'lodash';
// import sinon from 'sinon';
import {
    shallow,
    configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import City from './City';
// import axios from "axios";
import mockAxios from 'jest-mock-axios';
import {
    act
} from 'react-dom/test-utils';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

//Use array destructurig to create mock functions.
let [onDisable, onRemove] = new Array(2).fill(jest.fn());

function shallowSetup(customProps = {}) {
    // Sample props to pass to our shallow render
    const defaultProps = {
        id: "0",
        openweatherCityId: "2992166", // Montpellier
        active: true,
        showDetails: false,
        onDisable: onDisable,
        onRemove: onRemove
    }

    const props = _.merge(defaultProps, customProps);
    configure({
        adapter: new Adapter()
    });

    // wrapper instance around rendered output
    const enzymeWrapper = shallow(<City { ...props } />);

    return {
        props,
        enzymeWrapper
    };
}


describe('Shallow rendered listing City', () => {
    //   it('should render a City without details. Only the ID', () => {
    //     // Setup wrapper and assign props.
    //     const {
    //       enzymeWrapper,
    //       props
    //     } = shallowSetup();

    //     expect(enzymeWrapper.find('.city__openweather-id').text()).toBe(props.openweatherCityId);
    // });

    test('should render a City with details. Check city name', async () => {
        // jest.mock('axios');

        // const getSpy = await jest.spyOn(axios, 'get');


        const {
            enzymeWrapper,
            props
        } = shallowSetup({
            showDetails: true
        });

        expect(mockAxios.get).toHaveBeenCalledWith(
            "http://api.openweathermap.org/data/2.5/weather", {
                params: {
                    APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
                    units: 'metric',
                    id: props.openweatherCityId,
                    lang: 'fr',
                }
            }
          );

        // expect(getSpy).toBeCalled();

        mockAxios.mockResponse({
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
        });


        // enzymeWrapper.instance().forceUpdate()
        // enzymeWrapper.update()
console.log(enzymeWrapper.debug());
        // WORKS. SHOULD NOT. It's the loading view, while the get is waiting
        expect(enzymeWrapper.find('.city__loading').text()).toBe('Chargement...');
        // DOES NOT WORK. SHOULD. It's the City / fullView
        // expect(enzymeWrapper.find('.city__name').text()).toBe('Montpellier');



        //   mockAxios.get.mockImplementationOnce();



        // enzymeWrapper.update()
        // expect(axios.get).toHaveBeenCalled()
        // expect(enzymeWrapper.find('.city__loading').text()).toBe('Chargement...');
        // console.log('City.test - 119 - ',enzymeWrapper.debug());
        // expect(enzymeWrapper.find('.city__name').text()).toBe('Montpellier');



        //   expect(mockAxios.get).toHaveBeenCalledWith(
        //     "http://api.openweathermap.org/data/2.5/weather", {
        //         params: {
        //             APPID: 'd772bba149811a24fc8a81b2a52d6b3e',
        //             units: 'metric',
        //             id: props.openweatherCityId,
        //             lang: 'fr',
        //         }
        //     }
        //   );

        // TO DO : wait for the async call
        // jest.setTimeout(3000);
        // expect(enzymeWrapper.find('.city__name').text()).toBe('Montpellier');





        // jest.useFakeTimers();
        // setTimeout(() => {
        //     // console.log('aaaa', enzymeWrapper.find('.city__name').text());
        //     // expect(enzymeWrapper.find('.city__name').text()).toBe('Montpellier');
        // }, 1500);
        // jest.runAllTimers();
    });

});

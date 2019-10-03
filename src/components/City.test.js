import React from 'react';
import _ from 'lodash';
// import sinon from 'sinon';
import {
    shallow,
    configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import City from './City';
import axios from "axios";
import {
    act
} from 'react-dom/test-utils';

// afterEach(() => {
//     // cleaning up the mess left behind the previous test
//     mockAxios.reset();
// });

//Use array destructurig to create mock functions.
let [onDisable, onRemove] = new Array(2).fill(jest.fn());

function shallowSetup(customProps = {}) {
    // Sample props to pass to our shallow render
    const defaultProps = {
        id: "0",
        openweatherCityId: 2992166, // Montpellier
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
      it('should render a City without details. Only the ID', () => {
        // Setup wrapper and assign props.
        const {
          enzymeWrapper,
          props
        } = shallowSetup();

        expect(parseInt(enzymeWrapper.find('.city__openweather-id').text(), 10)).toBe(props.openweatherCityId);
    });

    it('should render a City with details. Check city name', async () => {
        const {
            enzymeWrapper,
            props
        } = shallowSetup({
            showDetails: true
        });

        const flushPromises = () => new Promise(resolve => setImmediate(resolve));
        await flushPromises();
        enzymeWrapper.update();

        // console.log(enzymeWrapper.debug());
        // if the request is OK, the component build a structure with a .city-name div
        // expect(enzymeWrapper.find('.city__name').length).toBe(1);
        expect(enzymeWrapper.find('.city__name').text()).toBe('Montpellier');
    });

    // test('should render a City error. Check error label', async () => {
    //     const {
    //         enzymeWrapper,
    //         props
    //     } = shallowSetup({
    //         showDetails: true,
    //         forceError: true,
    //     });

    //     // axios.get.mockImplementation(()=> false);
    //     // axios.get.mockReturnValueOnce(false);

    //     const flushPromises = () => new Promise(resolve => setImmediate(resolve));
    //     await flushPromises();
    //     enzymeWrapper.update();


    //     console.log(enzymeWrapper.debug());
    //     expect(enzymeWrapper.find('.city__error').text()).toMatch(/ERRO  R/);
    // });

});

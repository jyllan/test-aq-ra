import React from 'react';
import { shallow } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';

import City from '../src/components/City';

//Use array destructurig to create mock functions.
let [onDisable, onRemove] = new Array(2).fill(jest.fn());

function shallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
        id: "0",
        openweatherCityId: "2992166",
        active: true,
        showDetails: false,
        onDisable: onDisable,
        onRemove: onRemove
    }
    // shallow.configure({ adapter: new Adapter() });

    // wrapper instance around rendered output
    const enzymeWrapper = shallow(<City {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Shallow rendered City', () => {
    it('should render a City without details. Only the ID', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
      expect(enzymeWrapper.find('.city__openweather-id').text()).toBe(props.openweatherCityId);
    });
  });

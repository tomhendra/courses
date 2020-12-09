import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('to render card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})

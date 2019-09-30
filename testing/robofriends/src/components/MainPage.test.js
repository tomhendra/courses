import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
// beforeEach ensures code runs before tests start
beforeEach(() => { 
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: 'a',
        isPending: false 
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly 1', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@outlook.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'john',
        email: 'john@outlook.com'
    }]);

})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'john',
            email: 'john@outlook.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3 }/>);

    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

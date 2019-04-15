import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
    it('expect to render CounterButton component', () => {
        const mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    })

    it('should increment state.count by 1', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1 });
        wrapper.find('[id="counter"]').simulate('click').simulate('click');
        expect(wrapper.state()).toEqual({ count: 3 });
        expect(wrapper.props().color).toEqual('red');
  });

    // challenge - my solution
    it('should increment state.count by 1', () => {
      const wrapper = shallow(<CounterButton initialCountValue={0}/>);
      const instance = wrapper.instance();
      expect(instance.state.count).toBe(0);
      instance.updateCount();
      expect(instance.state.count).toBe(1);
    });
  });

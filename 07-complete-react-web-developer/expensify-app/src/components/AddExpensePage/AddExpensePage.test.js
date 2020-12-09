import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../AddExpensePage/AddExpensePage';
import expenses from '../../tests/fixtures/expenses';

let startAddExpense, history, wrapper;

// reuse spies & wrappers throughout test cases
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// TypeError: this.props.startAddExpense is not a function
test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});

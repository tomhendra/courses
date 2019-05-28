import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

// regular unconnected component
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id} />)
      )
    }
    {/* destructuring props from object using {...expense} */}
  </div>
);

// functions to define what we want to pull from the store
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// call to connect() to pull everything together
export default connect(mapStateToProps)(ExpenseList);

// when you connect a component to the store, it becomes reactive -- as the store changes, the component will be re-rendered with the new values from the store

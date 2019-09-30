import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import selectExpenses from '../../redux/selectors/expenses';

import style from './ExpenseList.scss';

// regular unconnected component
export const ExpenseList = (props) => (
  <div className={style['content-container']}>
    <div className={style['list-header']}>
      <div className={style['show-for-mobile']}>Expenses</div>
      <div className={style['show-for-desktop']}>Expense</div>
      <div className={style['show-for-desktop']}>Amount</div>
    </div>
    <div className={style['list-body']}>
    {
      props.expenses.length === 0 ? (
        <div className={style['list-item--message']}>
          <span>No expenses</span>
        </div>
      ) : (
          props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
      )
    }
    </div>

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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numberFormatter from '../../utils/number-formatter';
import selectExpenses from '../../redux/selectors/expenses';
import selectExpensesTotal from '../../redux/selectors/expenses-total';

import style from './ExpenseSummary.scss';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numberFormatter.format(expensesTotal / 100);

  return (
    <div className={style['page-header']}>
      <div className={style['content-container']}>
        <h1 className={style['page-header__title']}>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className={style['page-header__actions']}>
          <Link className={style['button']} to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);

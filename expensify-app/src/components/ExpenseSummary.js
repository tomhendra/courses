import React from 'react';
import { connect } from 'react-redux';
import numberFormatter from '../utils/number-formatter';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numberFormatter.format(expensesTotal / 100);
  
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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

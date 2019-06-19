import React from 'react';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters/ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary/ExpenseSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
import getExpensesTotal from './expenses-total';
import expenses from '../../tests/fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const res = getExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const res = getExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
  const res = getExpensesTotal(expenses);
  expect(res).toBe(75195)
});

import uuid from 'uuid';

// -- without firebase
// component calls action generator
// action generator returns object
// component dispatches object to reducer
// reducer updates redux store 
// (reducer takes in app’s current state + action, and produces the altered state based on the contents of the action)

// -- with firebase
// component calls action generator
// action generator returns FUNCTION 
// component dispatches FUNCTION (with middleware)
// function runs
// (function has the ability to dispatch other actions and do whatever it wants) 

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

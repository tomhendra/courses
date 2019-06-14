import database from '../../firebase/firebase';

// -- without firebase
// component calls action generator
// action generator returns object
// component dispatches object to reducer
// reducer updates redux store 
// (reducer takes in app’s current state + action, and produces the altered state based on the contents of the action)

// -- with firebase & redux-thunk
// component calls action generator
// action generator returns FUNCTION 
// component dispatches FUNCTION (with middleware)
// function runs
// (function has the ability to dispatch other actions and do whatever it wants) 

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// REDUX-THUNK ASYNC >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// redux-thunk allows function to be returned...
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // destructure into variables...
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    // assign destructured values to expenses variable...
    const expense = { description, note, amount, createdAt }
    // asynchronously push to firebase... then update redux store with firebase
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setExpenses(expenses));
    });
  }
}

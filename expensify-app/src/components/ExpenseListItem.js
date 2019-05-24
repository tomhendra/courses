import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>Amount: &euro;{amount} | Date created: {createdAt}</p>
    <button>Remove</button>
  </div>
);

export default ExpenseListItem;
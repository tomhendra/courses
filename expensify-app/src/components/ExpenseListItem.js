import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>Description: {description}</h3>
    <p>Amount: &euro;{amount}</p>
    <p>Date created: {createdAt}</p>
  </div>
);

export default ExpenseListItem;
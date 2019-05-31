import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import numeral from 'numeral';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
});

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
      {formatter.format(amount / 100)}
      | 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numberFormatter from '../utils/number-formatter';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
      {numberFormatter.format(amount / 100)}
      | 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;

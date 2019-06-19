import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numberFormatter from '../../utils/number-formatter';

import style from './ExpenseListItem.scss';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link to={`/edit/${id}`} className={style['list-item']}>
    <div>
      <h3 className={style['list-item__title']}>{description}</h3>
      <span className={style['list-item__subtitle']}>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className={style['list-item__data']}>{numberFormatter.format(amount / 100)}</h3>
  </Link>
);

export default ExpenseListItem;

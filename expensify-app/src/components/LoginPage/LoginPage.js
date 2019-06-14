import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../redux/actions/auth';

import style from './LoginPage.scss';

export const LoginPage = ({ startLogin }) => (
  <div className={style['box-layout']}>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);

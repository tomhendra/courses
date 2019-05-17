import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from the dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from the add expense component
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from the edit expense component
  </div>
)

const HelpPage = () => (
  <div>
    This is from the help component
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

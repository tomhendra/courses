import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// useState built-in hook can manipulate state without having to use class based components
// returns an array of 2 things:
// 1. current state 
// 2. a function to change the state

const App = (props) => {  

  let [count, setCount] = useState(props.count)

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  );
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={2} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <button 
      onClick={props.handleDeleteOptions}
      className="button button--link"
    >
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {// when creating an array of JSX we have to define a key on each
    props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;

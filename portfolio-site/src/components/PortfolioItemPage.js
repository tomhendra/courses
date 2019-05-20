import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h2>A thing I have done</h2>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
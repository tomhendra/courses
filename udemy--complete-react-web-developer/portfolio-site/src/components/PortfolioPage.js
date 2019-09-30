import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h2>My Work</h2>
    <p>Check out the stuff I have done</p>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
  </div>
);

export default PortfolioPage;
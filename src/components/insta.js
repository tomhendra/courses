import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Insta = () => {
  //  data

  return (
    <>
      <h2>Instagram posts from @tomhendra</h2>
      <div>{/* show posts here */}</div>
      <a href={`https://instagram.com/tomhendra`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;

import React from 'react';
import './Loading.scss';

export const Loading = React.memo(() => (
  <div className="loadContainer">
    <h3 className="loadContainer__text">Please, take a while...</h3>
  </div>
));

Loading.displayName = 'Loading';

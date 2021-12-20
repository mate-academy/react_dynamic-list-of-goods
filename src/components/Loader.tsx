import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="box">
      <div className="container">
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
      </div>
    </div>
  );
};

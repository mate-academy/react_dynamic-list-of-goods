import React, { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="progress light-blue lighten-5">
      <div className="indeterminate deep-purple accent-3" />
    </div>
  );
};

import React from 'react';

type GoodProps = {
  name: string;
  color: string;
};

export const Good: React.FC<GoodProps> = ({ name, color }) => (
  <li
    style={{ color: `${color}` }}
  >
    {name}
  </li>
);

import React from 'react';

interface Props {
  name: string;
  color: string;
}

export const GoodItem: React.FC<Props> = ({ color, name }) => {
  return (
    <li style={{ color }}>
      {name}
    </li>
  );
};

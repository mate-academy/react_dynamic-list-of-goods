import React from 'react';

interface GoodItemProps {
  name: string;
  color: string;
}

export const GoodItem: React.FC<GoodItemProps> = ({ color, name }) => {
  return (
    <li style={{ color }}>
      {name}
    </li>
  );
};

import React from 'react';

type GoodItemProps = {
  id: number;
  name: string;
  color: string;
};

export const GoodItem: React.FC<GoodItemProps> = ({ id, name, color }) => (
  <li key={id} className={color}>{name}</li>
);

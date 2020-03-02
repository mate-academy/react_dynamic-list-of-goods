import React, { FC } from 'react';

interface GoodItemProps {
  name: string;
  color: string;
}

export const GoodItem: FC<GoodItemProps> = ({ name, color }) => (
  <li
    className="list__item"
    style={{ color }}
  >
    {name}
  </li>
);

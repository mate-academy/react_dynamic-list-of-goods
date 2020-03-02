import React, { FC } from 'react';
import 'bulma/css/bulma.css';

interface GoodItemProps {
  name: string;
  color: string;
}

export const GoodItem: FC<GoodItemProps> = ({ name, color }) => (
  <li
    className="list-item"
    style={{ color }}
  >
    {name}
  </li>
);

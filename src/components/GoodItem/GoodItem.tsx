import React, { FC } from 'react';
import 'bulma/css/bulma.css';

interface Props {
  name: string;
  color: string;
}

export const GoodItem: FC<Props> = ({ name, color }) => (
  <li
    className="list-item"
    style={{ color }}
  >
    {name}
  </li>
);

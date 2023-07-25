import React from 'react';
import { Good } from './types/Good';

type Props = {
  good: Good,
};

export const GoodItem: React.FC<Props> = ({ good }) => (
  <li
    data-cy="good"
    style={{ color: good.color }}
  >
    {good.name}
  </li>
);

import * as React from 'react';
import { Good } from './Good';

interface Props {
  good: Good;
}

export const GoodItem: React.FC<Props> = ({ good }) => (
  <li style={{ color: good.color }}>
    {good.name}
  </li>
);

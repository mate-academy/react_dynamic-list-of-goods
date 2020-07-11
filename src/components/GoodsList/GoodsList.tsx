import React from 'react';
import { Good } from '../../interfaces/good';

interface TopCategoriesProps {
  goods: Good[];
}

export const GoodsList: React.FC<TopCategoriesProps> = ({ goods }) => (
  <ul>
    {goods.map((good: Good) => (
      <li key={good.id}>
        <span style={{ color: good.color }}>
          {good.name}
        </span>
      </li>
    ))}
  </ul>
);

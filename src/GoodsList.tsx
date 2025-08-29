import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// Helper function to map color names to actual CSS colors
const getColorValue = (colorName: string): string => {
  switch (colorName) {
    case 'red':
      return 'rgb(255, 0, 0)';
    case 'green':
      return 'rgb(0, 128, 0)';
    case 'blue':
      return 'rgb(0, 0, 255)';
    default:
      return 'black';
  }
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: getColorValue(good.color) }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

// Applying rendering optimization with React.memo
export default React.memo(GoodsList);

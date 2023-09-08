import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const getColorStyle = (colorValue: string): React.CSSProperties => {
    return {
      color: colorValue,
    };
  };

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={getColorStyle(good.color)}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

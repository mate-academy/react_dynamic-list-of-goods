import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const styleForElement = (colorValue: string) => {
    return {
      color: colorValue,
    };
  };

  return (
    <ul>
      {goods.map(good => (
        <li
          style={styleForElement(good.color)}
          key={good.id}
          data-cy="good"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

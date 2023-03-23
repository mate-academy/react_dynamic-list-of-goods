import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="px-6 py-5">
    {goods.map((good) => {
      const { id, color, name } = good;

      return (
        <li
          className={`box is-rounded p-3
            ${color === 'green' ? 'has-background-success-light' : ''}
            ${color === 'red' ? 'has-background-danger-light' : ''}
            ${color === 'blue' ? 'has-background-link-light' : ''}`}
          key={id}
          data-cy="good"
          style={{ color }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);

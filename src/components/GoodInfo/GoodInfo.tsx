import React from 'react';
import { Good } from '../../types/Good';

interface Props {
  good: Good
}

export const GoodInfo: React.FC<Props> = ({ good }) => {
  const { color, id, name } = good;

  return (
    <li key={id} data-cy="good" style={{ color }}>
      {name}
    </li>
  );
};

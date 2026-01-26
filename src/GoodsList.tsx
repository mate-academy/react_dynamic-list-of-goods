import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  errorMessage: string | null;
};

export const GoodsList = React.memo(function GoodsList({
  goods,
  errorMessage,
}: Props) {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}

      {errorMessage && (
        <div className="notification is-danger">{errorMessage}</div>
      )}
    </ul>
  );
});

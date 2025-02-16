import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[] | null | string;
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {typeof goods === 'string' ? (
      <p>Couldnt load</p>
    ) : (
      goods?.map(good => (
        <li key={good.id} data-cy="good" style={{ color: `${good.color}` }}>
          {good.name}
        </li>
      ))
    )}
    {}
  </ul>
));

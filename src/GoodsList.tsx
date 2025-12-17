import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  error: string | null;
};

export const GoodsList: React.FC<Props> = memo(({ goods, error }) => (
  <>
    {error && <p className="has-text-danger">{error}</p>}
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  </>
));

GoodsList.displayName = 'GoodsList';

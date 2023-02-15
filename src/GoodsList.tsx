import React from 'react';
import { Good } from './types/Good';

import 'bulma/css/bulma.css';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color, marginLeft: `${30}px`, listStyle: 'square' }}
      >
        {good.name}
      </li>
    ))}
  </ul>
));

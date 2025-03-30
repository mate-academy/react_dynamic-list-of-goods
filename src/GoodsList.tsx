import * as React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return React.createElement(
    'ul',
    null,
    goods.map(good =>
      React.createElement(
        'li',
        {
          key: good.id,
          'data-cy': 'good',
          style: { color: good.color },
        },
        good.name,
      ),
    ),
  );
};

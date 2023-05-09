import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li key={id} data-cy="good" style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

export default memo(GoodsList);

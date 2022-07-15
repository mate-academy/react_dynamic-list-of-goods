import React from 'react';
import { Good } from '../react-app-env';

type Props = {
  visibleGoods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ visibleGoods }) => {
  return (
    <ul>
      {visibleGoods.map(singleGood => (
        <li
          key={singleGood.id}
          style={{ color: `${singleGood.color}` }}
        >
          {singleGood.name}
        </li>
      ))}
    </ul>
  );
});

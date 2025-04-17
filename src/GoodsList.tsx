import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

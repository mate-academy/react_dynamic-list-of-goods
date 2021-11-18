import React from 'react';
import cn from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className={cn('goods__list')}>
      {goods.map((good: Good) => (
        <li
          key={good.id}
          className={cn('goods__list-item')}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

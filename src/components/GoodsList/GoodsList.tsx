import { FC, memo } from 'react';

import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = memo(({ goods }) => {
  return (
    <ul className="goods-list">
      {
        goods.map(good => (
          <li
            key={good.id}
            className="goods-list__item"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))
      }
    </ul>
  );
});

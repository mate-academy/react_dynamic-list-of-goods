import React from 'react';

import './GoodsList.scss';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul className="goods-list">
    {goods.map(item => (
      <li
        key={item.id}
      >
        <h3>
          Hello Friend! I`m
          <span style={{ color: `${item.color}` }}>
            {` ${item.name}`}
          </span>
          . My ID is
          {` ${item.id}`}
          , and my color is
          <span style={{ color: `${item.color}` }}>
            {` ${item.color}`}
          </span>
        </h3>
      </li>
    ))}
  </ul>
));

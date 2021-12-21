import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods">
    {
      goods.map(({ id, name, color }) => (
        <li className="goods__good" key={id} style={{ color }}>
          {name}
          {' - '}
          {color}
        </li>
      ))
    }
  </ul>
);

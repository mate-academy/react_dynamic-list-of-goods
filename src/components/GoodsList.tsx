import React from 'react';

import './GoodsList.scss';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {
      goods.map((good: Good) => (
        <li
          key={good.id}
          className="list__item"
        >
          <span
            style={{ color: good.color }}
            className="list__text"
          >
            {good.name}
          </span>
        </li>
      ))
    }
  </ul>
);

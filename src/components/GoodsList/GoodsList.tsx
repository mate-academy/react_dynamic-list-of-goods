import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <ul className="goods">
        {goods.map(({ id, name, color }) => (
          <li
            key={id}
            style={{ color }}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  },
);

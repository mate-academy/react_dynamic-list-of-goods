import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul className="goods">
      {goods.map(({ name, id, color }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  ),
);

import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {
      goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
        >
          {item.name}
        </li>
      ))
    }
  </ul>
);

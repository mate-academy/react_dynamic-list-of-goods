import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color, name } = good;

      return (
        <li key={id} style={{ color }}>
          {name}
        </li>
      );
    })}
  </ul>
);

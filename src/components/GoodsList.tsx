import React from 'react';

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <ul>
        {goods.map(good => (
          <li key={good.id} style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  },
);

interface Props {
  goods: Good[]
}

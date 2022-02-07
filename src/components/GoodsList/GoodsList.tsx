import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
        >
          <div style={{ color: `${good.color}` }}>
            {good.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

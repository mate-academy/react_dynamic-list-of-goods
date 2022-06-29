import React from 'react';

type Props = {
  goods: Good[]
};

export const Goods: React.FC<Props> = ({ goods }) => {
  return (
    <div>
      <h1>Goods</h1>
      <ul className="list-unstyled">
        {goods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

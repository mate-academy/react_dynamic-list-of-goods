import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="content">
      {goods.map(good => (
        <li key={good.id}>
          <span style={{ color: `${good.color}` }}>
            {good.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

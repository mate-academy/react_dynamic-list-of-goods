import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div>
    <ul style={{ listStyleType: 'none' }}>
      {goods.map((good) => (
        <li key={good.id}>
          {`${good.name} - `}
          <span style={{ color: good.color }}>
            {good.color}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

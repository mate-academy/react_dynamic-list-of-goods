import React from 'react';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <div>
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{
            color: good.color,
          }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

export default GoodsList;

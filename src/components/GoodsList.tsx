import React from 'react';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {
        goods.map((good) => (
          <li key={good.id}>
            <p style={{ color: good.color }}>{good.name}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default GoodsList;

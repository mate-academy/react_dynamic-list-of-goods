import React from 'react';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;

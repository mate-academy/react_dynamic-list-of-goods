import React from 'react';

interface GoodsList {
  goods: Good[];
}

export const GoodsList: React.FC<GoodsList> = (props) => {
  const { goods } = props;

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

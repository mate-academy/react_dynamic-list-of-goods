import React from 'react';

interface GoodsList {
  goods: Good[];
}

export const GoodsList: React.FC<GoodsList> = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list__item"
        >
          <p>{good.name}</p>
        </li>
      ))}
    </ul>
  );
};
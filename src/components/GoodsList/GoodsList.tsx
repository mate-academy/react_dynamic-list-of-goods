import React from 'react';

type Props = {
  goods: Good[] | [];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods__list">
      {goods.map(({ id, color, name }) => (
        <li
          className="goods__item"
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;

import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="app__goodsList">
      {goods.map(({ id, name, color }) => (
        <li
          className="app__goodsItem"
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import './GoodsList.css';

type Props = {
  goodsList:Good[];
};

export const GoodsList:React.FC<Props> = (props) => {
  const { goodsList } = props;

  return (
    <ul className="GoodsList">
      {goodsList.map(good => (
        <li
          className="GoodsListItem"
          key={good.id}
          style={{
            color: good.color,
          }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

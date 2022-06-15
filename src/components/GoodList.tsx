import React from 'react';

interface Props {
  goodsArr: Good[];
}

export const GoodList: React.FC<Props> = ({ goodsArr }) => (
  <div className="">
    <ul>
      {goodsArr.map(item => (
        <li
          key={item.id}
          style={{ color: `${item.color}` }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

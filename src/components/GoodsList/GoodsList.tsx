import React from 'react';

export const GoodsList = (props: { goods: any }) => {
  const { goods } = props;

  return (
    <ul className="list">
      {goods.map((item: { id: number; color: string; name: string }) => (
        <li
          key={item.id}
          style={{ color: item.color }}
          className="list__item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

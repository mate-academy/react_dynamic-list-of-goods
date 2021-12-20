import React from 'react';

interface Props {
  goods: Good[];
}

export const List: React.FC<Props> = ({ goods }) => {
  // const { id, name, color, } = goods;
  return (
    <>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="App__item"
        >
          {good.name}
        </li>
      ))}
    </>
  );
};

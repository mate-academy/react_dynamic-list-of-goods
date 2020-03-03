import React from 'react';

interface Props {
  goods: Goods[];
  minLength: number;
}

export const GoodList = (props: Props) => {
  const {
    goods,
  } = props;

  return (
    <ul>
      {goods.map(good => (
        <li
          style={{ color: good.color }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

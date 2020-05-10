import React from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}

interface Props {
  goods: Array<Good>;
}


export const GoodsList = (props: Props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map((good: Good) => (
        <li
          key={good.id}
          className={good.color}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

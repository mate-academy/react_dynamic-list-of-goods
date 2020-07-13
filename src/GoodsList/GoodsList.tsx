import React from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}

interface Props {
  goodsList: Array<Good>;
}

export const GoodsList = (props: Props) => {
  const { goodsList } = props;

  return (
    <ul>
      {goodsList.map((good: Good) => (
        <li
          className={`${good.color}Good`}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

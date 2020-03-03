import React, { FC } from 'react';

interface Props {
  goods: Good[];
}

export const GoodList: FC<Props> = (props) => {
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

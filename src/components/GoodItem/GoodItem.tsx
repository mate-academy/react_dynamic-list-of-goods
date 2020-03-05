import React, { FC } from 'react';

interface Props {
  good: Good;
}

export const GoodItem: FC<Props> = ({ good }) => {
  const { color, name } = good;

  return (
    <li
      className="list-group-item"
      style={{ color }}
    >
      {name}
    </li>
  );
};

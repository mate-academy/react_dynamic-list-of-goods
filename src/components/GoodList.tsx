import React from 'react';

interface Props {
  goods: Goods[];
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, color, name }) => (
      <li className={color}>
        {`${id}. ${name}`}
      </li>
    ))}
  </ul>
);

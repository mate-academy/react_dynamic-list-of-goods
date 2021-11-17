import React from 'react';

interface Props {
  goods: Good[],
}

export const ListOfGoods: React.FC<Props> = (props) => (
  <ul className="list-group">
    {props.goods.map(good => (
      <li
        className="list-group-item"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

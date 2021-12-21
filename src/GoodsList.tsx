import React from 'react';

type Props = {
  goods: Good[] | [];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list-group">
      {goods.map(({ id, color, name }) => (
        <li
          className="list-group-item list-group-item-action list-group-item-dark"
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;

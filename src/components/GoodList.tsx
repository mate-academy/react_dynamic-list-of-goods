import React from 'react';
import './GoodList.scss';

type Props = {
  state: Good[];
};

export const GoodsList: React.FC<Props> = ({
  state,
}) => {
  return (
    <ul className="list">
      {state.map(item => (
        <li
          key={item.id}
          style={{ color: `${item.color}` }}
          className="list__item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

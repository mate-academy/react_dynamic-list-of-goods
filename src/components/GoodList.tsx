import React from 'react';
import './GoodList.scss';

type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list">
      {goods.map(good => (
        <li
          className="list__item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

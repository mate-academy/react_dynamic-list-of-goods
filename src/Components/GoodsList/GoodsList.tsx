import React from 'react';
import './GoodsList.css';

type Props = {
  goodsList: Good[] | null,
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goodsList } = props;

  return (
    <div>
      <ul className="list">
        {goodsList?.map(good => (
          <li
            key={good.id}
            className="list-item"
            style={{ color: good.color, borderColor: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

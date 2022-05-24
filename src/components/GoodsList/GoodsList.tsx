import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({
  goods,
}) => {
  return (
    <div className="list">
      {goods.map(item => (
        <div
          key={item.id}
          style={{ color: `${item.color}` }}
          className="list__item"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

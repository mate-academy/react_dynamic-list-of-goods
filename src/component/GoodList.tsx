import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group goods__list">
      {goods.map(good => (
        <li
          className="list-group-item goods__item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.color}
        </li>
      ))}
    </ul>
  );
};

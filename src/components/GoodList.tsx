import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group">
      {goods.map((good: Good) => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item list-group-item-action"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <div>
      <ul className="list-group">
        {goods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
            className="list-group-item"
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

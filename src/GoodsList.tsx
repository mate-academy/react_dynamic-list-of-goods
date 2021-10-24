import React from 'react';

type Props = {
  goodsList: Good[],
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goodsList } = props;

  return (
    <div>
      <ul className="list">
        {goodsList.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

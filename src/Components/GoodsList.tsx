import React from 'react';

type Props = {
  goodsToShow: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  return (
    <ul className="content is-medium">
      {props.goodsToShow.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

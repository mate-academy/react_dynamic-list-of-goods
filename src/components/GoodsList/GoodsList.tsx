import React from 'react';

interface Props {
  goods: Good[]
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="">
      {goods.map(good => (
        <li
          style={{ color: good.color }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} className={`good good--${good.color}`}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

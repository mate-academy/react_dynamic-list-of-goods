import React from 'react';
import './App.scss';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(good => (
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

export default GoodsList;

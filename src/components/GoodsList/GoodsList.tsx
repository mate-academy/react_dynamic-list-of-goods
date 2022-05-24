import React from 'react';

interface Props {
  goods: Good[],
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="app__list">
      {goods.map(good => (
        <li
          key={good.id}
          className="app__item"
          style={{ color: `${good.color}` }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;

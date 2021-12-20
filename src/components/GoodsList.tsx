import React from 'react';
import classNames from 'classnames';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="App__content-list GoodsList">
      {goods.map(item => (
        <li
          className={classNames('GoodsList__item', `GoodsList__item--${item.color}`)}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

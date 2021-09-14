import React from 'react';
import classNames from 'classnames';

type Props = {
  goodsToShow: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  return (
    <ul className="content is-medium card py-3">
      {props.goodsToShow.map(good => (
        <li
          key={good.id}
          className={classNames('card-content py-0', {
            'has-text-danger': good.color === 'red',
            'has-text-link': good.color === 'blue',
            'has-text-primary': good.color === 'green',
          })}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="form__list is-flex is-flex-direction-column is-justify-content-flex-start is-align-items-center">
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

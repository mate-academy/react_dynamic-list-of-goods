import React from 'react';
import 'bootstrap/scss/bootstrap.scss';

interface Props {
  goods: Good[]
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group list-group-flush justify-content-center align-center">
      {goods.map(good => (
        <li
          className="list-group-item text-center list-group-item-action text-uppercase"
          style={{ color: good.color }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

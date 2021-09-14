import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="list list-group">
      {goods.map(
        good => (
          <li
            key={good.id}
            style={{ color: `${good.color}` }}
            className="list-group-item"
          >
            {good.name}
          </li>
        ),
      )}
    </ul>
  );
};

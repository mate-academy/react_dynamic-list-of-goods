import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './GoodsList.scss';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <div className="display-goods">
      {goods.length === 0
        ? <span className="display-goods__preload">Press the button to start</span>
        : (
          <ul className="list-group">
            {goods.map(good => (
              <li
                className="list-group-item"
                key={good.id}
                style={{ color: good.color }}
              >
                {good.name}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

import React from 'react';
import { Good } from './types/Good';
// import { ColorPicker } from './components';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        className="box is-blue py-3 has-text-weight-medium has-border-grey"
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        <div className="is-flex is-justify-content-space-between
        is-align-items-center"
        >
          <div className="has-text-left is-flex-grow-1 has-text-centered">
            Potato
          </div>

          <div className="has-text-right">
            <button type="button" className="button">
              Hello!
            </button>
          </div>
        </div>
        {/* {good.name}
        <ColorPicker /> */}
      </li>
    ))}
  </ul>
);

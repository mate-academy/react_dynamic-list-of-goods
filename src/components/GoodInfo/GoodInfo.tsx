import React from 'react';
import { Good } from '../../types/Good';
import './GoodInfo.scss';
import { ColorPicker } from '../ColorPicker';

type Props = {
  good: Good;
};

export const GoodInfo: React.FC<Props> = ({ good }) => {
  return (
    <li
      className="box is-blue py-3 has-text-weight-medium has-border-grey"
      key={good.id}
      data-cy="good"
      style={{ color: good.color }}
    >
      <div className="has-text-centered is-relative">
        <p>{good.name}</p>
        <ColorPicker />
        <button
          type="button"
          className="button is-primary is-absolute is-x-right-y-center"
        >
          Button
        </button>
      </div>
    </li>
  );
};

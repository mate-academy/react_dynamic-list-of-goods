import React from 'react';
import './GoodsList.scss';

interface Props {
  goods: Good[],
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <div className="box is-flex is-flex-direction-column
    has-text-centered mx-auto"
  >
    <ul className="block is-flex is-flex-direction-column
      is-align-items-flex-start mx-auto mt-0"
    >
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

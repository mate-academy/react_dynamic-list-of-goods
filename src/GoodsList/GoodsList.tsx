import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
  errors: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, errors }) => {
  if (goods.length > 0) {
    return (
      <ul>
        {goods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }

  if (!errors && goods.length === 0) {
    return (
      <div className="no-list">
        No goods in list, click load button to see the list
      </div>
    );
  }

  return (<div> </div>);
};

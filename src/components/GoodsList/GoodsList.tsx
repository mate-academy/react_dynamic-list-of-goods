import React from 'react';

import Good from '../Good/Good';

interface Props {
  goods: Good[];
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="app__list">
      {goods.map(good => <Good key={good.id} good={good} />)}
    </ul>
  );
};

export default GoodsList;

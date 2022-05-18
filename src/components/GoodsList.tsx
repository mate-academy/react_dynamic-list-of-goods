import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className='good__list'>
      {goods.length > 0 && (
        goods.map(good => (
          <li key={good.id} style={{ color: `${good.color}` }}>
            {good.name}
          </li>
        ))
      )}
    </ul>
  );
};

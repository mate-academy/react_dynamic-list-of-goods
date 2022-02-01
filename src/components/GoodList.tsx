import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="content">
      <ol type="1" className="has-text-centered mt-5">
        {goods.map(good => (
          <li key={good.id} style={{ color: good.color }}>{good.name}</li>
        ))}
      </ol>
    </div>
  );
};

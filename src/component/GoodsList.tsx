import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <>
      {goods.length > 0 && (
        <ul>
          {goods.map((good: Good) => (
            <li key={good.id} style={{ color: good.color }}>{good.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li style={{ color: good.color }}>{good.name}</li>
      ))}
    </ul>
  );
};

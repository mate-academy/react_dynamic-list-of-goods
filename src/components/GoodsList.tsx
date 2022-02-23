import React from 'react';

type Props = {
  goods: Good[] | undefined
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods?.map(good => (
        <li style={{ color: good.color }}>{good.name}</li>
      ))}
    </ul>
  );
};

export default GoodsList;

import React from 'react';

type Props = {
  goods: Good[],
  isLoading: boolean,
};

export const GoodsList: React.FC<Props> = ({ goods, isLoading }) => {
  return (
    <>
      {isLoading && <p>Loading in progres...</p>}
      <ul>
        {goods.map(good => {
          return (
            <li key={good.id} style={{ color: `${good.color}` }}>
              {good.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

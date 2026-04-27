import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[] | null;
  isLoading: boolean;
};

export const GoodsList = React.memo(function GoodsList({
  goods,
  isLoading,
}: Props) {
  return (
    <>
      {isLoading && (
        <div className="is-flex is-justify-content-start my-4">
          <span
            className="loader goods-loader"
            aria-label="Loading goods"
          ></span>
        </div>
      )}

      <ul>
        {goods?.map(good => (
          <li key={good.id} data-cy="good" style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
    </>
  );
});

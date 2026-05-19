import React, { useMemo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const renderedGoods = useMemo(() => {
    return goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ));
  }, [goods]);

  return <ul>{renderedGoods}</ul>;
};

import React, { useEffect } from 'react';
import { Good, GoodLoadType } from './types/Good';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [goodsType, setGoodsType] = React.useState<GoodLoadType>(
    GoodLoadType.None,
  );

  useEffect(() => {
    if (goodsType === GoodLoadType.All) {
      goodsAPI
        .getAll()
        .then(setGoods)
        .catch(() => {
          // eslint-disable-next-line no-console
          console.error('Failed to load goods');
        });
    } else if (goodsType === GoodLoadType.First5) {
      goodsAPI
        .get5First()
        .then(setGoods)
        .catch(() => {
          // eslint-disable-next-line no-console
          console.error('Failed to load goods');
        });
    } else if (goodsType === GoodLoadType.Red) {
      goodsAPI
        .getRedGoods()
        .then(setGoods)
        .catch(() => {
          // eslint-disable-next-line no-console
          console.error('Failed to load goods');
        });
    }
  }, [goodsType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setGoodsType(GoodLoadType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setGoodsType(GoodLoadType.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setGoodsType(GoodLoadType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

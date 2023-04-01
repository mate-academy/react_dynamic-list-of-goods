import React, { useState, useMemo } from 'react';

import Button from 'react-bootstrap/Button';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoodsLoading = useMemo(
    () => async (getGoods: () => Promise<Good[]>) => {
      const goodsFromServer = await getGoods();

      setGoods(goodsFromServer);
    },
    [],
  );

  return (
    <div className="App">
      <div className="header">
        <h1 className="page-header">Dynamic list of Goods</h1>
        <div className="buttons-container">
          <Button
            type="button"
            data-cy="all-button"
            variant="info"
            className="load-button"
            onClick={() => handleGoodsLoading(getAll)}
          >
            Load all goods
          </Button>
          <Button
            type="button"
            data-cy="first-five-button"
            variant="success"
            className="load-button"
            onClick={() => handleGoodsLoading(get5First)}
          >
            Load 5 first goods
          </Button>
          <Button
            type="button"
            data-cy="red-button"
            variant="danger"
            className="load-button"
            onClick={() => handleGoodsLoading(getRedGoods)}
          >
            Load red goods
          </Button>
        </div>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

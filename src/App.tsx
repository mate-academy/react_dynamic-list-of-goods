import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import { Good } from './types/Good';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [viewGoods, setViewGoods] = useState<Good[]>([]);
  const [hasLoadingError, setLoadingError] = useState(false);

  const loadGoods = async (callback: () => Promise<Good[]>) => {
    setLoadingError(false);
    try {
      const goods = await callback();

      setViewGoods(goods);
    } catch {
      setLoadingError(true);
    }
  };

  return (
    <div className="App container is-widescreen">
      <h1 className="box is-small title is-1 text title">
        Dynamic list of Goods
      </h1>
      <div className="">
        <Button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load all goods
        </Button>

        <Button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRed)}
        >
          Load red goods
        </Button>
      </div>

      <div className="content is-large card">
        {!hasLoadingError && <GoodsList goods={viewGoods} />}
      </div>

    </div>
  );
};

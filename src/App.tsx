import React, { useCallback, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleGoodsLoading = useCallback(
    async (
      getGoods: () => Promise<Good[]>,
    ) => {
      setHasError(false);
      setIsLoading(true);

      const goodsFromServer = await getGoods()
        .catch(() => {
          setHasError(true);
        })
        .finally(() => setIsLoading(false));

      setGoods(goodsFromServer || []);
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
            disabled={isLoading}
          >
            Load all goods
          </Button>

          <Button
            type="button"
            data-cy="first-five-button"
            variant="success"
            className="load-button"
            onClick={() => handleGoodsLoading(get5First)}
            disabled={isLoading}
          >
            Load 5 first goods
          </Button>

          <Button
            type="button"
            data-cy="red-button"
            variant="danger"
            className="load-button"
            onClick={() => handleGoodsLoading(getRedGoods)}
            disabled={isLoading}
          >
            Load red goods
          </Button>
        </div>
      </div>

      {
        hasError
          && (
            <h3>Error occured when data loaded</h3>
          )
      }

      {isLoading
        ? <Spinner animation="border" role="status" />
        : <GoodsList goods={goods} />}
    </div>
  );
};

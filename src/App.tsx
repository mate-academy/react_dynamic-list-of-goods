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
  const [lastButton, setLastButton] = useState('');

  const handleGoodsLoading = useCallback(
    (getGoods: () => Promise<Good[]>) => {
      setHasError(false);
      setIsLoading(true);

      getGoods()
        .then(setGoods)
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false));
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
            onClick={() => {
              setLastButton('all');
              handleGoodsLoading(getAll);
            }}
            disabled={isLoading || lastButton === 'all'}
          >
            Load all goods
          </Button>

          <Button
            type="button"
            data-cy="first-five-button"
            variant="success"
            className="load-button"
            onClick={() => {
              setLastButton('first-five');
              handleGoodsLoading(get5First);
            }}
            disabled={isLoading || lastButton === 'first-five'}
          >
            Load 5 first goods
          </Button>

          <Button
            type="button"
            data-cy="red-button"
            variant="danger"
            className="load-button"
            onClick={() => {
              setLastButton('red-goods');
              handleGoodsLoading(getRedGoods);
            }}
            disabled={isLoading || lastButton === 'red-goods'}
          >
            Load red goods
          </Button>
        </div>
      </div>

      {
        hasError && (
          <h3>Error occured when data loaded</h3>
        )
      }

      {!hasError && isLoading
        ? <Spinner animation="border" role="status" />
        : <GoodsList goods={goods} />}
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const loadUsers = async (preparedGoods: () => Promise<Good[]>) => {
    setHasLoadingError(false);

    try {
      const goodsFromServer = await preparedGoods();

      if (goodsFromServer.length === 0) {
        setIsEmpty(true);
      }

      setGoods(goodsFromServer);
    } catch (error) {
      setHasLoadingError(true);
    }
  };

  return (
    <div className="App">
      <h1 className="title has-text-centered">
        Dynamic list of Goods
      </h1>

      <div className="container has-text-centered">
        <button
          type="button"
          className="button is-success block mr-5"
          data-cy="all-button"
          onClick={() => loadUsers(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-warning block"
          data-cy="first-five-button"
          onClick={() => loadUsers(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-danger block ml-5"
          data-cy="red-button"
          onClick={() => loadUsers(getRedGoods)}
        >
          Load red goods
        </button>

        {!hasLoadingError ? (
          <>
            {isEmpty && (
              <p className="subtitle block">
                Empty list of goods
              </p>
            )}
            <GoodsList goods={goods} />
          </>
        ) : (
          <p className="subtitle block">
            Sorry, we hadn`t found your data
          </p>
        )}
      </div>
    </div>
  );
};

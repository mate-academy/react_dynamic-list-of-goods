import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [fetchErrorMessage, setFetchErrorMessage] = useState('');

  const handleFetchError = useCallback(
    (error: Error) => {
      setFetchErrorMessage(error.message);
    },
    [setFetchErrorMessage],
  );

  const handleFetchGoods = useCallback(
    (fetcher: () => Promise<Good[]>) => {
      fetcher()
        .then(fetchedGoods => {
          setGoods(fetchedGoods);
          setFetchErrorMessage('');
        })
        .catch(handleFetchError);
    },
    [setGoods, setFetchErrorMessage, handleFetchError],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleFetchGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFetchGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleFetchGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {fetchErrorMessage && (
        <p
          style={{
            backgroundColor: 'orangered',
            fontWeight: 'bold',
            paddingBlock: '0.25em',
            paddingInline: '0.375em',
          }}
        >
          An error occured while fetching:
          <br />
          {fetchErrorMessage}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};

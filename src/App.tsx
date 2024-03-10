import React, { useMemo } from 'react';

import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

interface Good {
  id: number;
  name: string;
  color: string;
}

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleError = () => {
    setErrorMessage('Something went wrong. Please reload the page');
  };

  const handleAllGoods = () => {
    getAll().then(fetchGoods => {
      setGoods(fetchGoods);
    });
  };

  const handleFirstFiveGoods = () => {
    get5First()
      .then(fetchGoods => {
        const sortGoods = fetchGoods.sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        setGoods(sortGoods.slice(0, 5));
      })
      .catch(handleError);
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(fetchGoods => {
        const filteredGoods = fetchGoods.filter(good => good.color === 'red');

        setGoods(filteredGoods);
      })
      .catch(handleError);
  };

  const memoizedGoods = useMemo(() => goods, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      {errorMessage && <p>{errorMessage}</p>}

      <GoodsList goods={memoizedGoods} />
    </div>
  );
};

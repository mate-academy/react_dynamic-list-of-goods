import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isFetchError, setIsFetchError] = useState(false);

  const passedGoods = useMemo(() => (goods), [goods]);

  const handleClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLElement;
    const buttonType = button.getAttribute('data-cy');
    let fetchFunction;

    switch (buttonType) {
      default:
      case 'all-button':
        fetchFunction = getAll;
        break;
      case 'first-five-button':
        fetchFunction = get5First;
        break;
      case 'red-button':
        fetchFunction = getRedGoods;
        break;
    }

    if (isFetchError) {
      setIsFetchError(false);
    }

    fetchFunction()
      .then(response => setGoods(response))
      .catch(() => {
        setIsFetchError(true);
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1 className="App__heading">Dynamic list of Goods</h1>

      <div className="App__buttonsGroup">
        <button
          type="button"
          className="App__button"
          data-cy="all-button"
          onClick={handleClick}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="App__button"
          data-cy="first-five-button"
          onClick={handleClick}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="App__button"
          data-cy="red-button"
          onClick={handleClick}
        >
          Load red goods
        </button>
      </div>

      {isFetchError && (
        <p className="App__error">Fetch error occurs</p>
      )}

      <GoodsList goods={passedGoods} />
    </div>
  );
};

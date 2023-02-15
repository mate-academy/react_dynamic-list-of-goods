import { useState, useCallback } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handlerGetAll = useCallback(async () => {
    setHasError(false);

    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch {
      setHasError(true);
    }
  }, []);

  const handlerGetFirst5 = useCallback(async () => {
    setHasError(false);

    try {
      const first5 = await get5First();

      setGoods(first5);
    } catch {
      setHasError(true);
    }
  }, []);

  const handlerGetRedGoods = useCallback(async () => {
    setHasError(false);

    try {
      const reds = await getRedGoods();

      setGoods(reds);
    } catch {
      setHasError(true);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="title is-1 mt-3 ml-3">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-success is-medium is-rounded ml-2 mr-2"
        onClick={handlerGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-warning is-medium is-rounded mr-2"
        onClick={handlerGetFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-medium is-rounded"
        onClick={handlerGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

      {hasError && (
        <p className="error">
          Error
        </p>
      )}
    </div>
  );
};

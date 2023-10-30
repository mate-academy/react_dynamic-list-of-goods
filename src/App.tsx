import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadTodos = async (func = getAll) => {
    setErrorMessage('');
    setLoading(true);

    try {
      const todosFromServer = await func();

      setGoods(todosFromServer);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadTodos(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => loadTodos(get5First)}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadTodos(getRedGoods)}
      >
        Load red goods
      </button>

      {loading
        && <div className="div">loading</div>}
      {errorMessage && !loading
        && <div className="div">{errorMessage}</div>}

      <GoodsList goods={goods} />
    </div>
  );
};

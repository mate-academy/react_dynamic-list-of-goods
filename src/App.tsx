import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum GoodsFilter {
  All = 'All',
  FirstFive = 'FirstFive',
  RedOnly = 'RedOnly',
  Default = All,
}
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [filterMethod, setFilterMethod] = useState<GoodsFilter | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!filterMethod) {
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    let res: Promise<Good[]>;

    switch (filterMethod) {
      case GoodsFilter.All:
        res = getAll();
        break;
      case GoodsFilter.FirstFive:
        res = get5First();
        break;
      case GoodsFilter.RedOnly:
        res = getRedGoods();
        break;
    }

    res
      .then(setGoods)
      .catch(() => setErrorMsg('Sth went wrong. Try later.'))
      .finally(() => setIsLoading(false));
  }, [filterMethod]);

  const handleFilterSelection = useCallback(
    (method: GoodsFilter = GoodsFilter.All) => {
      setFilterMethod(method);
    },
    [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleFilterSelection(GoodsFilter.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFilterSelection(GoodsFilter.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleFilterSelection(GoodsFilter.RedOnly)}
      >
        Load red goods
      </button>

      {isLoading ? <p>Loading...</p> : <GoodsList goods={goods} />}

      {errorMsg && <h4>{errorMsg}</h4>}
    </div>
  );
};

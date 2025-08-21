import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum VisibList {
  emptie = '',
  all = 'All',
  five = 'Five',
  red = 'Red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visibleGoods, setVisibleGoods] = useState<VisibList>(VisibList.emptie);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (visibleGoods === VisibList.emptie) {
      return;
    }

    if (visibleGoods === VisibList.all) {
      getAll()
        .then(setGoods)
        .catch(err => {
          setError(err.message);
          setGoods([]);
        });
    }

    if (visibleGoods === VisibList.five) {
      get5First()
        .then(setGoods)
        .catch(err => {
          setError(err.message);
          setGoods([]);
        });
    }

    if (visibleGoods === VisibList.red) {
      getRedGoods()
        .then(setGoods)
        .catch(err => {
          setError(err.message);
          setGoods([]);
        });
    }
  }, [visibleGoods]);

  const handleSwitchAll = () => {
    return setVisibleGoods(VisibList.all);
  };

  const handleSwitchFive = () => {
    return setVisibleGoods(VisibList.five);
  };

  const handleSwitchRed = () => {
    return setVisibleGoods(VisibList.red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleSwitchAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleSwitchFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleSwitchRed}>
        Load red goods
      </button>

      {error !== '' && <p role="alert">{error}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};

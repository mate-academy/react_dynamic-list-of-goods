import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibilityOption, setVisibilityOption] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    const btnData = btn.getAttribute('data-cy');

    if (btnData) {
      setVisibilityOption(btnData);
    }
  };

  useEffect(() => {
    switch (visibilityOption) {
      case 'all-button': {
        getAll<Good[]>().then(setGoods);
        break;
      }

      case 'first-five-button': {
        get5First().then(setGoods);
        break;
      }

      case 'red-button': {
        getRedGoods().then(setGoods);
        break;
      }

      case '': {
        setGoods([]);
        break;
      }

      default: {
        throw new Error('This button should not be here');
      }
    }
  }, [visibilityOption]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClick}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleClick}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

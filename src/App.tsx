import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetGoodsButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setLoading(true);

    const buttonId = e.currentTarget.id;

    try {
      switch (buttonId) {
        case 'all-goods':
          const allGoods = await getAll();

          setGoods(allGoods);
          break;
        case 'first-five':
          const firstFiveGoods = await get5First();

          setGoods(firstFiveGoods);
          break;
        case 'red-only':
          const redGoods = await getRedGoods();

          setGoods(redGoods);
          break;
        default:
          break;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load goods:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        id="all-goods"
        type="button"
        data-cy="all-button"
        onClick={handleGetGoodsButtonClick}
      >
        Load all goods
      </button>

      <button
        id="first-five"
        type="button"
        data-cy="first-five-button"
        onClick={handleGetGoodsButtonClick}
      >
        Load 5 first goods
      </button>

      <button
        id="red-only"
        type="button"
        data-cy="red-button"
        onClick={handleGetGoodsButtonClick}
      >
        Load red goods
      </button>

      {loading ? <div>Loading...</div> : <GoodsList goods={goods} />}
    </div>
  );
};

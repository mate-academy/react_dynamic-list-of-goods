import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App:FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleShowGoods = async (filterFn: () => Promise<Good[]>) => {
    const filteredGoods = await filterFn();

    setGoods(filteredGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-black"
        type="button"
        data-cy="all-button"
        onClick={() => handleShowGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        className="button is-black"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleShowGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger"
        type="button"
        data-cy="red-button"
        onClick={() => handleShowGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

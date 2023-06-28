import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickAllGoods = async () => {
    setGoods(await getAll());
  };

  const handleClickFiveFirst = async () => {
    setGoods(await get5First());
  };

  const handleClickRedGoods = async () => {
    setGoods(await getRedGoods());
  };

  return ((
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickFiveFirst}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  ));
};

import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[]>([]);

  const loadAll = async () => {
    const allProducts = await getAll();

    return setData(allProducts);
  };

  const load5First = async () => {
    const fiveFirstGoods = await get5First();

    return setData(fiveFirstGoods);
  };

  const getRedProducts = async () => {
    const getRed = await getRedGoods();

    return setData(getRed);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={() => loadAll()}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => load5First()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedProducts()}
      >
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};

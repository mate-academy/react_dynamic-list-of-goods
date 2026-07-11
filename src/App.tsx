import { useCallback, useState } from 'react';
import { GoodsButtons } from './GoodsButtons';

import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { FilterType } from './types/FilterType';
import { GoodsLoader } from './types/GoodsLoader';

import * as goodsAPI from './api/goods';

const loaders: Record<FilterType, GoodsLoader> = {
  all: goodsAPI.getAll,
  first: goodsAPI.get5First,
  red: goodsAPI.getRedGoods,
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadGoods = useCallback(async (filterType: FilterType) => {
    setError(null);

    try {
      setGoods(await loaders[filterType]());
    } catch {
      setError('Something went wrong');
      setGoods([]);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <GoodsButtons onLoadGoods={handleLoadGoods} />

      {error ? <p>{error}</p> : <GoodsList goods={goods} />}
    </div>
  );
};

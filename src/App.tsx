import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoods = async (type: string) => {
    try {
      switch (type) {
        case 'allGoods':
          setGoods(await getAll());
          break;
        case 'firstFive':
          setGoods(await get5First());
          break;
        case 'redGoods':
          setGoods(await getRedGoods());
          break;
        default:
          throw new Error('Invalid goods selection');
      }
    } catch {
      throw new Error('Goods not found');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods('allGoods')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods('redGoods')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

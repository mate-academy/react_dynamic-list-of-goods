import { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const uploadGoods = async (loader: () => Promise<Good[]>) => {
    const goodsFromServer = await loader();

    setGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1 className="title is-1 mt-3 ml-3">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-success is-medium is-rounded ml-2 mr-2"
        onClick={() => uploadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-warning is-medium is-rounded mr-2"
        onClick={() => uploadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-medium is-rounded"
        onClick={() => uploadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

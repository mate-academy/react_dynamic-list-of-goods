import React, { useState } from 'react';
import './App.scss';

import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type CallBackFunc = () => Promise<Good[]>;

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (callBack: CallBackFunc) => {
    callBack()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => getGoods(getAll)}
        >
          all
        </button>

        <button
          type="button"
          onClick={() => getGoods(get5First)}
        >
          5
        </button>

        <button
          type="button"
          onClick={() => getGoods(getRedGoods)}
        >
          red
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

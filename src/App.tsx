import React, { memo, useCallback, useState } from 'react';

import './App.scss';
import './notmalize.scss';

import { GoodsList } from './components/GoodsList';
import { LoadButton } from './components/LoadButton';

import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = useCallback((callback:() => Promise<Good[]>) => {
    callback()
      .then(items => setGoods(items));
  }, []);

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <div className="load-buttons">
        <LoadButton
          title="Load All goods"
          action={() => {
            getGoods(getAll);
          }}
        />

        <LoadButton
          title="Load 5 first goods"
          action={() => {
            getGoods(get5First);
          }}
        />

        <LoadButton
          title="Load red goods"
          action={() => {
            getGoods(getRedGoods);
          }}
        />
      </div>

      <GoodsList goods={goods} />
    </div>
  );
});

export default App;

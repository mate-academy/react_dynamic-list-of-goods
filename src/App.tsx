import React, { useState } from 'react';
import { GoodList } from './components/GoodList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const createList = (callback:() => Promise<Good[]>) => (
    callback()
      .then(res => setGoods(res))
  );

  return (
    <div className="App">
      <div className="content App__content">
        <h2 className="title App__title">
          Dynamic list of goods
        </h2>
        <div className="buttons App__buttons">
          <button
            className="button buttons__button"
            type="button"
            onClick={() => createList(getAll)}
          >
            Load All goods
          </button>
          <button
            className="button buttons__button"
            type="button"
            onClick={() => createList(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="button buttons__button"
            type="button"
            onClick={() => createList(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {goods && (
          <GoodList goods={goods} />
        )}
      </div>
    </div>
  );
};

export default App;

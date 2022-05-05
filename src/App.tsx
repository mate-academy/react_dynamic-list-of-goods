import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList/GoodsList';
import { Good } from './react-app-env';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getShowList = (callback:() => Promise<Good[]>) => {
    callback()
      .then(res => setGoods(res));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <div className="App__block">
        <button
          type="button"
          onClick={() => {
            getShowList(getAll);
          }}
          className="App__block-btn"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            getShowList(get5First);
          }}
          className="App__block-btn"
        >
          Load 5 first good
        </button>
        <button
          type="button"
          onClick={() => {
            getShowList(getRedGoods);
          }}
          className="App__block-btn"
        >
          Load red goods
        </button>
      </div>
      <div>
        { goods && <GoodsList goods={goods} />}
      </div>
    </div>
  );
};

export default App;

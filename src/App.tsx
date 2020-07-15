import React, { useState } from 'react';
import './App.css';
import { responseFromServer } from './url';
import { Good } from './interfaces';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [upload, setUpload] = useState(false);

  const goodsFromServer = async (): Promise<Good[]> => {
    setUpload(true);
    const requestFromServer = await responseFromServer();

    setUpload(false);

    return requestFromServer;
  };

  const loadAllGoods = () => {
    goodsFromServer().then(data => setGoods(data));
  };

  const loadFiveFirstGoods = () => {
    goodsFromServer().then(data => {
      const filteredGoods = data.sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      setGoods(filteredGoods);
    });
  };

  const loadRegGoods = () => {
    goodsFromServer().then(data => {
      const filteredGoods = data.filter(good => good.color === 'red');

      setGoods(filteredGoods);
    });
  };

  return (
    <div className="wrap">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={loadAllGoods}
        className="button"
      >
        Load All Goods
      </button>
      <button
        type="button"
        onClick={loadFiveFirstGoods}
        className="button"
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={loadRegGoods}
        className="button"
      >
        Load red goods
      </button>
      {
        upload ? '' : <GoodsList goods={goods} />
      }
    </div>
  );
};

export default App;

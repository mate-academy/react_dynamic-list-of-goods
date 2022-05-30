import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    setGoods(await getAll());
  };

  const handleGet5First = async () => {
    setGoods(await get5First());
  };

  const handleGetRedGoods = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <div className="buttons">
        <button
          type="button"
          className="button i is-success"
          onClick={handleGetAll}
        >
          Get All
        </button>

        <button
          type="button"
          className="button is-warning"
          onClick={handleGet5First}
        >
          Get first 5
        </button>

        <button
          type="button"
          className="button is-danger"
          onClick={handleGetRedGoods}
        >
          Get red
        </button>
      </div>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};

export default App;

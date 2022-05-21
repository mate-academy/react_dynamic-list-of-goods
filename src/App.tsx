import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <div className="buttons">
        <button
          type="button"
          className="button i is-success"
          onClick={async () => {
            setGoods(await getAll());
          }}
        >
          Get All
        </button>

        <button
          type="button"
          className="button is-warning"
          onClick={async () => {
            setGoods(await get5First());
          }}
        >
          Get first 5
        </button>

        <button
          type="button"
          className="button is-danger"
          onClick={async () => {
            setGoods(await getRedGoods());
          }}
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

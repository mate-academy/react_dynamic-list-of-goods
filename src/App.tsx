import React, { useState } from 'react';
import './App.scss';

// import { getAll, get5First, getRedGoods } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Goods } from './Goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const loadGoods = async () => {
    const allGoods = await goodsAPI.getAll();

    setGoods(allGoods);
  };

  const load5Goods = async () => {
    const fiveGoods = await goodsAPI.get5First();

    setGoods(fiveGoods);
  };

  const loadRedGoods = async () => {
    const redGoods = await goodsAPI.getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Click on button</h1>

          <button
            type="button"
            className="btn btn-success"
            onClick={loadGoods}
          >
            All Goods
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={load5Goods}
          >
            Load Sorted 5 Goods
          </button>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-danger"
            onClick={loadRedGoods}
          >
            Red Goods
          </button>
        </div>
        <div className="col-md-6">
          <Goods goods={goods} />
        </div>
      </div>
    </div>
  );
};

export default App;

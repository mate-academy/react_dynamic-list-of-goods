import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';
import ShowGoodsBtn from './components/ShowGoodsBtn';
import 'bulma';
import './App.scss';

const App = () => {
  const [goods, setGoods] = useState([]);

  async function fetchData(fetchMethod) {
    setGoods(await fetchMethod());
  }

  return (
    <div className="content">
      <div className="content__inner">
        <h1>Dynamic list of Goods</h1>
        <ShowGoodsBtn
          btnName="Load All goods"
          onClick={() => fetchData(getAll)}
          bulmaClass="is-primary"
        />
        <ShowGoodsBtn
          btnName="Load 5 first goods"
          onClick={() => fetchData(get5First)}
          bulmaClass="is-warning"
        />
        <ShowGoodsBtn
          btnName="Load red goods"
          onClick={() => fetchData(getRedGoods)}
          bulmaClass="is-danger"
        />
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;

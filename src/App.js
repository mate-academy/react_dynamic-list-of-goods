import React, { useState } from 'react';
import GoodList from './components/GoodList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App = () => {
  const [listOfData, changeList] = useState([]);

  const loadFromServer = async(apiMethod) => {
    const data = await apiMethod();

    changeList(data);
  };

  return (
    <section className="App">
      <h1>Dynamic list of Goods</h1>
      <div className="box-button">
        <button
          type="button"
          onClick={() => loadFromServer(getAll)}
        >
          All List
        </button>
        <button
          type="button"
          onClick={() => loadFromServer(get5First)}
        >
          get5First
        </button>
        <button
          type="button"
          onClick={() => loadFromServer(getRedGoods)}
        >
          getRedGoods
        </button>
      </div>
      <GoodList className="list" list={listOfData} />
    </section>
  );
};

export default App;

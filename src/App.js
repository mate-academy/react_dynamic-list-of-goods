import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  setGoods = async(selectedMethod) => {
    const goods = await selectedMethod();

    this.setState({ goods });
  }

  render() {
    const { setGoods } = this;
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => setGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => setGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => setGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

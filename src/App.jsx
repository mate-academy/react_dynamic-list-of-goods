import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  changeGoods = async(f) => {
    const goods = await f();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">Dynamic list of Goods</h1>

        <button
          className="App__button"
          type="button"
          onClick={() => this.changeGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.changeGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.changeGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

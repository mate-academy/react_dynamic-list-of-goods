import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  loadGoods = async(func) => {
    const goods = await func();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <main className="app">
        <h1 className="app__header">Dynamic list of Goods</h1>
        <button
          type="button"
          className="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Show all goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Show red goods
        </button>

        <GoodsList goods={goods} />
      </main>
    );
  }
}

export default App;

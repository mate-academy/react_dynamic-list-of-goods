import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  filterList = (callback) => {
    callback().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.filterList(getAll)}
        >
          Load All
        </button>

        <button
          type="button"
          onClick={() => this.filterList(get5First)}
        >
          Load 5 first
        </button>

        <button
          type="button"
          onClick={() => this.filterList(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

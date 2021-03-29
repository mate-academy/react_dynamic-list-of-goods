import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = { goods: [] }

  fetchGoods = (getData) => {
    getData()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.fetchGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.fetchGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.fetchGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './GoodList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  filterGoods = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <GoodList goods={goods} />

        <button
          type="button"
          onClick={
            () => this.filterGoods(getAll)}
        >
          All goods
        </button>
        {' '}

        <button
          type="button"
          onClick={() => this.filterGoods(get5First)}
        >
          5 first goods
        </button>
        {' '}

        <button
          type="button"
          onClick={() => this.filterGoods(getRed)}
        >
          red goods
        </button>
      </>
    );
  }
}

export default App;

import React from 'react';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = getType => (
    getType().then((goods) => {
      this.setState({ goods });
    })
  )

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => (this.loadGoods(getAll))}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => (this.loadGoods(get5First))}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => (this.loadGoods(getRed))}
        >
          Load red goods
        </button>

        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

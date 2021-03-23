import React from 'react';
import { GoodList } from './components/GoodList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods(goods) {
    goods()
      .then(response => this.setState({ goods: response }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={() => this.loadGoods(getAll)
          }
          type="button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

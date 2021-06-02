import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  handleClick = (func) => {
    func().then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Load red goods
        </button>

        {this.state.goods.length > 0 && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;

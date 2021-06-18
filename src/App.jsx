import React from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  filterGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.filterGoods(getAll)}
        >
          Shows All
        </button>

        <button
          type="button"
          onClick={() => this.filterGoods(get5First)}
        >
          Shows 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.filterGoods(getRedGoods)}
        >
          Shows red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

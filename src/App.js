import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  };

  showGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.showGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(getRed)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

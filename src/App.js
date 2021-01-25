import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  load5Goods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5Goods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;

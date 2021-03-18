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

  loadAllGoods() {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  load5First() {
    get5First()
      .then((goods) => {
        goods.sort((currGood, nextGood) => (
          currGood.name.localeCompare(nextGood.name)
        ));
        this.setState({ goods });
      });
  }

  loadRedGoods() {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={() => this.loadAllGoods()}
          type="button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.load5First()}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.loadRedGoods()}
        >
          Load red goods
        </button>
        <GoodList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getAllGoods() {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  }

  get5FirstGoods() {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  }

  getRedGoods() {
    getRed()
      .then(goods => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <div className="content">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getAllGoods()}
          className="button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.get5FirstGoods()}
          className="button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.getRedGoods()}
          className="button"
        >
          Load red goods
        </button>

        {this.state.goods.length > 0 && <GoodsList goods={this.state.goods} />}
      </div>

    );
  }
}
export default App;

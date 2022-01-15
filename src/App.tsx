import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadGoods5First = () => {
    get5First()
      .then(goods5First => {
        this.setState({ goods: goods5First });
      });
  };

  loadRedGoods = () => {
    getRedGoods()
      .then(goodsRed => {
        this.setState({ goods: goodsRed });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <div className="buttons">
          <button
            type="button"
            onClick={this.loadGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={this.loadGoods5First}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

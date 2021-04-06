import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import 'bulma';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: '',
  }

  handleGoods = (hadledGoods) => {
    hadledGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1 className="title">Dynamic list of Goods</h1>

        <div>
          <button
            className="goods-button button"
            type="button"
            onClick={() => this.handleGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            className="goods-button button"
            type="button"
            onClick={() => this.handleGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="goods-button button"
            type="button"
            onClick={() => this.handleGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {this.state.goods.length > 0
          && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}

export default App;

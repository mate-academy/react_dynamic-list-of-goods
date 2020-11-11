/* eslint-disable arrow-parens */
import React from 'react';

import './App.scss';
import * as goodsAPI from './api/goods';
import GoodsList from './GoodsList';

class App extends React.Component {
  state = { goods: [] };

  render() {
    const { goods } = this.state;
    const { getAll, get5First, getRedGoods } = goodsAPI;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            getAll().then((res) => this.setState({ goods: res }));
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            get5First().then((res) => this.setState({ goods: res }));
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            getRedGoods().then((res) => this.setState({ goods: res }));
          }}
        >
          Load red goods
        </button>

        <h2>Goods: </h2>
        {goods.length > 0 ? <GoodsList goods={goods} /> : 'No goods yet'}
      </div>
    );
  }
}

export default App;

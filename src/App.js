import React from 'react';

import './App.scss';
import { GoodsList } from './components';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleGetGoods = () => (
    getAll()
      .then((goods) => {
        this.setState({ goods });
      })
  );

  handleFirst5 = () => (
    get5First()
      .then((goods) => {
        this.setState({ goods });
      })
  )

  handleRedGoods = () => (
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      })
  )

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handleGetGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.handleFirst5}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.handleRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

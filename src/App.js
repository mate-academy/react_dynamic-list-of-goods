import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handlerForGoods = (loadGoods) => {
    loadGoods().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.handlerForGoods(getAll);
          }}
        >
          Show all goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.handlerForGoods(get5First);
          }}
        >
          First 5 goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.handlerForGoods(getRedGoods);
          }}
        >
          Red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

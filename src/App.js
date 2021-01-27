import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

class App extends React.Component {
  state = {
    goods: null,
  }

  goodsHandler = async(callback) => {
    const goods = [...await callback()];

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.goodsHandler(getAll);
          }}
        >
          getAll;
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsHandler(get5First);
          }}
        >
          get5First;
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsHandler(getRedGoods);
          }}
        >
          getRedGoods;
        </button>
        {this.state.goods && <GoodList list={goods} />}
      </>
    );
  }
}

export default App;

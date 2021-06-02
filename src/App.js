import React from 'react';

import './App.scss';
import { GoodsList } from './component/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleClickButton = callback => (
    callback()
      .then(goods => this.setState({ goods }))
  );

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          name="add-all"
          onClick={() => this.handleClickButton(getAll)}
        >
          All goods
        </button>

        <button
          type="button"
          name="get-five"
          onClick={() => this.handleClickButton(get5First)}
        >
          5 first
        </button>

        <button
          type="button"
          name="get-red"
          onClick={() => this.handleClickButton(getRedGoods)}
        >
          Red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

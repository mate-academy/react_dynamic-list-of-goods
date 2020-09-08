import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import GooodList from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(func) => {
    const goods = await func();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(getAll);
          }}
        >
          Show All
        </button>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(get5First);
          }}
        >
          Show 5 first
        </button>
        <button
          type="button"
          onClick={() => {
            this.loadGoods(getRedGoods);
          }}
        >
          Show Red Goods
        </button>
        {}
        <GooodList data={this.state.goods} />
      </>
    );
  }
}

export default App;

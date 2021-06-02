import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  onClickFilters = filter => (
    filter()
      .then(goods => (
        this.setState({
          goods,
        })
      ))

  )

  render() {
    const { goods } = this.state;

    return (

      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.onClickFilters(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.onClickFilters(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.onClickFilters(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

class App extends React.Component {
  state = {
    goods: [],
  };

  selectGoods = (fetchGoods) => {
    fetchGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.selectGoods(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.selectGoods(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.selectGoods(getRedGoods)}>
          Load red goods
        </button>
        <GoodList goods={goods} />
      </>
    );
  }
}

export default App;

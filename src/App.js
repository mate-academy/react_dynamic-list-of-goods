import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = (receiveGoods) => {
    receiveGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="submit"
          onClick={() => {
            this.setGoods(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.setGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.setGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

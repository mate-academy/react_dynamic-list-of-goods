import React from 'react';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: null,
    goodsIsSelected: false,
  }

  showGoods = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      })
      .then(() => this.setState({ goodsIsSelected: true }));
  }

  render() {
    const { goodsIsSelected, goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={() => {
            this.showGoods(getAll);
          }}
          type="button"
        >
          Load All goods
        </button>
        <button
          onClick={() => {
            this.showGoods(get5First);
          }}
          type="button"
        >
          Load 5 first goods
        </button>
        <button
          onClick={() => {
            this.showGoods(getRed);
          }}
          type="button"
        >
          Load red goods
        </button>

        {goodsIsSelected && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;

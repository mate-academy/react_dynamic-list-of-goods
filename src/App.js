import React from 'react';
import { GoodsList } from './components/index';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  visibleAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  visibleFive = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  visibleRedGoods = () => {
    getRed()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.visibleAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.visibleFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.visibleRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

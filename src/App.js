import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showFirstFive = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        <button
          type="button"
          onClick={this.showAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.showFirstFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

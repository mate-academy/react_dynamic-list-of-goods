import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  showAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  showFiveFirst = () => {
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
          className="button"
          type="button"
          onClick={this.showAll}
        >
          Load all Goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.showFiveFirst}
        >
          Load 5 first Goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.showRedGoods}
        >
          Load red Goods
        </button>
      </>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList/GoodsList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAll = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadFirstFive = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadRed = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />
        <button
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRed}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;

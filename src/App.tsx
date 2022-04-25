import React from 'react';
import './App.scss';
import { GoodList } from './GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';
// import { type } from 'os';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  allGoods = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  showGoods = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  showRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.allGoods}>
          Load All goods
        </button>
        <button type="button" onClick={this.showGoods}>
          Load 5 first goods
        </button>
        <button type="button" onClick={this.showRedGoods}>
          Load red goods
        </button>
        {this.state.goods.length !== 0 && (
          <GoodList goods={this.state.goods} />
        )}
      </>
    );
  }
}

export default App;

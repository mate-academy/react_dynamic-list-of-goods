import React from 'react';

import './App.scss';

import GoodsList from './components/GoodsList';

import * as goodsAPI from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadAllGoods = async () => {
    const goodsFromServer = await goodsAPI.getAll();

    this.setState({ goods: goodsFromServer });
  };

  loadFiveGoods = async () => {
    const goodsFromServer = await goodsAPI.get5First();

    this.setState({ goods: goodsFromServer });
  };

  loadRedGoods = async () => {
    const goodsFromServer = await goodsAPI.getRedGoods();

    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load all goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

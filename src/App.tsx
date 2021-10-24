import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[] | [];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  ShowAllGoods = () => {
    getAll().then(goods => {
      this.setState({ goods });
    });
  };

  load5FirstGoods = () => {
    get5First().then(goods => {
      this.setState({ goods });
    });
  };

  loadRedGoods = () => {
    getRedGoods().then(goods => {
      this.setState({ goods });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.ShowAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList
          goodsList={goods}
        />
      </>
    );
  }
}

export default App;

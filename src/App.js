import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  };

  showAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  };

  showFirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  };

  showRedGoods = async() => {
    const goods = await getRed();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={this.showAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={this.showFirstGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.showRedGoods}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

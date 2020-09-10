import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  load5FirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    // const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Show all goods
        </button>
        <button
          type="button"
          onClick={this.load5FirstGoods}
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Show red goods
        </button>
        <GoodList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  enlistGoods = async(promise) => {
    const goods = await promise();

    this.setState({
      goods,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.enlistGoods(getAll)}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.enlistGoods(get5First)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.enlistGoods(getRedGoods)}>
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>

    );
  }
}

export default App;

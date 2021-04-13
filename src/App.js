import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = async(getFunction) => {
    const result = await getFunction();

    this.setState({ goods: result });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;

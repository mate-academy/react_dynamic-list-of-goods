import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './Good';
// or
// import * as goodsAPI from './api/goods';
interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoods = async (callback:() => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Get all goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Get 5 first
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Get red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;

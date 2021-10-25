import React from 'react';
import './App.scss';
// import { getAll, get5First, getRed } from './api/goods';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';

interface State {
  goods: Good[] | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: null,
  };

  getGoods = async (typeOfGoods: () => Promise<Good[]>) => {
    const goods = await typeOfGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const {
      getAll,
      get5First,
      getRedGoods,
    } = goodsAPI;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
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
        {goods && (<GoodsList goods={goods} />)}
      </>
    );
  }
}

export default App;

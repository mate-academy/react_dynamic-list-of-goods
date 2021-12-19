/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import { Good } from './Types/Good';
import { GoodsList } from './Components/GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

type State = {
  goods: Good[] | [],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render(): React.ReactNode {
    console.log(this.state.goods);

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.setGoods(goodsAPI.getAll);
          }}
        >
          Get goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.setGoods(goodsAPI.get5First);
          }}
        >
          Get first 5 goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.setGoods(goodsAPI.getRedGoods);
          }}
        >
          Get red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

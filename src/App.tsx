import React from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';
import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  buttonHandler = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods List</h1>
        <button
          type="button"
          className="App__button"
          onClick={() => this.buttonHandler(goodsAPI.getAll)}
        >
          Load All Goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => this.buttonHandler(goodsAPI.get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => this.buttonHandler(goodsAPI.getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

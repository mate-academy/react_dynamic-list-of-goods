import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    currentGoods: [],
  }

  goodsHandler = async(callback) => {
    this.setState({
      currentGoods: await callback(),
    });
  }

  render() {
    const { currentGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        <div className="app__buttons">
          <button
            type="button"
            className="app__button"
            onClick={() => this.goodsHandler(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => this.goodsHandler(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => this.goodsHandler(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        <GoodsList
          currentGoods={currentGoods}
        />
      </div>
    );
  }
}

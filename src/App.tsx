import React, { Component } from 'react';
import './App.css';
import { Good } from './types';
import { getGoods } from './API/API';
import { GoodsList } from './Components/GoodsList'

type State = {
  goods: Good[];
};

interface ResponseData<D> {
  data: D;
}

type GoodsData = ResponseData<Good[]>;

export class App extends Component<{}, State> {
  state: State = {
    goods: [],
  };

  getAllGoods = () => {
    getGoods()
      .then(({ data }: GoodsData) => this.setState({
        goods: data,
      }))
      .catch(error => {
        throw new Error(error.message);
      });
  };

  get5FirstGoods = () => {
    getGoods()
      .then(({ data }: GoodsData) => this.setState({
        goods: data.slice(0, 5),
      }))
      .catch(error => {
        throw new Error(error.message);
      });
  };

  getRedGoods = () => {
    getGoods()
      .then(({ data }: GoodsData) => this.setState({
        goods: data.filter(item => item.color === 'red'),
      }))
      .catch(error => {
        throw new Error(error.message);
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.getAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.get5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.getRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

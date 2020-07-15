import React, { Component } from 'react';
import './App.css';
import { Good, GoodsData } from './types';
import { getGoods } from './API/API';
import { GoodsList } from './Components/GoodsList/GoodsList'
import { Button } from './Components/Button/Button';

type State = {
  goods: Good[];
};

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
        goods: data
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5),
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
        <Button
          text="Load All goods"
          onClick={this.getAllGoods}
        />

        <Button
          text="Load 5 first goods"
          onClick={this.get5FirstGoods}
        />
        <Button
          text="Load red goods"
          onClick={this.getRedGoods}
        />

        <GoodsList goods={goods} />
      </div>
    );
  }
}

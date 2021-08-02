import React from 'react';

import './App.scss';
import { Button } from './components/Button';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],

  }

  allGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  fiveFirstGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  getRedGoods = async() => {
    const goods = await getRed();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button onClick={this.allGoods} text="Load All goods" />
        <Button onClick={this.fiveFirstGoods} text="Load 5 first goods" />
        <Button onClick={this.getRedGoods} text="Load red goods" />
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

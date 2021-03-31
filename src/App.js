import React from 'react';

import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  loadFiveGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  LoadRedGoods = async() => {
    const goods = await getRed();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          text="Load All goods"
          onClick={this.loadGoods}
        />
        <Button
          text="Load 5 first goods"
          onClick={this.loadFiveGoods}
        />
        <Button
          text="Load red goods"
          onClick={this.LoadRedGoods}
        />
        <GoodsList
          goods={goods}
        />
      </>
    );
  }
}

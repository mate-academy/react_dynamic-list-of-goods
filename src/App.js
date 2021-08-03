import React from 'react';

import './App.scss';
import { Button } from './components/Button';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],

  }

  getGoodsFromServer = async(goodsFromServer) => {
    const goods = await goodsFromServer();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          onClick={() => this.getGoodsFromServer(getAll)}
          text="Load All goods"
        />
        <Button
          onClick={() => this.getGoodsFromServer(get5First)}
          text="Load 5 first goods"
        />
        <Button
          onClick={() => this.getGoodsFromServer(getRed)}
          text="Load red goods"
        />
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export class App extends Component {
  state = {
    goods: [],
  };

  getGoodsByLoader = (loader) => {
    loader()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          text="Load All goods"
          handleClick={this.getGoodsByLoader}
          loadBy={getAll}
        />
        <Button
          text="Load All goods"
          handleClick={this.getGoodsByLoader}
          loadBy={get5First}
        />
        <Button
          text="Load red goods"
          handleClick={this.getGoodsByLoader}
          loadBy={getRed}
        />
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

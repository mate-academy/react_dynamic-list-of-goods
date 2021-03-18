import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { fetchAllGoods, fetch5FirstGoods, fetchRedGoods } from './api/goods';

import './App.scss';

export class App extends Component {
  state = {
    goods: [],
  };

  setList = async() => {
    const data = await fetchAllGoods();

    this.setState({ goods: data });
  }

  setSortedGoods = async() => {
    const data = await fetch5FirstGoods();

    this.setState({ goods: data.slice(0, 5) });
  }

  setGoodsWithColor = async() => {
    const data = await fetchRedGoods();

    this.setState({ goods: data });
  }

  render() {
    const { setList, setSortedGoods, setGoodsWithColor } = this;
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <Button
          text="Load All goods"
          onClick={setList}
        />

        <Button
          text="Load 5 first goods"
          onClick={setSortedGoods}

        />
        <Button
          text="Load red goods"
          onClick={setGoodsWithColor}
        />
        {goods.length > 0
        && (<GoodsList goods={goods} />)}
      </>
    );
  }
}

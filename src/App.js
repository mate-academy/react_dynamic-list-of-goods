import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { fetchAllGoods, fetch5FirstGoods, fetchRedGoods } from './api/goods';

import './App.scss';

export class App extends Component {
  state = {
    goods: [],
  };

  setList = async callback => this.setState({
    goods: await callback(),
  });

  render() {
    const { setList } = this;
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <Button
          text="Load All goods"
          onClick={() => setList(fetchAllGoods)}
        />

        <Button
          text="Load 5 first goods"
          onClick={() => setList(fetch5FirstGoods)}

        />
        <Button
          text="Load red goods"
          onClick={() => setList(fetchRedGoods)}
        />
        {goods.length > 0
        && (<GoodsList goods={goods} />)}
      </>
    );
  }
}

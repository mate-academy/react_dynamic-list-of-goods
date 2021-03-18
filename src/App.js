import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

import './App.scss';

export class App extends Component {
  state = {
    listOfGoods: [],
  };

  setList = async() => {
    const data = await getAllGoods();

    this.setState({ listOfGoods: data });
  }

  setSortedGoods = async() => {
    const data = await get5FirstGoods();
    const sortedGoods = data.sort(
      (currentGoods, nextGoods) => (
        currentGoods.name.localeCompare(nextGoods.name)
      ),
    );

    this.setState({ listOfGoods: sortedGoods.slice(0, 5) });
  }

  setGoodsWithColor = async() => {
    const data = await getRedGoods();

    this.setState({
      listOfGoods: data.filter(
        goods => goods.color === 'red',
      ),
    });
  }

  render() {
    const { setList, setSortedGoods, setGoodsWithColor } = this;
    const { listOfGoods } = this.state;

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
        {listOfGoods.length > 0
        && (<GoodsList goods={listOfGoods} />)}
      </>
    );
  }
}

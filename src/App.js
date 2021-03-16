import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

import './App.scss';

export class App extends Component {
  state = {
    listOfGoods: [],
  };

  setList = (list) => {
    this.setState({ listOfGoods: list });
  }

  render() {
    const { setList } = this;
    const { listOfGoods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <Button
          text="Load All goods"
          onClick={getAllGoods}
          onGet={setList}
        />

        <Button
          text="Load 5 first goods"
          onClick={get5FirstGoods}
          onGet={setList}

        />
        <Button
          text="Load red goods"
          onClick={getRedGoods}
          onGet={setList}
        />
        {listOfGoods.length > 0
        && (<GoodsList goods={listOfGoods} />)}
      </>
    );
  }
}

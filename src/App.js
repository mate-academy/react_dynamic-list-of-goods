import React, { Component } from 'react';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

export class App extends Component {
  state = {
    renderedList: [],
  };

  getList = (list) => {
    this.setState({ renderedList: list });
  }

  render() {
    const { getList } = this;
    const { renderedList } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <Button
          text="Load All goods"
          onClick={getAll}
          onGet={getList}
        />

        <Button
          text="Load 5 first goods"
          onClick={get5First}
          onGet={getList}

        />
        <Button
          text="Load red goods"
          onClick={getRedGoods}
          onGet={getList}
        />
        {renderedList.length > 0
        && (<GoodsList goods={renderedList} />)}
      </>
    );
  }
}

import React, { Component } from 'react';

import './App.scss';
import { Button } from './components/Button';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends Component {
  state = {
    goods: [],
  }

  renderGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          onClick={() => this.renderGoods(getAll)}
          name="Load All goods"
        />
        <Button
          onClick={() => this.renderGoods(get5First)}
          name="Load 5 first goods"
        />
        <Button
          onClick={() => this.renderGoods(getRedGoods)}
          name="Load red goods"
        />
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;

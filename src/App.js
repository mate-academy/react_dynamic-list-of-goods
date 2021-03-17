import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';
import { ShowGoodsButton } from './components/ShowGoodsButton';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAllGoods();

    this.setState({ goods });
  }

  load5FirstGoods = async() => {
    const goods = await get5FirstGoods();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <ShowGoodsButton
          text="Load All goods"
          onClick={this.loadAllGoods}
        />
        <ShowGoodsButton
          text="Load 5 first goods"
          onClick={this.load5FirstGoods}
        />
        <ShowGoodsButton
          text="Load red goods"
          onClick={this.loadRedGoods}
        />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;

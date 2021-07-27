import React from 'react';
import { GoodsList } from './components/GoodsList';
import { GoodsForm } from './components/GoodsForm';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    classes: 'control button is-primary',
  }

  getAllGoods = async() => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  }

  get5FirstGoods = async() => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  }

  getRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  }

  render() {
    return (
      <>
        <h1 className="content is-large header">Dynamic list of Goods</h1>
        <GoodsList
          goods={this.state.goods}
        />
        <GoodsForm
          getAllGoods={this.getAllGoods}
          get5FirstGoods={this.get5FirstGoods}
          getRedGoods={this.getRedGoods}
          classes={this.state.classes}
        />
      </>
    );
  }
}

export default App;

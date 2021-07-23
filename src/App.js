import React from 'react';
import { GoodsList } from './components/GoodsList';
import { GoodsForm } from './components/GoodsForm';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  async getAllGoods() {
    getAll()
      .then(goods => this.setState({
        goods,
      }));
  }

  get5FirstGoods() {
    get5First()
      .then(goods => this.setState({
        goods,
      }));
  }

  getRedGoods() {
    getRedGoods()
      .then(goods => this.setState({
        goods,
      }));
  }

  render() {
    return (
      <>
        <h1 className="content is-large header">Dynamic list of Goods</h1>
        <GoodsList
          goods={this.state.goods}
        />
        <GoodsForm
          getAll={() => {
            this.getAllGoods();
          }}
          get5First={() => {
            this.get5FirstGoods();
          }}
          getRedGoods={() => {
            this.getRedGoods();
          }}
        />
      </>
    );
  }
}

export default App;

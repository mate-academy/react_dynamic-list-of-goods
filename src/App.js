import React from 'react';
import { GoodsList } from './components/GoodsList';
import { GoodsForm } from './components/GoodsForm';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    classesWhenLoaded: 'control button is-primary',
    classesWhenLoading: 'control button is-primary is-loading',
  }

  async getAllGoods(target) {
    const goods = await getAll();

    this.setState({
      goods,
    });

    // eslint-disable-next-line
    target.className = this.state.classesWhenLoaded;
  }

  async get5FirstGoods(target) {
    const goods = await get5First();

    this.setState({
      goods,
    });

    // eslint-disable-next-line
    target.className = this.state.classesWhenLoaded;
  }

  async getRedGoods(target) {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });

    // eslint-disable-next-line
    target.className = this.state.classesWhenLoaded;
  }

  render() {
    return (
      <>
        <h1 className="content is-large header">Dynamic list of Goods</h1>
        <GoodsList
          goods={this.state.goods}
        />
        <GoodsForm
          getAll={(target) => {
            this.getAllGoods(target);
          }}
          get5First={(target) => {
            this.get5FirstGoods(target);
          }}
          getRedGoods={(target) => {
            this.getRedGoods(target);
          }}
          classesWhenLoaded={this.state.classesWhenLoaded}
          classesWhenLoading={this.state.classesWhenLoading}
        />
      </>
    );
  }
}

export default App;
